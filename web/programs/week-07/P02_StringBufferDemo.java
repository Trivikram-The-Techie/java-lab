class StringBufferDemo {

    public static void main(String[] args) {

        StringBuffer sb =
            new StringBuffer("Hello");

        // Append
        sb.append(" Java");

        // Insert
        sb.insert(6, "World ");

        // Replace
        sb.replace(6, 12, "Beautiful");

        // Delete
        sb.delete(6, 16);

        // Reverse
        sb.reverse();

        System.out.println(
            "StringBuffer : " + sb
        );

        System.out.println(
            "Length : " + sb.length()
        );

        System.out.println(
            "Capacity : " + sb.capacity()
        );
    }
}