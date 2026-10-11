class ExceptionDemoCombined {
    static void checkMarks(int marks) throws Exception {
        if (marks < 0 || marks > 100) {
            throw new Exception("Marks must be between 0 and 100.");
        }
        System.out.println("Valid Marks: " + marks);
    }

    public static void main(String[] args) {
        int marks = 105;
        try {
            checkMarks(marks);
            int result = 10 / 0;
            System.out.println(result);
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic Exception: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Exception: " + e.getMessage());
        } finally {
            System.out.println("Finally block executed.");
        }
    }
}
