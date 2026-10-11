class Employee {
    double basicSalary = 50000.0;
}

class Developer extends Employee {
    double programmingAllowance = 15000.0;
}

class SeniorDeveloper extends Developer {
    double projectAllowance = 20000.0;

    void displayTotalSalary() {
        // Accessing inherited properties from both parent classes
        double totalSalary = basicSalary + programmingAllowance + projectAllowance;

        System.out.println("Basic Salary: " + basicSalary);
        System.out.println("Programming Allowance: " + programmingAllowance);
        System.out.println("Project Allowance: " + projectAllowance);
        System.out.println("---------------------------------");
        System.out.println("Total Salary: " + totalSalary);
    }
}

public class Main7 {
    public static void main(String[] args) {
        SeniorDeveloper sd = new SeniorDeveloper();
        sd.displayTotalSalary();
    }
}
