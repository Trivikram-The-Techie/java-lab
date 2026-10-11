import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class ReadByteByByteDemo {
    public static void main(String[] args) {
        String fileName = "sample.txt";
        createSampleFile(fileName, "Hello! This file is being read byte-by-byte.");

        try (FileInputStream fis = new FileInputStream(fileName)) {
            int byteData;

            System.out.println("Reading contents of " + fileName + ":\n");

            while ((byteData = fis.read()) != -1) {
                System.out.print((char) byteData);
            }
            System.out.println("\n\n--- End of file reached ---");
        } catch (FileNotFoundException e) {
            System.err.println("File not found: " + e.getMessage());
        } catch (IOException e) {
            System.err.println("I/O error occurred while reading: " + e.getMessage());
        }
    }

    private static void createSampleFile(String fileName, String text) {
        try (FileOutputStream fos = new FileOutputStream(fileName)) {
            fos.write(text.getBytes());
        } catch (IOException e) {
            System.err.println("Could not create sample file: " + e.getMessage());
        }
    }
}
