interface Show<T> {
    void display(T value);
}

public class Lab11 {
    public static void main(String[] args) {
        Show<Integer> showInt = n -> System.out.println("Integer: " + n);
        Show<String> showStr = s -> System.out.println("String: " + s);

        showInt.display(100);
        showStr.display("Hello");
    }
}
