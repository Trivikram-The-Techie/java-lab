package server;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.*;

/**
 * Pure Java multipart/form-data parser.
 * Handles binary files (PDFs) and form fields without external libraries.
 */
public class MultipartFormDataParser {

    public static class FileItem {
        private final String fieldName;
        private final String fileName;
        private final String contentType;
        private final byte[] data;

        public FileItem(String fieldName, String fileName, String contentType, byte[] data) {
            this.fieldName = fieldName;
            this.fileName = fileName;
            this.contentType = contentType;
            this.data = data;
        }

        public String getFieldName() {
            return fieldName;
        }

        public String getFileName() {
            return fileName;
        }

        public String getContentType() {
            return contentType;
        }

        public byte[] getData() {
            return data;
        }
    }

    public static class ParseResult {
        private final Map<String, String> fields = new HashMap<>();
        private final List<FileItem> files = new ArrayList<>();

        public Map<String, String> getFields() {
            return fields;
        }

        public List<FileItem> getFiles() {
            return files;
        }

        public String getField(String name) {
            return fields.get(name);
        }

        public FileItem getFirstFile() {
            return files.isEmpty() ? null : files.get(0);
        }
    }

    public static ParseResult parse(InputStream in, String contentTypeHeader) throws IOException {
        ParseResult result = new ParseResult();
        if (contentTypeHeader == null || !contentTypeHeader.toLowerCase().contains("multipart/form-data")) {
            return result;
        }

        String boundary = null;
        for (String param : contentTypeHeader.split(";")) {
            String trimmed = param.trim();
            if (trimmed.toLowerCase().startsWith("boundary=")) {
                boundary = trimmed.substring("boundary=".length());
                if (boundary.startsWith("\"") && boundary.endsWith("\"") && boundary.length() >= 2) {
                    boundary = boundary.substring(1, boundary.length() - 1);
                }
                break;
            }
        }

        if (boundary == null || boundary.isEmpty()) {
            return result;
        }

        byte[] boundaryBytes = ("--" + boundary).getBytes(StandardCharsets.ISO_8859_1);

        // Read entire incoming stream
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        byte[] buffer = new byte[16384];
        int read;
        while ((read = in.read(buffer)) != -1) {
            baos.write(buffer, 0, read);
        }
        byte[] body = baos.toByteArray();

        // Locate boundary markers
        List<Integer> positions = findOccurrences(body, boundaryBytes);
        for (int i = 0; i < positions.size() - 1; i++) {
            int partStart = positions.get(i) + boundaryBytes.length;
            int partEnd = positions.get(i + 1);

            // Skip CRLF after boundary
            if (partStart < body.length && body[partStart] == '\r') partStart++;
            if (partStart < body.length && body[partStart] == '\n') partStart++;

            // Trim CRLF before next boundary
            if (partEnd >= 2 && body[partEnd - 2] == '\r' && body[partEnd - 1] == '\n') {
                partEnd -= 2;
            } else if (partEnd >= 1 && body[partEnd - 1] == '\n') {
                partEnd -= 1;
            }

            if (partStart >= partEnd) continue;

            // Header separator: \r\n\r\n or \n\n
            int headerSep = -1;
            int headerSepLen = 0;
            for (int p = partStart; p < partEnd - 1; p++) {
                if (p + 3 < partEnd && body[p] == '\r' && body[p + 1] == '\n' && body[p + 2] == '\r' && body[p + 3] == '\n') {
                    headerSep = p;
                    headerSepLen = 4;
                    break;
                }
                if (body[p] == '\n' && body[p + 1] == '\n') {
                    headerSep = p;
                    headerSepLen = 2;
                    break;
                }
            }

            if (headerSep == -1) continue;

            String headerText = new String(body, partStart, headerSep - partStart, StandardCharsets.UTF_8);
            int dataStart = headerSep + headerSepLen;
            int dataLength = partEnd - dataStart;
            if (dataLength < 0) continue;

            byte[] partData = new byte[dataLength];
            System.arraycopy(body, dataStart, partData, 0, dataLength);

            Map<String, String> partHeaders = parseHeaders(headerText);
            String disp = partHeaders.get("content-disposition");
            String partContentType = partHeaders.getOrDefault("content-type", "application/octet-stream");

            if (disp != null) {
                String name = extractParam(disp, "name");
                String filename = extractParam(disp, "filename");

                if (filename != null && !filename.trim().isEmpty()) {
                    // Extract basename if full path was sent by browser
                    String cleanName = sanitizeFilename(filename);
                    result.files.add(new FileItem(name, cleanName, partContentType, partData));
                } else if (name != null) {
                    result.fields.put(name, new String(partData, StandardCharsets.UTF_8).trim());
                }
            }
        }

        return result;
    }

    private static String sanitizeFilename(String raw) {
        String clean = raw.trim();
        int slash = Math.max(clean.lastIndexOf('/'), clean.lastIndexOf('\\'));
        if (slash != -1) {
            clean = clean.substring(slash + 1);
        }
        return clean;
    }

    private static Map<String, String> parseHeaders(String headerText) {
        Map<String, String> map = new HashMap<>();
        String[] lines = headerText.split("\r?\n");
        for (String line : lines) {
            int colon = line.indexOf(':');
            if (colon != -1) {
                map.put(line.substring(0, colon).trim().toLowerCase(), line.substring(colon + 1).trim());
            }
        }
        return map;
    }

    private static String extractParam(String headerValue, String paramName) {
        String target = paramName + "=";
        for (String token : headerValue.split(";")) {
            String trimmed = token.trim();
            if (trimmed.toLowerCase().startsWith(target.toLowerCase())) {
                String val = trimmed.substring(target.length()).trim();
                if (val.startsWith("\"") && val.endsWith("\"") && val.length() >= 2) {
                    val = val.substring(1, val.length() - 1);
                }
                return val;
            }
        }
        return null;
    }

    private static List<Integer> findOccurrences(byte[] source, byte[] target) {
        List<Integer> list = new ArrayList<>();
        if (target.length == 0 || source.length < target.length) return list;

        outer:
        for (int i = 0; i <= source.length - target.length; i++) {
            for (int j = 0; j < target.length; j++) {
                if (source[i + j] != target[j]) {
                    continue outer;
                }
            }
            list.add(i);
            i += target.length - 1;
        }
        return list;
    }
}
