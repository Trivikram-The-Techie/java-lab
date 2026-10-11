import java.io.*;
public class ReadText {
    public static void main(String[] args) {
        try (FileReader reader = new FileReader("input.txt")) {
            int ch;
            while ((ch = reader.read()) != -1) System.out.print((char) ch);
        } catch (IOException e) { System.out.println("Read error: " + e.getMessage()); }
    }
}
