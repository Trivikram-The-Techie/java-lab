import java.io.*;
public class ReaderWriterDemo {
    public static void main(String[] args) throws IOException {
        Reader reader = new InputStreamReader(System.in);
        Writer writer = new OutputStreamWriter(System.out);
        writer.write("Enter text: "); writer.flush();
        int ch;
        while ((ch = reader.read()) != -1 && ch != '\n' && ch != '\r') writer.write(ch);
        writer.write(System.lineSeparator()); writer.flush();
    }
}
