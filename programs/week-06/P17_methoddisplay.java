class Student {
    String name;
    int rollNumber;
    String course;

    // Constructor to initialize the student details
    public Student(String name, int rollNumber, String course) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.course = course;
    }
}

public class methoddisplay {
    // Method that accepts a Student object as a parameter
    public static void displayStudentDetails(Student student) {
        System.out.println("--- Student Details ---");
        System.out.println("Name         : " + student.name);
        System.out.println("Roll Number  : " + student.rollNumber);
        System.out.println("Course       : " + student.course);
    }

    public static void main(String[] args) {
        // 1. Create Student objects
        Student student1 = new Student("Alice Johnson", 101, "Computer Science");
        Student student2 = new Student("Bob Smith", 102, "Information Technology");

        // 2. Pass the objects to the display method
        displayStudentDetails(student1);

        System.out.println(); // Print a blank line for readability

        displayStudentDetails(student2);
    }
}
