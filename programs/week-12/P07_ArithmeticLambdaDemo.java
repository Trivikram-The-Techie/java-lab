@FunctionalInterface
interface ArithmeticOperation {
    double calculate(double a, double b);
}
public class ArithmeticLambdaDemo {
    public static void main(String[] args) {
        ArithmeticOperation addition = (a, b) -> a + b;
        ArithmeticOperation subtraction = (a, b) -> a - b;
        ArithmeticOperation multiplication = (a, b) -> a * b;
        ArithmeticOperation division = (a, b) -> a / b;
        double x = 20;
        double y = 5;
        System.out.println("Addition: " + addition.calculate(x, y));
        System.out.println("Subtraction: " + subtraction.calculate(x, y));
        System.out.println("Multiplication: " + multiplication.calculate(x, y));
        System.out.println("Division: " + division.calculate(x, y));
    }
}