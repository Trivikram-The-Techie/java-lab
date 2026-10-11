public class CharConv {
    public static void main(String[] args) {
        char ch = 'A';
        int ascii = (int) ch;

        int value = 66;
        char letter = (char) value;

        System.out.println("Character: " + ch);
        System.out.println("ASCII/Unicode Value: " + ascii);
        System.out.println("ASCII/Unicode Value: " + value);
        System.out.println("Character: " + letter);
    }
}
