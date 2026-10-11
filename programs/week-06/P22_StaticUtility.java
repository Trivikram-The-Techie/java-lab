class StaticUtility {

    static int square(int n) {
        return n * n;
    }

    static int cube(int n) {
        return n * n * n;
    }

    static long factorial(int n) {

        long fact = 1;

        for (int i = 1; i <= n; i++) {
            fact = fact * i;
        }

        return fact;
    }

    public static void main(String[] args) {

        int n = 5;

        System.out.println(
            "Square : " + square(n)
        );

        System.out.println(
            "Cube : " + cube(n)
        );

        System.out.println(
            "Factorial : " + factorial(n)
        );
    }
}