package server;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.text.SimpleDateFormat;
import java.util.*;

public class AssignmentManager {
    public static final int TOTAL_WEEKS = 8;
    private final Path uploadDir;
    private final Path metaFile;
    private final Properties metadata = new Properties();

    // Default descriptions matching typical Java lab curriculum
    private static final String[] DEFAULT_WEEK_TITLES = {
            "Week 1: Java Basics, JDK Setup & Simple Programs",
            "Week 2: Control Structures, Loops & Conditional Statements",
            "Week 3: Classes, Objects, Methods & Constructors",
            "Week 4: Method Overloading, Recursion & Array Operations",
            "Week 5: Inheritance, Super Keyword & Method Overriding",
            "Week 6: Packages & Interfaces Implementation",
            "Week 7: Exception Handling (try, catch, throw, throws, finally)",
            "Week 8: Multithreading & Thread Synchronization",
            "Week 9: Java Collections Framework (List, Set, Map)",
            "Week 10: File I/O & Character/Byte Streams",
            "Week 11: Java GUI (AWT / Swing / Event Handling)",
            "Week 12: JDBC Database Connectivity & Final Lab Project"
    };

    public AssignmentManager(Path storageDir) {
        this.uploadDir = storageDir.resolve("uploads");
        this.metaFile = storageDir.resolve("metadata.properties");
        init();
    }

    private synchronized void init() {
        try {
            Files.createDirectories(uploadDir);
            if (Files.exists(metaFile)) {
                try (InputStream in = Files.newInputStream(metaFile)) {
                    metadata.load(new InputStreamReader(in, StandardCharsets.UTF_8));
                }
            } else {
                saveMetadata();
            }
        } catch (IOException e) {
            System.err.println("Failed to initialize storage: " + e.getMessage());
        }
    }

    private synchronized void saveMetadata() {
        try {
            if (metaFile.getParent() != null) {
                Files.createDirectories(metaFile.getParent());
            }
            try (OutputStream out = Files.newOutputStream(metaFile)) {
                metadata.store(new OutputStreamWriter(out, StandardCharsets.UTF_8), "Assignment Upload Metadata");
            }
        } catch (IOException e) {
            System.err.println("Could not save metadata: " + e.getMessage());
        }
    }

    public synchronized boolean saveAssignment(int week, String originalName, byte[] data) throws IOException {
        if (week < 1 || week > TOTAL_WEEKS) {
            throw new IllegalArgumentException("Invalid week number: " + week);
        }
        Files.createDirectories(uploadDir);
        Path target = uploadDir.resolve("week_" + week + ".pdf");
        Files.write(target, data, StandardOpenOption.CREATE, StandardOpenOption.TRUNCATE_EXISTING);

        String timeStr = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
        metadata.setProperty("week." + week + ".filename", originalName != null && !originalName.isEmpty() ? originalName : "java" + week + ".pdf");
        metadata.setProperty("week." + week + ".uploadedAt", timeStr);
        metadata.setProperty("week." + week + ".sizeBytes", String.valueOf(data.length));
        saveMetadata();
        return true;
    }

    public synchronized boolean deleteAssignment(int week) throws IOException {
        if (week < 1 || week > TOTAL_WEEKS) return false;
        Path target = uploadDir.resolve("week_" + week + ".pdf");
        boolean deleted = false;
        if (Files.exists(target)) {
            Files.delete(target);
            deleted = true;
        }
        metadata.remove("week." + week + ".filename");
        metadata.remove("week." + week + ".uploadedAt");
        metadata.remove("week." + week + ".sizeBytes");
        saveMetadata();
        return deleted;
    }

    public synchronized Path getAssignmentPath(int week) {
        if (week < 1 || week > TOTAL_WEEKS) return null;
        Path target = uploadDir.resolve("week_" + week + ".pdf");
        return Files.exists(target) ? target : null;
    }

    public synchronized void updateNotes(int week, String notes) {
        if (week < 1 || week > TOTAL_WEEKS) return;
        if (notes == null) notes = "";
        metadata.setProperty("week." + week + ".notes", notes);
        saveMetadata();
    }

    public synchronized String getNotes(int week) {
        String custom = metadata.getProperty("week." + week + ".notes");
        if (custom != null && !custom.trim().isEmpty()) {
            return custom;
        }
        return DEFAULT_WEEK_TITLES[week - 1];
    }

    public synchronized String getStatusJson() {
        StringBuilder sb = new StringBuilder();
        sb.append("{\"totalWeeks\":").append(TOTAL_WEEKS).append(",\"weeks\":[");
        for (int w = 1; w <= TOTAL_WEEKS; w++) {
            if (w > 1) sb.append(",");
            Path target = uploadDir.resolve("week_" + w + ".pdf");
            boolean exists = Files.exists(target);
            long size = 0;
            String originalName = metadata.getProperty("week." + w + ".filename", "java" + w + ".pdf");
            String uploadedAt = metadata.getProperty("week." + w + ".uploadedAt", "");
            String notes = getNotes(w);

            if (exists) {
                try {
                    size = Files.size(target);
                } catch (IOException ignored) {}
            }

            sb.append("{");
            sb.append("\"week\":").append(w).append(",");
            sb.append("\"exists\":").append(exists).append(",");
            sb.append("\"filename\":\"").append(escapeJson(originalName)).append("\",");
            sb.append("\"defaultFilename\":\"java").append(w).append(".pdf\",");
            sb.append("\"sizeBytes\":").append(size).append(",");
            sb.append("\"formattedSize\":\"").append(formatSize(size)).append("\",");
            sb.append("\"uploadedAt\":\"").append(escapeJson(uploadedAt)).append("\",");
            sb.append("\"notes\":\"").append(escapeJson(notes)).append("\"");
            sb.append("}");
        }
        sb.append("]}");
        return sb.toString();
    }

    public static String formatSize(long bytes) {
        if (bytes <= 0) return "0 B";
        final String[] units = new String[]{"B", "KB", "MB", "GB"};
        int digitGroups = (int) (Math.log10(bytes) / Math.log10(1024));
        digitGroups = Math.min(digitGroups, units.length - 1);
        return String.format(Locale.US, "%.1f %s", bytes / Math.pow(1024, digitGroups), units[digitGroups]);
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
}
