class RectOperations {

    double length;
    double width;

    RectOperations(double l, double w) {
        length = l;
        width = w;
    }

    double area() {
        return length * width;
    }

    double perimeter() {
        return 2 * (length + width);
    }

    public static void main(String[] args) {

        RectOperations r =
            new RectOperations(10, 5);

        System.out.println("Area = " + r.area());
        System.out.println("Perimeter = " + r.perimeter());
    }
}