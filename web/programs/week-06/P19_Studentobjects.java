// Define the Student class
class Student {
    private int rollNumber;
    private String name;
    private String major;

    // Constructor to initialize the student details
    public Student(int rollNumber, String name, String major) {
        this.rollNumber = rollNumber;
        this.name = name;
        this.major = major;
    }

    // Method to display the student's details
    public void displayInfo() {
        System.out.println("Roll Number : " + rollNumber);
        System.out.println("Name        : " + name);
        System.out.println("Major       : " + major);
    }
}

// Main class renamed to 'Studentobjects'
public class Studentobjects {
    // Method that creates and returns a Student object
    public static Student createNewStudent() {
        System.out.println("Creating a new Student object inside the method...");

        // Instantiating a new Student object
        Student tempStudent = new Student(104, "Elena Gilbert", "Data Science");

        // Returning the object to the caller
        return tempStudent;
    }

    public static void main(String[] args) {
        System.out.println("=== Step 1: Call Method ===");
        // Call the method and store the returned object in a reference variable
        Student returnedStudent = createNewStudent();

        System.out.println("\n=== Step 2: Display Returned Object ===");
        // Call the display method using the returned object
        returnedStudent.displayInfo();
    }
}
