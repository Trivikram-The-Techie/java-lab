class Shape {

    void draw() {
        System.out.println(
            "Drawing a shape"
        );
    }
}

class Circle extends Shape {

    @Override
    void draw() {
        System.out.println(
            "Drawing a circle"
        );
    }
}

class Rectangle extends Shape {

    @Override
    void draw() {
        System.out.println(
            "Drawing a rectangle"
        );
    }
}

class Triangle extends Shape {

    @Override
    void draw() {
        System.out.println(
            "Drawing a triangle"
        );
    }
}

public class Main {

    public static void main(String[] args) {

        Shape s;

        s = new Circle();
        s.draw();

        s = new Rectangle();
        s.draw();

        s = new Triangle();
        s.draw();
    }
}
