import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class ImageCopyDemo {
    public static void main(String[] args) {
        String sourceImagePath = "input_image.jpg";
        String destinationImagePath = "copied_image.jpg";
        copyImage(sourceImagePath, destinationImagePath);
    }

    public static void copyImage(String sourcePath, String destinationPath) {
        FileInputStream fis = null;
        FileOutputStream fos = null;
        try {
            File sourceFile = new File(sourcePath);
            File destinationFile = new File(destinationPath);
            fis = new FileInputStream(sourceFile);
            fos = new FileOutputStream(destinationFile);
            byte[] buffer = new byte[4096];
            int bytesRead;
            long totalBytes = 0;

            while ((bytesRead = fis.read(buffer)) != -1) {
                fos.write(buffer, 0, bytesRead);
                totalBytes += bytesRead;
            }
            fos.flush();
            System.out.println("Image copied successfully!");
            System.out.println("Total bytes transferred: " + totalBytes);
        } catch (FileNotFoundException e) {
            System.err.println("File Error: The specified image file could not be found or opened.");
            System.err.println("Details: " + e.getMessage());
        } catch (IOException e) {
            System.err.println("I/O Error: An error occurred while reading or writing image data.");
            System.err.println("Details: " + e.getMessage());
        } finally {
            if (fis != null) {
                try {
                    fis.close();
                } catch (IOException e) {
                    System.err.println("Failed to close FileInputStream: " + e.getMessage());
                }
            }
            if (fos != null) {
                try {
                    fos.close();
                } catch (IOException e) {
                    System.err.println("Failed to close FileOutputStream: " + e.getMessage());
                }
            }
        }
    }
}
