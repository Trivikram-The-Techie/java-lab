class PassingStudentObj {

    int rollNo;
    String name;
    String branch;

    PassingStudentObj(
        int rollNo,
        String name,
        String branch
    ) {
        this.rollNo = rollNo;
        this.name = name;
        this.branch = branch;
    }

    static void displayStudent(PassingStudentObj s) {

        System.out.println("Roll Number : " + s.rollNo);
        System.out.println("Name : " + s.name);
        System.out.println("Branch : " + s.branch);
    }

    public static void main(String[] args) {

        PassingStudentObj student =
            new PassingStudentObj(
                101,
                "Sathwika",
                "AIML"
            );

        displayStudent(student);
    }
}