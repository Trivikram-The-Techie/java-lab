interface Check {
    void test(int n);
}

public class Lab9 {
    public static void main(String[] args) {
        Check check = (n) -> {
            System.out.println("Number: " + n);
            if (n % 2 == 0) {
                System.out.println("Even");
            } else {
                System.out.println("Odd");
            }
        };

        check.test(7);
        check.test(10);
    }
}
