import java.io.*;
public class FileCounts {
    public static void main(String[] args) {
        int chars = 0, words = 0, lines = 0;
        boolean inWord = false, hasLineContent = false;
        try (Reader reader = new FileReader("input.txt")) {
            int ch;
            while ((ch = reader.read()) != -1) {
                chars++;
                if (ch == '\n') { lines++; hasLineContent = false; }
                else if (ch != '\r') hasLineContent = true;
                if (Character.isWhitespace(ch)) inWord = false;
                else if (!inWord) { words++; inWord = true; }
            }
            if (hasLineContent) lines++;
            System.out.println("Characters: " + chars);
            System.out.println("Words: " + words);
            System.out.println("Lines: " + lines);
        } catch (IOException e) { System.out.println("Read error: " + e.getMessage()); }
    }
}