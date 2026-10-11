class Shape {
    void draw() {
        System.out.println("Drawing a generic shape");
    }
}

class Circle extends Shape {
    void draw() {
        System.out.println("Drawing a Circle");
    }
}

class Rectangle extends Shape {
    void draw() {
        System.out.println("Drawing a Rectangle");
    }
}

class Triangle extends Shape {
    void draw() {
        System.out.println("Drawing a Triangle");
    }
}

public class Main5 {
    public static void main(String[] args) {
        // Creating a superclass reference
        Shape myShape;

        // Dynamic Method Dispatch: The method called is determined
        // by the actual object type at runtime, not the reference type.
        myShape = new Circle();
        myShape.draw();

        myShape = new Rectangle();
        myShape.draw();

        myShape = new Triangle();
        myShape.draw();
    }
}
