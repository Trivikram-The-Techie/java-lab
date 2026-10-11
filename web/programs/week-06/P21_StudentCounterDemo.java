// Define the Student class
class Student {
    // 1. Declare a static variable to keep track of the object count
    private static int studentCount = 0;

    private String name;
    private int rollNumber;

    // Constructor to initialize the student
    public Student(String name, int rollNumber) {
        this.name = name;
        this.rollNumber = rollNumber;

        // 2. Increment the static variable every time the constructor is called
        studentCount++;
        System.out.println("Created Student: " + this.name);
    }

    // Static method to retrieve the total count
    public static int getStudentCount() {
        return studentCount;
    }
}

// Main class to demonstrate the static counter
public class StudentCounterDemo {
    public static void main(String[] args) {
        System.out.println("Initial Student count: " + Student.getStudentCount());
        System.out.println("\n--- Creating Student Objects ---");

        // Create multiple Student objects
        Student student1 = new Student("Alice Johnson", 101);
        Student student2 = new Student("Bob Smith", 102);
        Student student3 = new Student("Charlie Brown", 103);
        Student student4 = new Student("Diana Prince", 104);

        System.out.println("\n--- Final Object Count ---");

        // 3. Access the static method to see the final count
        System.out.println("Total Student objects created: " + Student.getStudentCount());
    }
}
