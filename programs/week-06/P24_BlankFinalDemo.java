class Employee {
    private static int idGenerator = 1000;
    private final int employeeId;
    private String name;

    public Employee(String name) {
        this.name = name;
        this.employeeId = ++idGenerator;
        System.out.println("Employee created: " + this.name + " (ID Assigned: " + this.employeeId + ")");
    }

    public void displayDetails() {
        System.out.println("Employee ID: " + employeeId + " | Name: " + name);
    }
}

public class BlankFinalDemo {
    public static void main(String[] args) {
        System.out.println("=== Creating Employees ===");

        Employee emp1 = new Employee("Alice Johnson");
        Employee emp2 = new Employee("Bob Smith");
        Employee emp3 = new Employee("Charlie Brown");

        System.out.println("\n=== Employee Records ===");

        emp1.displayDetails();
        emp2.displayDetails();
        emp3.displayDetails();
    }
}
