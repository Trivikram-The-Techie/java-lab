@FunctionalInterface
interface LargestNumber {
    int findLargest(int a, int b);
}
public class LargestNumberLambdaDemo {
    public static void main(String[] args) {
        LargestNumber largest = (a, b) -> {
            if (a > b) {
                return a;
            } else {
                return b;
            }
        };
        System.out.println("Largest number: " + largest.findLargest(45, 72));
    }
}