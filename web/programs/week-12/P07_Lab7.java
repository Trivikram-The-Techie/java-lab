interface Operation {
    int calculate(int a, int b);
}

public class Lab7 {
    public static void main(String[] args) {
        Operation add = (a, b) -> a + b;
        Operation sub = (a, b) -> a - b;
        Operation mul = (a, b) -> a * b;
        Operation div = (a, b) -> a / b;

        System.out.println("Addition: " + add.calculate(10, 5));
        System.out.println("Subtraction: " + sub.calculate(10, 5));
        System.out.println("Multiplication: " + mul.calculate(10, 5));
        System.out.println("Division: " + div.calculate(10, 5));
    }
}
