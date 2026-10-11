public class MultipleCatchDemo {
    public static void main(String[] args) {
        try {
            int[] numbers = {10, 20, 30};
            int a = 10;
            int b = 0;
            System.out.println("Result: " + (a / b));
            System.out.println(numbers[5]);
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic Exception: Cannot divide by zero.");
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array Index Exception: Array index is out of bounds.");
        } catch (Exception e) {
            System.out.println("General Exception: " + e.getMessage());
        }
        System.out.println("Program continues after exception handling.");
    }
}
