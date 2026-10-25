@FunctionalInterface
interface SingleParameter {
    int square(int number);
}
@FunctionalInterface
interface MultipleParameters {
    int add(int a, int b);
}
public class LambdaParametersDemo {
    public static void main(String[] args) {
        SingleParameter square = number -> number * number;
        MultipleParameters addition = (a, b) -> a + b;
        System.out.println("Square of 6: " + square.square(6));
        System.out.println("12 + 8: " + addition.add(12, 8));
    }
}