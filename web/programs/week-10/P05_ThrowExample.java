public class ThrowExample {
    public static void main(String[] args) {
        int age = 15;
        try {
            if (age < 18) {
                throw new ArithmeticException("Age must be 18 or above.");
            }
            System.out.println("Eligible to vote.");
        } catch (ArithmeticException e) {
            System.out.println("Exception: " + e.getMessage());
        }
    }
}
