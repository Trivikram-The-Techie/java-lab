class ConstructorChaining {

    ConstructorChaining() {
        this(101);
        System.out.println("Default Constructor");
    }

    ConstructorChaining(int rollNo) {
        this(rollNo, "Sathwika");
        System.out.println("Roll Number : " + rollNo);
    }

    ConstructorChaining(int rollNo, String name) {
        System.out.println("Roll Number : " + rollNo);
        System.out.println("Name : " + name);
    }

    public static void main(String[] args) {
        new ConstructorChaining();
    }
}