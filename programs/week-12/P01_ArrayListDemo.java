import java.util.ArrayList;
import java.util.Collections;

public class P01_ArrayListDemo {
    public static void main(String[] args) {
        System.out.println("=== Java Collections: ArrayList Demo ===");
        ArrayList<String> students = new ArrayList<>();
        students.add("Trivikram");
        students.add("Aravind");
        students.add("Bhavya");
        students.add("Deepak");

        System.out.println("Original Student List: " + students);
        Collections.sort(students);
        System.out.println("Sorted Student List:   " + students);
        System.out.println("Total Count: " + students.size());
    }
}
