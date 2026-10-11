public class ExceptionTypes {
    public static void main(String[] args) {
        try { System.out.println(10 / 0); }
        catch (ArithmeticException e) { System.out.println("ArithmeticException: " + e); }

        try { int[] a = {10, 20, 30}; System.out.println(a[5]); }
        catch (ArrayIndexOutOfBoundsException e) { System.out.println("ArrayIndexOutOfBoundsException: " + e); }

        try { String s = null; System.out.println(s.length()); }
        catch (NullPointerException e) { System.out.println("NullPointerException: " + e); }
    }
}