interface Square {
    int find(int a);
}

interface Add {
    int find(int a, int b);
}

public class Lab8 {
    public static void main(String[] args) {
        Square sq = a -> a * a;
        Add add = (a, b) -> a + b;

        System.out.println("Square: " + sq.find(5));
        System.out.println("Sum: " + add.find(5, 10));
    }
}
