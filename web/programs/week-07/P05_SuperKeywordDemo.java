class Employee {
    String name = "Unknown";
    double salary;

    Employee() {
        System.out.println("Employee constructor called");
    }

    Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
        System.out.println("Parameterized Employee constructor called");
    }

    void display() {
        System.out.println("Name: " + name);
        System.out.println("Salary: " + salary);
    }
}

class Manager extends Employee {
    String name = "Manager Name";
    double bonus;

    Manager(String empName, double salary, double bonus) {
        super(empName, salary);
        this.bonus = bonus;
        System.out.println("Manager constructor called");
    }

    void displayManager() {
        System.out.println("Superclass name (via super): " + super.name);
        super.display();
        System.out.println("Bonus: " + bonus);
    }
}

public class SuperKeywordDemo {
    public static void main(String[] args) {
        Manager m1 = new Manager("Anita", 60000, 8000);
        System.out.println();
        m1.displayManager();
    }
}
