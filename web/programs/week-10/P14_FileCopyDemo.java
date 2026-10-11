import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class FileCopyDemo {
    public static void main(String[] args) {
        String sourceFilePath = "source.txt";
        String destinationFilePath = "destination.txt";

        prepareDummyFile(sourceFilePath, "This is the source file content to be copied.\nJava File Streams Copy Demo.");
        copyFile(sourceFilePath, destinationFilePath);
    }

    public static void copyFile(String sourcePath, String destinationPath) {
        File src = new File(sourcePath);
        File dest = new File(destinationPath);

        if (!src.exists() || !src.isFile()) {
            System.err.println("Error: Source file does not exist or is not a regular file.");
            return;
        }

        try (FileInputStream fis = new FileInputStream(src);
             FileOutputStream fos = new FileOutputStream(dest)) {
            byte[] buffer = new byte[4096]; // 4 KB buffer
            int bytesRead;
            long totalBytes = 0;

            while ((bytesRead = fis.read(buffer)) != -1) {
                fos.write(buffer, 0, bytesRead);
                totalBytes += bytesRead;
            }
            fos.flush();
            System.out.println("File copied successfully!");
            System.out.println("Source: " + src.getAbsolutePath());
            System.out.println("Destination: " + dest.getAbsolutePath());
            System.out.println("Total bytes transferred: " + totalBytes);
        } catch (FileNotFoundException e) {
            System.err.println("File not found error: " + e.getMessage());
        } catch (IOException e) {
            System.err.println("I/O error during copy: " + e.getMessage());
        }
    }

    private static void prepareDummyFile(String path, String data) {
        try (FileOutputStream fos = new FileOutputStream(path)) {
            fos.write(data.getBytes());
        } catch (IOException e) {
            System.err.println("Could not create source file: " + e.getMessage());
        }
    }
}
