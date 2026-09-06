package server;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

import java.io.*;
import java.net.InetSocketAddress;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.concurrent.Executors;

/**
 * Lightweight pure-Java HTTP server.
 * Serves the assignment viewer matching the reference site (HTML5, CSS, Vanilla JS)
 * and handles PDF uploads for Week 1 through Week 12.
 */
public class AssignmentServer {
    private static final int DEFAULT_PORT = 8080;
    private static final int TOTAL_WEEKS = 8;
    private final int port;
    private final Path rootDir;
    private final ProfileManager profileManager;

    public AssignmentServer(int port, Path rootDir) {
        this.port = port;
        this.rootDir = rootDir;
        this.profileManager = new ProfileManager(rootDir);
    }

    public void start() throws IOException {
        int activePort = port;
        HttpServer server = null;
        for (int p = port; p < port + 10; p++) {
            try {
                server = HttpServer.create(new InetSocketAddress(p), 0);
                activePort = p;
                break;
            } catch (IOException e) {
                System.out.println("Port " + p + " is occupied, trying next port...");
            }
        }

        if (server == null) {
            throw new IOException("Could not bind HTTP server to any port starting from " + port);
        }

        server.setExecutor(Executors.newCachedThreadPool());

        // Route handlers
        server.createContext("/", new StaticFileHandler());
        server.createContext("/api/status", new StatusHandler());
        server.createContext("/api/profile", new ProfileHandler());
        server.createContext("/api/upload", new UploadHandler());
        server.createContext("/api/delete", new DeleteHandler());

        server.start();

        System.out.println("==================================================================");
        System.out.println("  ASSIGNMENT VIEWER SERVER RUNNING");
        System.out.println("  Local URL: http://localhost:" + activePort);
        System.out.println("  Root Directory: " + rootDir.toAbsolutePath());
        System.out.println("  PDF Files: java1.pdf ... java12.pdf");
        System.out.println("==================================================================");
    }

    /**
     * Serves static files: index.html, java1.pdf ... java12.pdf, etc.
     */
    private class StaticFileHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String rawPath = exchange.getRequestURI().getPath();
            if (rawPath == null || rawPath.equals("/") || rawPath.equals("/index.html")) {
                rawPath = "/index.html";
            }

            String path = URLDecoder.decode(rawPath, StandardCharsets.UTF_8);
            String relative = path.startsWith("/") ? path.substring(1) : path;

            Path targetFile = rootDir.resolve(relative).normalize();
            if (!Files.exists(targetFile) || Files.isDirectory(targetFile)) {
                Path webFile = rootDir.resolve("web").resolve(relative).normalize();
                if (Files.exists(webFile) && !Files.isDirectory(webFile)) {
                    targetFile = webFile;
                }
            }

            // Security check: ensure target is within rootDir
            if (!targetFile.startsWith(rootDir) || !Files.exists(targetFile) || Files.isDirectory(targetFile)) {
                sendJson(exchange, 404, "{\"error\":\"File not found: " + escapeJson(path) + "\"}");
                return;
            }

