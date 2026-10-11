import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class StreamByteDemo {
    public static void main(String[] args) {
        String sourceFile = "source.txt";
        String destinationFile = "destination.txt";

        prepareSourceFile(sourceFile, "Hello, World! Demonstrating InputStream and OutputStream in Java.");

        try (FileInputStream in = new FileInputStream(sourceFile);
             FileOutputStream out = new FileOutputStream(destinationFile)) {
            byte[] buffer = new byte[1024];
            int bytesRead;

            while ((bytesRead = in.read(buffer)) != -1) {
                out.write(buffer, 0, bytesRead);
            }
            out.flush();
            System.out.println("Data successfully transferred from " + sourceFile + " to " + destinationFile);
        } catch (IOException e) {
            System.err.println("An I/O error occurred: " + e.getMessage());
        }
    }

    private static void prepareSourceFile(String filePath, String content) {
        try (FileOutputStream out = new FileOutputStream(filePath)) {
            byte[] dataBytes = content.getBytes();
            out.write(dataBytes);
        } catch (IOException e) {
            System.err.println("Failed to create source file: " + e.getMessage());
        }
    }
}
