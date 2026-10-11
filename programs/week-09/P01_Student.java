// File: mypackage/Student.java
package mypackage;

public class Student {
    String name;
    int rollNo;
    double marks;

    public Student(String name, int rollNo, double marks) {
        this.name = name;
        this.rollNo = rollNo;
        this.marks = marks;
    }

    public void display() {
        System.out.println("Name : " + name);
        System.out.println("Roll Number : " + rollNo);
        System.out.println("Marks : " + marks);
    }
}

// File: TestStudent.java
import mypackage.Student;

public class TestStudent {
    public static void main(String[] args) {
        Student s = new Student("Sathwika", 101, 92.5);
        s.display();
    }
}