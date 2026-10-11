class EmpReference {

    String name;

    public static void main(String[] args) {

        EmpReference e1 = new EmpReference();

        e1.name = "Anil";

        EmpReference e2 = e1;

        System.out.println(
            "Are both references same? " + (e1 == e2)
        );
    }
}