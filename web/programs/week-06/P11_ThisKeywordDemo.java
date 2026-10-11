class ThisKeywordDemo {

    int rollNo;
    String name;

    ThisKeywordDemo(int rollNo, String name) {
        this.rollNo = rollNo;
        this.name = name;
    }

    void display() {
        System.out.println("Roll Number : " + rollNo);
        System.out.println("Name : " + name);
    }

    public static void main(String[] args) {

        ThisKeywordDemo s =
            new ThisKeywordDemo(101, "Sathwika");

        s.display();
    }
}