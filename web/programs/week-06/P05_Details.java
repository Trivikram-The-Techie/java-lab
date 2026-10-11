public class Details {
    int rollNumber;
    String name;
    double marks;

    void display() {
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("Name: " + name);
        System.out.println("Marks: " + marks);
        System.out.println("-----------------");
    }

    public static void main(String[] args) {
        Details d1 = new Details();
        d1.rollNumber = 101;
        d1.name = "Aditi Sharma";
        d1.marks = 89.5;

        Details d2 = d1; // d2 now refers to the same object as d1

        System.out.println("Before modification (via d1):");
        d1.display();

        System.out.println("Before modification (via d2):");
        d2.display();

        // Modify the object through d2
        d2.name = "Rohan Verma";
        d2.marks = 95.0;

        System.out.println("After modifying through d2:");

        System.out.println("d1 now shows:");
        d1.display();

        System.out.println("d2 now shows:");
        d2.display();
    }
}
