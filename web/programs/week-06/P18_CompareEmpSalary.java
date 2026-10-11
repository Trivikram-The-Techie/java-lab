class CompareEmpSalary {

    int empId;
    String name;
    double salary;

    CompareEmpSalary(
        int empId,
        String name,
        double salary
    ) {
        this.empId = empId;
        this.name = name;
        this.salary = salary;
    }

    static void compareSalary(
        CompareEmpSalary e1,
        CompareEmpSalary e2
    ) {

        if (e1.salary > e2.salary) {

            System.out.println(
                "Higher Salary Employee : " + e1.name
            );

            System.out.println(
                "Salary : " + e1.salary
            );

        } else if (e2.salary > e1.salary) {

            System.out.println(
                "Higher Salary Employee : " + e2.name
            );

            System.out.println(
                "Salary : " + e2.salary
            );

        } else {

            System.out.println(
                "Both employees have equal salary."
            );
        }
    }

    public static void main(String[] args) {

        CompareEmpSalary e1 =
            new CompareEmpSalary(
                101,
                "Rahul",
                35000
            );

        CompareEmpSalary e2 =
            new CompareEmpSalary(
                102,
                "Anil",
                45000
            );

        compareSalary(e1, e2);
    }
}