class Vehicle {

    int speed = 80;

    void display() {
        System.out.println(
            "Vehicle speed: " + speed
        );
    }
}

class Car extends Vehicle {

    String model = "Toyota";

    @Override
    void display() {

        System.out.println(
            "Car model: " + model
        );

        System.out.println(
            "Vehicle speed using super: " +
            super.speed
        );

        super.display();
    }
}

public class Main {

    public static void main(String[] args) {

        Car c = new Car();

        c.display();
    }
}