package server;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.util.Properties;

public class ProfileManager {
    private final Path profileFile;
    private String name = "B. Vivekananda";
    private String rollNo = "238W1A1270";
    private String section = "IT-B";
    private String course = "Java Programming Lab";

    public ProfileManager(Path dataDir) {
        this.profileFile = dataDir.resolve("profile.properties");
        load();
    }

    public synchronized void load() {
        if (!Files.exists(profileFile)) {
            save(); // write defaults
            return;
        }
        Properties props = new Properties();
        try (InputStream in = Files.newInputStream(profileFile)) {
            props.load(new InputStreamReader(in, StandardCharsets.UTF_8));
            this.name = props.getProperty("name", this.name);
            this.rollNo = props.getProperty("rollNo", this.rollNo);
            this.section = props.getProperty("section", this.section);
            this.course = props.getProperty("course", this.course);
        } catch (IOException e) {
            System.err.println("Could not load profile: " + e.getMessage());
        }
    }

    public synchronized void update(String name, String rollNo, String section, String course) {
        if (name != null && !name.trim().isEmpty()) this.name = name.trim();
        if (rollNo != null && !rollNo.trim().isEmpty()) this.rollNo = rollNo.trim();
        if (section != null && !section.trim().isEmpty()) this.section = section.trim();
        if (course != null && !course.trim().isEmpty()) this.course = course.trim();
        save();
    }

    public synchronized void save() {
        try {
            if (profileFile.getParent() != null) {
                Files.createDirectories(profileFile.getParent());
            }
            Properties props = new Properties();
            props.setProperty("name", name);
            props.setProperty("rollNo", rollNo);
            props.setProperty("section", section);
            props.setProperty("course", course);
            try (OutputStream out = Files.newOutputStream(profileFile)) {
                props.store(new OutputStreamWriter(out, StandardCharsets.UTF_8), "Student Profile Settings");
            }
        } catch (IOException e) {
            System.err.println("Could not save profile: " + e.getMessage());
        }
    }

    public synchronized String toJson() {
        return "{" +
                "\"name\":\"" + escapeJson(name) + "\"," +
                "\"rollNo\":\"" + escapeJson(rollNo) + "\"," +
                "\"section\":\"" + escapeJson(section) + "\"," +
                "\"course\":\"" + escapeJson(course) + "\"" +
                "}";
    }

    private String escapeJson(String s) {
        if (s == null) return "";
        return s.replace("\\", "\\\\")
                .replace("\"", "\\\"")
                .replace("\b", "\\b")
                .replace("\f", "\\f")
                .replace("\n", "\\n")
                .replace("\r", "\\r")
                .replace("\t", "\\t");
    }

    public String getName() { return name; }
    public String getRollNo() { return rollNo; }
    public String getSection() { return section; }
    public String getCourse() { return course; }
}
