import java.util.Scanner;
import java.util.StringTokenizer;

public class StringTokenizerDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String sentence = sc.nextLine();
        StringTokenizer st = new StringTokenizer(sentence);
        System.out.println("\n--- Tokens (default delimiter) ---");
        int count = 0;
        while (st.hasMoreTokens()) {
            System.out.println(st.nextToken());
            count++;
        }
        System.out.println("Total tokens: " + count);
        System.out.print("\nEnter a custom delimiter (e.g. , or -): ");
        String delimiter = sc.nextLine();
        StringTokenizer st2 = new StringTokenizer(sentence, delimiter);
        System.out.println("\n--- Tokens (custom delimiter) ---");
        int count2 = 0;
        while (st2.hasMoreTokens()) {
            System.out.println(st2.nextToken());
            count2++;
        }
        System.out.println("Total tokens: " + count2);
    }
}
