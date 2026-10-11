class Person {

    String name;
    int age;

    void displayPersonDetails() {

        System.out.println(
            "Name: " + name
        );

        System.out.println(
            "Age: " + age
        );
    }
}

class Employee extends Person {

    int employeeId;
    double salary;

    void displayEmployeeDetails() {

        System.out.println(
            "Employee ID: " + employeeId
        );

        System.out.println(
            "Salary: " + salary
        );
    }
}

class Manager extends Employee {

    String department;

    void displayManagerDetails() {

        displayPersonDetails();
        displayEmployeeDetails();

        System.out.println(
            "Department: " + department
        );
    }
}

public class Main {

    public static void main(String[] args) {

        Manager m = new Manager();

        m.name = "Anil";
        m.age = 35;
        m.employeeId = 1001;
        m.salary = 75000;
        m.department = "IT";

        m.displayManagerDetails();
    }
}
