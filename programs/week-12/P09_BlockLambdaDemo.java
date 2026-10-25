@FunctionalInterface
interface MessageProcessor {
    String process(String message);
}
public class BlockLambdaDemo {
    public static void main(String[] args) {
        MessageProcessor processor = message -> {
            String trimmed = message.trim();
            String upperCase = trimmed.toUpperCase();
            return "Processed message: " + upperCase;
        };
        System.out.println(processor.process("  hello lambda  "));
    }
}