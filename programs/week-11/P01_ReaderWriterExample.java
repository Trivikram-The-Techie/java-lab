import java.io.*;

public class ReaderWriterExample {
    public static void main(String[] args) throws IOException {
        Reader reader = new InputStreamReader(System.in);
        Writer writer = new OutputStreamWriter(System.out);
        int ch;
        System.out.println("Enter characters (press Ctrl+D to stop):");
        while ((ch = reader.read()) != -1) {
            writer.write(ch);
            writer.flush();
        }
    }
}
