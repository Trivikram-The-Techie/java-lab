import java.io.FileWriter;
import java.io.IOException;

public class FileWriteExample {
    public static void main(String[] args) {
        try {
            FileWriter file = new FileWriter("sample.txt");
            file.write("Hello! This is a Java program.\n");
            file.write("I am writing text into a file using FileWriter.");
            file.close();
            System.out.println("Data written successfully.");
        } catch (IOException e) {
            System.out.println("Error occurred while writing to the file.");
        }
    }
}
