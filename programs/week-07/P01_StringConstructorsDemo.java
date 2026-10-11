class StringConstructorsDemo {

    public static void main(String[] args) {

        // String using literal
        String s1 = "Hello Java";

        // String using new
        String s2 = new String("Hello Java");

        // String using character array
        char[] chars = {'J', 'a', 'v', 'a'};
        String s3 = new String(chars);

        // String using byte array
        byte[] bytes = {65, 66, 67};
        String s4 = new String(bytes);

        System.out.println("String Literal : " + s1);
        System.out.println("Using new String : " + s2);
        System.out.println("Character Array : " + s3);
        System.out.println("Byte Array : " + s4);

        // Difference between literal and new
        System.out.println(
            "s1 == s2 : " + (s1 == s2)
        );

        System.out.println(
            "s1.equals(s2) : " + s1.equals(s2)
        );
    }
}