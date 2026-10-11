interface Constants {
    int MAX_MARKS = 100;
    double PI = 3.14159;
}

class Circle implements Constants {
    double radius;

    Circle(double radius) {
        this.radius = radius;
    }

    void showConstants() {
        System.out.println("Max Marks : " + MAX_MARKS);
        System.out.println("PI : " + PI);
        System.out.println("Area : " + (PI * radius * radius));
    }
}

public class ConstantsDemo {
    public static void main(String[] args) {
        Circle c = new Circle(3);
        c.showConstants();

        System.out.println("Accessed using interface name:");
        System.out.println("Max Marks : " + Constants.MAX_MARKS);
        System.out.println("PI : " + Constants.PI);
    }
}
