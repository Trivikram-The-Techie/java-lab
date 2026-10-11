public class ExceptionFeatures {
    static void check(int value) throws IllegalArgumentException {
        if (value < 0) throw new IllegalArgumentException("Value cannot be negative.");
        System.out.println(100 / value);
    }
    public static void main(String[] args) {
        try { check(-2); }
        catch (IllegalArgumentException e) { System.out.println("Invalid argument: " + e.getMessage()); }
        catch (ArithmeticException e) { System.out.println("Cannot divide by zero."); }
        finally { System.out.println("Finally block executed."); }
    }
}
