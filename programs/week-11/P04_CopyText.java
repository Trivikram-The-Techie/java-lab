import java.io.*;
public class CopyText {
    public static void main(String[] args) {
        try (FileReader reader = new FileReader("source.txt");
             FileWriter writer = new FileWriter("copy.txt")) {
            char[] buffer = new char[1024];
            int count;
            while ((count = reader.read(buffer)) != -1) writer.write(buffer, 0, count);
            System.out.println("Text file copied successfully.");
        } catch (IOException e) { System.out.println("Copy error: " + e.getMessage()); }
    }
}