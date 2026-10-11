class StudentConstructors {

    int rollNo;
    String name;
    String branch;

    StudentConstructors() {
        rollNo = 101;
        name = "Sathwika";
        branch = "AIML";
    }

    StudentConstructors(int r, String n, String b) {
        rollNo = r;
        name = n;
        branch = b;
    }

    void display() {
        System.out.println("Roll Number : " + rollNo);
        System.out.println("Name : " + name);
        System.out.println("Branch : " + branch);
        System.out.println();
    }

    public static void main(String[] args) {

        StudentConstructors s1 =
            new StudentConstructors();

        StudentConstructors s2 =
            new StudentConstructors(102, "Rahul", "CSE");

        System.out.println("Default Constructor");
        s1.display();

        System.out.println("Parameterized Constructor");
        s2.display();
    }
}