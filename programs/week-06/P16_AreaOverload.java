class AreaOverload {

    double area(double radius) {
        return 3.14 * radius * radius;
    }

    int area(int length, int breadth) {
        return length * breadth;
    }

    int area(int side) {
        return side * side;
    }

    public static void main(String[] args) {

        AreaOverload obj =
            new AreaOverload();

        System.out.println(
            "Area of Circle : " + obj.area(7.0)
        );

        System.out.println(
            "Area of Rectangle : " + obj.area(10, 5)
        );

        System.out.println(
            "Area of Square : " + obj.area(4)
        );
    }
}