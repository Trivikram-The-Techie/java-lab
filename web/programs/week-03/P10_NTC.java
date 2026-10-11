class NTC {
    public static void main(String[] args) {

        double doubleValue = 123.45;

        int intValue = (int) doubleValue;
        float floatValue = (float) doubleValue;
        short shortValue = (short) doubleValue;

        System.out.println("Double value : " + doubleValue);
        System.out.println("Int value : " + intValue);
        System.out.println("Float value : " + floatValue);
        System.out.println("Short value : " + shortValue);
    }
}