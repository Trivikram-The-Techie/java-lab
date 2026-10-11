class Student {
    String name;
    int rollNumber;

    public Student(String name, int rollNumber) {
        this.name = name;
        this.rollNumber = rollNumber;
    }

    public void displayStudentInfo() {
        System.out.println("Student Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
    }

    class Address {
        String street;
        String city;
        String zipCode;

        public Address(String street, String city, String zipCode) {
            this.street = street;
            this.city = city;
            this.zipCode = zipCode;
        }

        public void displayAddressInfo() {
            System.out.println("Address: " + street + ", " + city + " - " + zipCode);
        }
    }
}

public class StudentDemo {
    public static void main(String[] args) {
        Student student = new Student("Alice Smith", 101);

        Student.Address address = student.new Address("456 University Ave", "Boston", "02115");

        student.displayStudentInfo();
        address.displayAddressInfo();
    }
}
