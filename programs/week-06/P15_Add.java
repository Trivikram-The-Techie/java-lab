public class Add {
    // 1. Method to add two integers
    public int add(int a, int b) {
        return a + b;
    }

    // 2. Overloaded method to add three integers (Different number of parameters)
    public int add(int a, int b, int c) {
        return a + b + c;
    }

    // 3. Overloaded method to add two doubles (Different data types)
    public double add(double a, double b) {
        return a + b;
    }

    // 4. Overloaded method to add an integer and a double (Different order of data types)
    public double add(int a, double b) {
        return a + b;
    }

    public static void main(String[] args) {
        // Instantiating the 'Add' class
        Add calc = new Add();

        System.out.println("=== Method Overloading Demonstration ===");

        // Calls add(int, int)
        int sum1 = calc.add(15, 25);
        System.out.println("Adding two integers (15 + 25): " + sum1);

        // Calls add(int, int, int)
        int sum2 = calc.add(10, 20, 30);
        System.out.println("Adding three integers (10 + 20 + 30): " + sum2);

        // Calls add(double, double)
        double sum3 = calc.add(12.5, 7.5);
        System.out.println("Adding two doubles (12.5 + 7.5): " + sum3);

        // Calls add(int, double)
        double sum4 = calc.add(10, 5.5);
        System.out.println("Adding an int and a double (10 + 5.5): " + sum4);
    }
}
