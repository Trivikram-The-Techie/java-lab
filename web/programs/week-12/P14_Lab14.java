import java.util.ArrayList;

public class Lab14 {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(40);
        numbers.add(10);
        numbers.add(30);
        numbers.add(20);

        ArrayList<String> names = new ArrayList<>();
        names.add("Banana");
        names.add("Apple");
        names.add("Cherry");

        numbers.sort((a, b) -> a - b);
        names.sort((a, b) -> a.compareTo(b));

        System.out.println("Sorted numbers: " + numbers);
        System.out.println("Sorted names: " + names);
    }
}
