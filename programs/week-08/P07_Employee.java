class Employee {

    double basicSalary = 30000;

    void displayBasicSalary() {

        System.out.println(
            "Basic Salary: " + basicSalary
        );
    }
}

class Developer extends Employee {

    double programmingAllowance = 10000;

    void displayProgrammingAllowance() {

        System.out.println(
            "Programming Allowance: " +
            programmingAllowance
        );
    }
}

class SeniorDeveloper extends Developer {

    double projectAllowance = 15000;

    void calculateSalary() {

        double totalSalary =
            basicSalary +
            programmingAllowance +
            projectAllowance;

        displayBasicSalary();
        displayProgrammingAllowance();

        System.out.println(
            "Project Allowance: " +
            projectAllowance
        );

        System.out.println(
            "Total Salary: " +
            totalSalary
        );
    }
}

public class Main {

    public static void main(String[] args) {

        SeniorDeveloper sd =
            new SeniorDeveloper();

        sd.calculateSalary();
    }
}