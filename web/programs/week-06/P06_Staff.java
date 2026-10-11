public class Staff {
    int empId;
    String name;
    double salary;

    void display() {
        System.out.println("Employee ID: " + empId);
        System.out.println("Name: " + name);
        System.out.println("Salary: " + salary);
        System.out.println("-----------------");
    }

    public static void main(String[] args) {
        Staff s1 = new Staff();
        s1.empId = 501;
        s1.name = "Rohan Verma";
        s1.salary = 45000.0;

        Staff s2 = s1; // s2 points to the same object as s1

        System.out.println("Details via s1:");
        s1.display();

        System.out.println("Details via s2:");
        s2.display();

        // Comparing references using ==
        if (s1 == s2) {
            System.out.println("s1 and s2 refer to the SAME object.");
        } else {
            System.out.println("s1 and s2 refer to DIFFERENT objects.");
        }
    }
}
