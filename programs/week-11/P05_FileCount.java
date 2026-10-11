import java.io.FileReader;
import java.io.IOException;

public class FileCount {
    public static void main(String[] args) {
        int characters = 0;
        int words = 0;
        int lines = 1;
        boolean inWord = false;
        try {
            FileReader reader = new FileReader("source.txt");
            int ch;
            while ((ch = reader.read()) != -1) {
                characters++;
                if (ch == '\n') {
                    lines++;
                }
                if (Character.isWhitespace(ch)) {
                    inWord = false;
                } else if (!inWord) {
                    words++;
                    inWord = true;
                }
            }
            reader.close();
            System.out.println("Number of characters: " + characters);
            System.out.println("Number of words: " + words);
            System.out.println("Number of lines: " + lines);
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
