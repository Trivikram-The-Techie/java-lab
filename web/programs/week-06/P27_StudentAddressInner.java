class StudentAddressInner {

    int rollNo;
    String name;

    StudentAddressInner(
        int rollNo,
        String name
    ) {
        this.rollNo = rollNo;
        this.name = name;
    }

    class Address {

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

        StudentAddressInner student =
            new StudentAddressInner(
                101,
                "Sathwika"
            );

        StudentAddressInner.Address address =
            student.new Address(
                "Hyderabad",
                "Telangana"
            );

        System.out.println(
            "Roll Number : " + student.rollNo
        );

        System.out.println(
            "Name : " + student.name
        );

        address.display();
    }
}