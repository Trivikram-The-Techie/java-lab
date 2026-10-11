public class AreaCalculator {
    // 1. Overloaded method for the area of a circle
    // Uses a 'double' parameter for the radius
    public double area(double radius) {
        return Math.PI * radius * radius;
    }

    // 2. Overloaded method for the area of a square
    // Uses an 'int' parameter for the side to differentiate from the circle method
    public int area(int side) {
        return side * side;
    }

    // 3. Overloaded method for the area of a rectangle
    // Uses two parameters (length and width)
    public int area(int length, int width) {
        return length * width;
    }

    public static void main(String[] args) {
        AreaCalculator calc = new AreaCalculator();

        System.out.println("=== Area Calculations Demonstration ===");

        // Calls area(double) -> Circle
        double circleArea = calc.area(5.5);
        System.out.println("Area of the Circle (radius 5.5): " + circleArea);

        // Calls area(int) -> Square
        int squareArea = calc.area(7);
        System.out.println("Area of the Square (side 7): " + squareArea);

        // Calls area(int, int) -> Rectangle
        int rectangleArea = calc.area(8, 12);
        System.out.println("Area of the Rectangle (length 8, width 12): " + rectangleArea);
    }
}
