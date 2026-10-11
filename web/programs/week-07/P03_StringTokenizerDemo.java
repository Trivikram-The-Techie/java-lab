import java.util.Scanner;
import java.util.StringTokenizer;

class StringTokenizerDemo {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String sentence = sc.nextLine();

        StringTokenizer st =
            new StringTokenizer(sentence);

        System.out.println("Tokens:");

        while (st.hasMoreTokens()) {
            System.out.println(st.nextToken());
        }

        System.out.println(
            "Total Tokens: " +
            new StringTokenizer(sentence).countTokens()
        );

        System.out.print(
            "Enter delimiter: "
        );

        String delimiter = sc.nextLine();

        StringTokenizer custom =
            new StringTokenizer(
                sentence,
                delimiter
            );

        System.out.println(
            "Tokens using delimiter:"
        );

        while (custom.hasMoreTokens()) {
            System.out.println(custom.nextToken());
        }

        sc.close();
    }
}