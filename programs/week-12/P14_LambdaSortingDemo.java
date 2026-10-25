import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
public class LambdaSortingDemo {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>(
                Arrays.asList(45, 12, 78, 3, 29));
        List<String> names = new ArrayList<>(
                Arrays.asList("Ravi", "Anita", "Kiran", "Bhavna"));
        numbers.sort((a, b) -> a.compareTo(b));
        names.sort((a, b) -> a.compareToIgnoreCase(b));
        System.out.println("Sorted integers: " + numbers);
        System.out.println("Sorted strings: " + names);
    }
}