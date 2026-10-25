@FunctionalInterface
interface BinaryOperation<T> {
    T operate(T first, T second);
}
public class GenericBinaryOperationDemo {
    public static void main(String[] args) {
        BinaryOperation<Integer> addition = (a, b) -> a + b;
        BinaryOperation<String> joining = (a, b) -> a + " " + b;
        BinaryOperation<Double> multiplication = (a, b) -> a * b;
        System.out.println("Integer addition: " + addition.operate(10, 20));
        System.out.println("String joining: " + joining.operate("Hello", "Java"));
        System.out.println("Double multiplication: "
                + multiplication.operate(2.5, 4.0));
    }
}