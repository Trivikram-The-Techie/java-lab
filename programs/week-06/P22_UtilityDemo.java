class MathUtility {
    private MathUtility() {
        throw new UnsupportedOperationException("Utility class cannot be instantiated");
    }

    public static int square(int number) {
        return number * number;
    }

    public static int cube(int number) {
        return number * number * number;
    }

    public static long factorial(int number) {
        if (number < 0) {
            throw new IllegalArgumentException("Factorial is not defined for negative numbers.");
        }
        long result = 1;
        for (int i = 1; i <= number; i++) {
            result *= i;
        }
        return result;
    }
}

public class UtilityDemo {
    public static void main(String[] args) {
        System.out.println("=== Math Utility Calculations ===");

        int num1 = 5;
        int num2 = 4;
        int num3 = 6;

        int squareResult = MathUtility.square(num1);
        int cubeResult = MathUtility.cube(num2);
        long factorialResult = MathUtility.factorial(num3);

        System.out.println("The square of " + num1 + " is    : " + squareResult);
        System.out.println("The cube of " + num2 + " is      : " + cubeResult);
        System.out.println("The factorial of " + num3 + " is : " + factorialResult);
    }
}