            String lower = path.toLowerCase();
            String contentType;
            if (lower.endsWith(".html")) contentType = "text/html; charset=UTF-8";
            else if (lower.endsWith(".css")) contentType = "text/css; charset=UTF-8";
            else if (lower.endsWith(".js")) contentType = "application/javascript; charset=UTF-8";
            else if (lower.endsWith(".pdf")) contentType = "application/pdf";
            else if (lower.endsWith(".svg")) contentType = "image/svg+xml";
            else if (lower.endsWith(".png")) contentType = "image/png";
            else if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) contentType = "image/jpeg";
            else if (lower.endsWith(".json")) contentType = "application/json; charset=UTF-8";
            else {
                contentType = Files.probeContentType(targetFile);
                if (contentType == null) contentType = "application/octet-stream";
            }

            byte[] bytes = Files.readAllBytes(targetFile);
            exchange.getResponseHeaders().set("Content-Type", contentType);

            if (lower.endsWith(".pdf")) {
                String filename = targetFile.getFileName().toString();
                exchange.getResponseHeaders().set("Content-Disposition", "inline; filename=\"" + filename + "\"");
                exchange.getResponseHeaders().set("Cache-Control", "no-cache, no-store, must-revalidate");
            }

            if ("HEAD".equalsIgnoreCase(exchange.getRequestMethod())) {
                exchange.sendResponseHeaders(200, bytes.length);
                exchange.getResponseBody().close();
                return;
            }

            exchange.sendResponseHeaders(200, bytes.length);
            try (OutputStream os = exchange.getResponseBody()) {
                os.write(bytes);
            }
        }
    }

    /**
     * Returns the status of Week 1 to 8 PDFs.
     */
    private class StatusHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (!"GET".equalsIgnoreCase(exchange.getRequestMethod())) {
                sendJson(exchange, 405, "{\"error\":\"Method Not Allowed\"}");
                return;
            }

            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            StringBuilder sb = new StringBuilder();
            sb.append("{\"totalWeeks\":").append(TOTAL_WEEKS).append(",\"weeks\":[");

            for (int w = 1; w <= TOTAL_WEEKS; w++) {
                if (w > 1) sb.append(",");
                String pdfName = "week-" + w + " adv.pdf";
                Path pdfPath = rootDir.resolve("docs").resolve(pdfName);
                if (!Files.exists(pdfPath)) {
                    pdfPath = rootDir.resolve("web").resolve("docs").resolve(pdfName);
                }
                if (!Files.exists(pdfPath)) {
                    pdfName = "java" + w + ".pdf";
                    pdfPath = rootDir.resolve(pdfName);
                }

                boolean exists = Files.exists(pdfPath);
                long size = 0;
                String uploadedAt = "";

                if (exists) {
                    try {
                        size = Files.size(pdfPath);
                        long modified = Files.getLastModifiedTime(pdfPath).toMillis();
                        uploadedAt = sdf.format(new Date(modified));
                    } catch (IOException ignored) {}
                }

                sb.append("{");
                sb.append("\"week\":").append(w).append(",");
                sb.append("\"filename\":\"").append(pdfName).append("\",");
                sb.append("\"exists\":").append(exists).append(",");
                sb.append("\"sizeBytes\":").append(size).append(",");
                sb.append("\"formattedSize\":\"").append(formatSize(size)).append("\",");
                sb.append("\"uploadedAt\":\"").append(uploadedAt).append("\"");
                sb.append("}");
            }

            sb.append("]}");
            sendJson(exchange, 200, sb.toString());
        }
    }

    /**
     * Handles student profile information.
     */
    private class ProfileHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String method = exchange.getRequestMethod();
            if ("GET".equalsIgnoreCase(method)) {
                sendJson(exchange, 200, profileManager.toJson());
                return;
            }

            if ("POST".equalsIgnoreCase(method)) {
                Map<String, String> params = parseFormData(exchange.getRequestBody());
                String name = params.get("name");
                String rollNo = params.get("rollNo");
                String section = params.get("section");
                String course = params.get("course");

                profileManager.update(name, rollNo, section, course);
                sendJson(exchange, 200, "{\"success\":true,\"profile\":" + profileManager.toJson() + "}");
                return;
            }

            sendJson(exchange, 405, "{\"error\":\"Method Not Allowed\"}");
        }
    }

    /**
     * Handles multipart PDF uploads for Week 1 to Week 12.
     * Saves file directly as java{week}.pdf in the root directory.
     */
    private class UploadHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (!"POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                sendJson(exchange, 405, "{\"error\":\"Method Not Allowed\"}");
                return;
            }

            String contentType = exchange.getRequestHeaders().getFirst("Content-Type");
            if (contentType == null || !contentType.toLowerCase().contains("multipart/form-data")) {
                sendJson(exchange, 400, "{\"error\":\"Request must be multipart/form-data\"}");
                return;
            }

            try {
                MultipartFormDataParser.ParseResult parsed = MultipartFormDataParser.parse(
                        exchange.getRequestBody(),
                        contentType
                );

                String weekStr = parsed.getField("week");
                if (weekStr == null || weekStr.trim().isEmpty()) {
                    sendJson(exchange, 400, "{\"error\":\"Missing 'week' parameter\"}");
                    return;
                }

                int week;
                try {
                    week = Integer.parseInt(weekStr.trim());
                } catch (NumberFormatException e) {
                    sendJson(exchange, 400, "{\"error\":\"Invalid week number\"}");
                    return;
                }

                if (week < 1 || week > TOTAL_WEEKS) {
                    sendJson(exchange, 400, "{\"error\":\"Week must be between 1 and " + TOTAL_WEEKS + "\"}");
                    return;
                }

                MultipartFormDataParser.FileItem fileItem = parsed.getFirstFile();
                if (fileItem == null || fileItem.getData().length == 0) {
                    sendJson(exchange, 400, "{\"error\":\"No PDF file provided or file is empty\"}");
                    return;
                }

                // Always save as java{week}.pdf to match reference site structure
                String targetFileName = "java" + week + ".pdf";
                Path targetPath = rootDir.resolve(targetFileName);
                Files.write(targetPath, fileItem.getData(), StandardOpenOption.CREATE, StandardOpenOption.TRUNCATE_EXISTING);

                System.out.println("[Upload] Successfully saved " + targetFileName + " (" + fileItem.getData().length + " bytes)");

                sendJson(exchange, 200, "{\"success\":true,\"filename\":\"" + targetFileName + "\",\"week\":" + week + "}");
            } catch (Exception e) {
                e.printStackTrace();
                sendJson(exchange, 500, "{\"error\":\"Upload failed: " + escapeJson(e.getMessage()) + "\"}");
            }
        }
    }

    /**
     * Handles deletion of an uploaded PDF.
     */
    private class DeleteHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (!"POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                sendJson(exchange, 405, "{\"error\":\"Method Not Allowed\"}");
                return;
            }

            Map<String, String> params = parseFormData(exchange.getRequestBody());
            String weekStr = params.get("week");
            if (weekStr == null) {
                sendJson(exchange, 400, "{\"error\":\"Missing 'week' parameter\"}");
                return;
            }

            try {
                int week = Integer.parseInt(weekStr.trim());
                Path targetPath = rootDir.resolve("java" + week + ".pdf");
                boolean deleted = false;
                if (Files.exists(targetPath)) {
                    Files.delete(targetPath);
                    deleted = true;
                }
                sendJson(exchange, 200, "{\"success\":" + deleted + ",\"week\":" + week + "}");
            } catch (Exception e) {
                sendJson(exchange, 500, "{\"error\":\"" + escapeJson(e.getMessage()) + "\"}");
            }
        }
    }

    private static String formatSize(long bytes) {
        if (bytes <= 0) return "0 B";
        final String[] units = new String[]{"B", "KB", "MB", "GB"};
        int digitGroups = (int) (Math.log10(bytes) / Math.log10(1024));
        digitGroups = Math.min(digitGroups, units.length - 1);
        return String.format(Locale.US, "%.1f %s", bytes / Math.pow(1024, digitGroups), units[digitGroups]);
    }

    private static void sendJson(HttpExchange exchange, int statusCode, String json) throws IOException {
        byte[] bytes = json.getBytes(StandardCharsets.UTF_8);
        exchange.getResponseHeaders().set("Content-Type", "application/json; charset=UTF-8");
        exchange.getResponseHeaders().set("Access-Control-Allow-Origin", "*");
        exchange.sendResponseHeaders(statusCode, bytes.length);
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(bytes);
        }
    }

    private static Map<String, String> parseFormData(InputStream in) throws IOException {
        Map<String, String> map = new HashMap<>();
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        byte[] buffer = new byte[4096];
        int read;
        while ((read = in.read(buffer)) != -1) {
            baos.write(buffer, 0, read);
        }
        String body = baos.toString(StandardCharsets.UTF_8);
        if (body.isEmpty()) return map;

        String[] pairs = body.split("&");
        for (String pair : pairs) {
            int idx = pair.indexOf('=');
            if (idx > 0) {
                String key = URLDecoder.decode(pair.substring(0, idx), StandardCharsets.UTF_8);
                String value = URLDecoder.decode(pair.substring(idx + 1), StandardCharsets.UTF_8);
                map.put(key, value);
            }
        }
        return map;
    }

    private static String escapeJson(String s) {
        if (s == null) return "";
        return s.replace("\\", "\\\\")
                .replace("\"", "\\\"")
                .replace("\b", "\\b")
                .replace("\f", "\\f")
                .replace("\n", "\\n")
                .replace("\r", "\\r")
                .replace("\t", "\\t");
    }

    public static void main(String[] args) {
        int port = DEFAULT_PORT;
        if (args.length > 0) {
            try {
                port = Integer.parseInt(args[0]);
            } catch (NumberFormatException ignored) {}
        }

        Path rootDir = Paths.get(".").toAbsolutePath().normalize();
        AssignmentServer server = new AssignmentServer(port, rootDir);
        try {
            server.start();
        } catch (IOException e) {
            System.err.println("Failed to start server: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
