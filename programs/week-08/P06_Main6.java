class Employee {
    String name = "Alex";

    void display() {
        System.out.println("Employee Name: " + name);
    }
}

class Manager extends Employee {
    String department = "IT";

    void display() {
        super.display(); // Invokes the superclass (Employee) method first
        System.out.println("Manager Department: " + department);
    }
}

public class Main6 {
    public static void main(String[] args) {
        Manager mgr = new Manager();
        mgr.display();
    }
}
