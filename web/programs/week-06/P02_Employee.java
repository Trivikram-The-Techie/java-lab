public class Employee {
    int empId;
    String name;
    String department;
    double salary;

    void display() {
        System.out.println("Employee ID: " + empId);
        System.out.println("Name: " + name);
        System.out.println("Department: " + department);
        System.out.println("Salary: " + salary);
    }

    public static void main(String[] args) {
        Employee e1 = new Employee();
        e1.empId = 501;
        e1.name = "Rohan Verma";
        e1.department = "Human Resources";
        e1.salary = 45000.0;

        e1.display();
    }
}
