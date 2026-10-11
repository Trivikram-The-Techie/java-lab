public class Student {
    int rollNumber;
    String name;
    String branch;
    double cgpa;

    void display() {
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("Name: " + name);
        System.out.println("Branch: " + branch);
        System.out.println("CGPA: " + cgpa);
    }

    public static void main(String[] args) {
        Student s1 = new Student();
        s1.rollNumber = 101;
        s1.name = "Aditi Sharma";
        s1.branch = "Computer Science";
        s1.cgpa = 9.12;

        s1.display();
    }
}
