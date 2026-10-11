class Vehicle {
    int speed = 100;

    void display() {
        System.out.println("Inside Vehicle class");
    }
}

class Car extends Vehicle {
    String model = "Sedan";

    void display() {
        super.display(); // 1. Calls superclass method
        System.out.println("Model: " + model);
        System.out.println("Speed: " + super.speed); // 2. Accesses superclass variable
    }
}

public class Main2 {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.display();
    }
}
