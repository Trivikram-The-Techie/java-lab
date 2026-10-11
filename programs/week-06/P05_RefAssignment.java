class RefAssignment {

    String name;

    public static void main(String[] args) {

        RefAssignment s1 = new RefAssignment();

        s1.name = "Ravi";

        RefAssignment s2 = s1;

        s2.name = "Sathwika";

        System.out.println("s1 Name : " + s1.name);
        System.out.println("s2 Name : " + s2.name);
    }
}