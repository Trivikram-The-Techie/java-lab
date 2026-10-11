class StaticStudentCount {

    int rollNo;
    String name;

    static int count = 0;

    StaticStudentCount(
        int rollNo,
        String name
    ) {
        this.rollNo = rollNo;
        this.name = name;
        count++;
    }

    void display() {
        System.out.println("Roll Number : " + rollNo);
        System.out.println("Name : " + name);
    }

    public static void main(String[] args) {

        StaticStudentCount s1 =
            new StaticStudentCount(101, "Sathwika");

        StaticStudentCount s2 =
            new StaticStudentCount(102, "Rahul");

        StaticStudentCount s3 =
            new StaticStudentCount(103, "Anil");

        s1.display();
        System.out.println();

        s2.display();
        System.out.println();

        s3.display();

        System.out.println(
            "\nTotal Students : " + count
        );
    }
}