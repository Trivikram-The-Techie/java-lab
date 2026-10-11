import java.io.*;
public class CopyImage {
    public static void main(String[] args) {
        FileInputStream in = null;
        FileOutputStream out = null;
        try {
            in = new FileInputStream("photo.jpg");
            out = new FileOutputStream("photo-copy.jpg");
            byte[] buffer = new byte[4096];
            int count;
            while ((count = in.read(buffer)) != -1) out.write(buffer, 0, count);
            System.out.println("Image copied successfully.");
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("I/O error: " + e.getMessage());
        } finally {
            try { if (in != null) in.close(); } catch (IOException e) { System.out.println("Input close error."); }
            try { if (out != null) out.close(); } catch (IOException e) { System.out.println("Output close error."); }
        }
    }
}