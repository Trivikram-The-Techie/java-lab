import java.io.*;
public class CopyBytes {
    public static void main(String[] args) {
        try (FileInputStream in = new FileInputStream("source.txt");
             FileOutputStream out = new FileOutputStream("copy.txt")) {
            byte[] buffer = new byte[1024];
            int count;
            while ((count = in.read(buffer)) != -1) out.write(buffer, 0, count);
            System.out.println("File copied successfully.");
        } catch (IOException e) { System.out.println("Copy error: " + e.getMessage()); }
    }
}
