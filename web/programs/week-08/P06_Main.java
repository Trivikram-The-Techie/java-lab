class Employee {

    void display() {
        System.out.println(
            "Employee details"
        );
    }
}

class Manager extends Employee {

    @Override
    void display() {

        super.display();

        System.out.println(
            "Manager details"
        );
    }
}

public class Main {

    public static void main(String[] args) {

        Manager m = new Manager();

        m.display();
    }
}
