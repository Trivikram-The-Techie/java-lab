final class SecureSystem {
    public void displayStatus() {
        System.out.println("SecureSystem is a final class. It cannot be subclassed.");
    }
}

class Parent {
    final int MAX_SPEED = 120;

    public final void showMaxSpeed() {
        System.out.println("The maximum speed is strictly set to: " + MAX_SPEED + " km/h");
    }
}

class Child extends Parent {
    public void childBehavior() {
        System.out.println("Inside the Child class.");
    }
}

public class FinalKeywordDemo {
    public static void main(String[] args) {
        System.out.println("=== 1. Final Variable and Method Demo ===");
        Child childObj = new Child();
        childObj.childBehavior();
        childObj.showMaxSpeed();

        System.out.println("\n=== 2. Final Class Demo ===");
        SecureSystem system = new SecureSystem();
        system.displayStatus();
    }
}
