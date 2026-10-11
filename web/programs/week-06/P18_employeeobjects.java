// Define the Employee class using encapsulation
class Employee {
    private String name;
    private double salary;

    // Constructor to initialize the employee details
    public Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    // Getter method for the employee's name
    public String getName() {
        return name;
    }

    // Getter method for the employee's salary
    public double getSalary() {
        return salary;
    }
}

// Main class renamed to 'employeeobjects'
public class employeeobjects {
    // Method that accepts two Employee objects as parameters
    public static void displayHigherSalary(Employee emp1, Employee emp2) {
        System.out.println("--- Salary Comparison ---");
        System.out.println("Employee 1: " + emp1.getName() + " ($" + emp1.getSalary() + ")");
        System.out.println("Employee 2: " + emp2.getName() + " ($" + emp2.getSalary() + ")");
        System.out.println("-------------------------");

        // Compare the salaries using the getter methods
        if (emp1.getSalary() > emp2.getSalary()) {
            System.out.println("Result: " + emp1.getName() + " has the higher salary.");
        } else if (emp2.getSalary() > emp1.getSalary()) {
            System.out.println("Result: " + emp2.getName() + " has the higher salary.");
        } else {
            System.out.println("Result: Both employees earn the exact same salary.");
        }
    }

    public static void main(String[] args) {
        // 1. Create two Employee objects
        Employee employeeA = new Employee("David", 55000.0);
        Employee employeeB = new Employee("Sarah", 62000.0);

        // 2. Pass the objects to the comparison method
        displayHigherSalary(employeeA, employeeB);
    }
}
