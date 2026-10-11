class Person {

    String name;
    int age;

    void displayPersonDetails() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

class Student extends Person {

    int rollNo;
    String branch;

    void displayStudentDetails() {

        displayPersonDetails();

        System.out.println(
            "Roll Number: " + rollNo
        );

        System.out.println(
            "Branch: " + branch
        );
    }
}

public class Main {

    public static void main(String[] args) {

        Student s = new Student();

        s.name = "Rahul";
        s.age = 20;
        s.rollNo = 101;
        s.branch = "Computer Science";

        System.out.println("Student Details:");

        s.displayStudentDetails();
    }
}
