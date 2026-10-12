import java.util.HashMap;
import java.util.Map;

public class P02_HashMapDemo {
    public static void main(String[] args) {
        System.out.println("=== Java Collections: HashMap Demo ===");
        Map<String, String> studentRecords = new HashMap<>();
        studentRecords.put("25EU02067", "Trivikram - AI & ML");
        studentRecords.put("25EU02068", "Aditya - CSE");
        studentRecords.put("25EU02069", "Charan - AI & DS");

        for (Map.Entry<String, String> entry : studentRecords.entrySet()) {
            System.out.println("Roll No: " + entry.getKey() + " -> " + entry.getValue());
        }
    }
}
