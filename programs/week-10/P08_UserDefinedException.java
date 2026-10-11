class AgeException extends Exception {
    AgeException(String message) {
        super(message);
    }
}

public class UserDefinedException {
    public static void main(String[] args) {
        int age = 15;
        try {
            if (age < 18) {
                throw new AgeException("Age must be 18 or above.");
            }
            System.out.println("Eligible to vote.");
        } catch (AgeException e) {
            System.out.println("Exception: " + e.getMessage());
        }
    }
}
