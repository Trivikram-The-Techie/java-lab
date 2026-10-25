@FunctionalInterface
interface Display<T> {
    void show(T value);
}
public class GenericLambdaDemo {
    public static void main(String[] args) {
        Display<Integer> integerDisplay = value ->
                System.out.println("Integer value: " + value);
        Display<String> stringDisplay = value ->
                System.out.println("String value: " + value);
        Display<Double> doubleDisplay = value ->
                System.out.println("Double value: " + value);
        integerDisplay.show(100);
        stringDisplay.show("Java Lambda");
        doubleDisplay.show(25.75);
    }
}