public class StringConstructor {
    public static void main(String[] args) {
        String s1 = "Hello Java";
        String s2 = new String("Hello Java");
        char[] charArray = {'J', 'a', 'v', 'a'};
        String s3 = new String(charArray);
        byte[] byteArray = {72, 101, 108, 108, 111};
        String s4 = new String(byteArray);

        System.out.println("s1 (literal): " + s1);
        System.out.println("s2 (new String()): " + s2);
        System.out.println("s3 (from char array): " + s3);
        System.out.println("s4 (from byte array): " + s4);
        System.out.println("\ns1 == s2: " + (s1 == s2));
        System.out.println("s1.equals(s2): " + s1.equals(s2));
        String s5 = "Hello Java";
        System.out.println("s1 == s5: " + (s1 == s5));
    }
}
