interface Max {
    int find(int a, int b);
}

public class Lab10 {
    public static void main(String[] args) {
        Max max = (a, b) -> {
            if (a > b) {
                return a;
            } else {
                return b;
            }
        };

        System.out.println("Largest: " + max.find(20, 35));
    }
}
