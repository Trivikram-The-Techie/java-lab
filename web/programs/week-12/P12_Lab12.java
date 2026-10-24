interface Operation<T> {
    T apply(T a, T b);
}

public class Lab12 {
    public static void main(String[] args) {
        Operation<Integer> add = (a, b) -> a + b;
        Operation<String> concat = (a, b) -> a + b;

        System.out.println("Sum: " + add.apply(10, 20));
        System.out.println("Concat: " + concat.apply("Hello ", "World"));
    }
}
