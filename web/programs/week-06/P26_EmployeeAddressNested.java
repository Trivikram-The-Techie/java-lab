class EmployeeAddressNested {

    String employeeName;
    int employeeId;

    EmployeeAddressNested(
        String employeeName,
        int employeeId
    ) {
        this.employeeName = employeeName;
        this.employeeId = employeeId;
    }

    static class Address {

        String city;
        String state;

        Address(String city, String state) {
            this.city = city;
            this.state = state;
        }

        void display() {

            System.out.println(
                "City : " + city
            );

            System.out.println(
                "State : " + state
            );
        }
    }

    public static void main(String[] args) {

        EmployeeAddressNested emp =
            new EmployeeAddressNested(
                "Sathwika",
                1001
            );

        EmployeeAddressNested.Address address =
            new EmployeeAddressNested.Address(
                "Hyderabad",
                "Telangana"
            );

        System.out.println(
            "Employee ID : " + emp.employeeId
        );

        System.out.println(
            "Employee Name : " + emp.employeeName
        );

        address.display();
    }
}