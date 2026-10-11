public class FinallyDemo {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("ArithmeticException handled.");
        } finally {
            System.out.println("Finally block always executes.");
        }
        System.out.println("Program continues.");
    }
}