import java.io.*;
public class WriteText {
    public static void main(String[] args) {
        try (FileWriter writer = new FileWriter("output.txt")) {
            writer.write("Character streams handle text.");
            System.out.println("Text written to output.txt");
        } catch (IOException e) { System.out.println("Write error: " + e.getMessage()); }
    }
}