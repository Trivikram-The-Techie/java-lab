class Person {
    String name = "John";
}

class Employee extends Person {
    int empid = 101;
}

class Manager extends Employee {
    String department = "IT";

    void display() {
        // Accessing inherited properties directly
        System.out.println("Name: " + name);
        System.out.println("ID: " + empid);
        System.out.println("Dept: " + department);
    }
}

public class Main3 {
    public static void main(String[] args) {
        Manager mgr = new Manager();
        mgr.display();
    }
}
