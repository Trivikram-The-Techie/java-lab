class ReturnStudentObj {

    int rollNo;
    String name;
    String branch;

    ReturnStudentObj(
        int rollNo,
        String name,
        String branch
    ) {
        this.rollNo = rollNo;
        this.name = name;
        this.branch = branch;
    }

    static ReturnStudentObj createStudent() {

        ReturnStudentObj s =
            new ReturnStudentObj(
                101,
                "Sathwika",
                "AIML"
            );

        return s;
    }

    void display() {
        System.out.println("Roll Number : " + rollNo);
        System.out.println("Name : " + name);
        System.out.println("Branch : " + branch);
    }

    public static void main(String[] args) {

        ReturnStudentObj student =
            createStudent();

        student.display();
    }
}