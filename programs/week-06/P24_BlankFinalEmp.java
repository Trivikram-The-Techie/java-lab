class BlankFinalEmp {

    final int employeeId;
    String name;

    BlankFinalEmp(
        int employeeId,
        String name
    ) {
        this.employeeId = employeeId;
        this.name = name;
    }

    void display() {

        System.out.println(
            "Employee ID : " + employeeId
        );

        System.out.println(
            "Name : " + name
        );
    }

    public static void main(String[] args) {

        BlankFinalEmp e1 =
            new BlankFinalEmp(
                1001,
                "Sathwika"
            );

        BlankFinalEmp e2 =
            new BlankFinalEmp(
                1002,
                "Rahul"
            );

        e1.display();

        System.out.println();

        e2.display();
    }
}