class Employee {
    String name;
    int employeeId;
    Address address;

    public Employee(String name, int employeeId, Address address) {
        this.name = name;
        this.employeeId = employeeId;
        this.address = address;
    }

    public void displayEmployeeDetails() {
        System.out.println("Employee ID: " + employeeId);
        System.out.println("Name: " + name);
        address.displayAddress();
    }

    static class Address {
        String street;
        String city;
        String zipCode;

        public Address(String street, String city, String zipCode) {
            this.street = street;
            this.city = city;
            this.zipCode = zipCode;
        }

        public void displayAddress() {
            System.out.println("Address: " + street + ", " + city + " - " + zipCode);
        }
    }
}

public class EmployeeDemo {
    public static void main(String[] args) {
        Employee.Address empAddress = new Employee.Address("123 Tech Lane", "Silicon Valley", "94043");

        Employee emp = new Employee("John Doe", 1001, empAddress);

        emp.displayEmployeeDetails();
    }
}
