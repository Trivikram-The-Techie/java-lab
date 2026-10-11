public class MultipleCatch {
    public static void main(String[] args) {
        try {
            int[] numbers = {10, 20, 30};
            System.out.println(numbers[5] / 0);
        } catch (ArithmeticException e) {
            System.out.println("ArithmeticException occurred.");
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("ArrayIndexOutOfBoundsException occurred.");
        } catch (Exception e) {
            System.out.println("Some other exception occurred.");
        }
    }
}
