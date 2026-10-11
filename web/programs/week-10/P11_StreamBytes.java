import java.io.*;
public class StreamBytes {
    public static void main(String[] args) throws IOException {
        byte[] source = "Hello, byte streams!".getBytes();
        try (InputStream in = new ByteArrayInputStream(source);
             ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            int value;
            while ((value = in.read()) != -1) out.write(value);
            System.out.println(new String(out.toByteArray()));
        }
    }
}
