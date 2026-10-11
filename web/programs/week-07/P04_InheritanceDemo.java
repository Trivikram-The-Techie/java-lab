class Person {
    String name;
    int age;

    void display() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

class Student extends Person {
    int rollNo;
    String branch;

    void displayStudent() {
        display();
        System.out.println("Roll Number: " + rollNo);
        System.out.println("Branch: " + branch);
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.name = "Rahul";
        s1.age = 20;
        s1.rollNo = 101;
        s1.branch = "CSE";
        s1.displayStudent();
    }
}
