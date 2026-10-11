import java.io.*;
public class ReadBytes {
    public static void main(String[] args) {
        try (FileInputStream in = new FileInputStream("input.txt")) {
            int value;
            while ((value = in.read()) != -1) System.out.print((char) value);
        } catch (IOException e) { System.out.println("Read error: " + e.getMessage()); }
    }
}