class BooleanDemo {
    public static void main(String[] args) {

        boolean isJavaFun = true;
        boolean isRainy = false;

        System.out.println("Is Java Fun? " + isJavaFun);
        System.out.println("Is it Rainy? " + isRainy);

        int num1 = 15;
        int num2 = 10;

        boolean greaterThan = num1 > num2;
        boolean equalTo = num1 == num2;
        boolean lessThan = num1 < num2;

        System.out.println(num1 + " > " + num2 + " : " + greaterThan);
        System.out.println(num1 + " == " + num2 + " : " + equalTo);
        System.out.println(num1 + " < " + num2 + " : " + lessThan);
    }
}