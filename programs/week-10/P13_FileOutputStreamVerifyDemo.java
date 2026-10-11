import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

public class FileOutputStreamVerifyDemo {
    public static void main(String[] args) {
        String filePath = "output.txt";
        String originalContent = "Welcome to Java I/O streams!\nWriting bytes and verifying content.";

        writeToFile(filePath, originalContent);
        verifyFileContent(filePath, originalContent);
    }

    private static void writeToFile(String filePath, String content) {
        try (FileOutputStream fos = new FileOutputStream(filePath)) {
            byte[] bytes = content.getBytes(StandardCharsets.UTF_8);
            fos.write(bytes);
            fos.flush();
            System.out.println("Data successfully written to '" + filePath + "'.");
        } catch (IOException e) {
            System.err.println("Error while writing to file: " + e.getMessage());
        }
    }

    private static void verifyFileContent(String filePath, String expectedContent) {
        try (FileInputStream fis = new FileInputStream(filePath)) {
            byte[] readBytes = fis.readAllBytes();
            String actualContent = new String(readBytes, StandardCharsets.UTF_8);
            System.out.println("\n--- Read Content from File ---");
            System.out.println(actualContent);
            System.out.println("---------------------------------");
            if (expectedContent.equals(actualContent)) {
                System.out.println("Verification Result: SUCCESS (File contents match exactly).");
            } else {
                System.out.println("Verification Result: FAILED (Contents do not match).");
            }
        } catch (IOException e) {
            System.err.println("Error while reading file for verification: " + e.getMessage());
        }
    }
}
