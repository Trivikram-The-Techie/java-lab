import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
public class WriteBytes {
    public static void main(String[] args) {
        byte[] data = "Java byte output".getBytes();
        try (FileOutputStream out = new FileOutputStream("output.txt")) {
            out.write(data);
        } catch (IOException e) { System.out.println("Write error: " + e.getMessage()); return; }
        try { System.out.println(Files.readString(Path.of("output.txt"))); }
        catch (IOException e) { System.out.println("Verify error: " + e.getMessage()); }
    }
}
