import java.util.ArrayList;
import java.util.Arrays;
public class ArrayListLambdaDemo {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>(
                Arrays.asList(10, 15, 20, 25, 30, 35));
        System.out.println("All numbers:");
        numbers.forEach(number -> System.out.println(number));
        System.out.println("Numbers greater than 20:");
        numbers.forEach(number -> {
            if (number > 20) {
                System.out.println(number);
            }
        });
    }
}