class thisuse {
    int id;
    String name;

    // Constructor using 'this' to refer to instance variables
    thisuse(int id, String name) {
        this.id = id; // this.id refers to instance variable
        this.name = name; // this.name refers to instance variable
    }

    // Method using 'this' to distinguish variables
    void setDetails(int id, String name) {
        this.id = id; // instance variable = local variable (parameter)
        this.name = name;
    }

    void show() {
        System.out.println("ID: " + id + ", Name: " + name);
    }

    public static void main(String[] args) {
        thisuse s1 = new thisuse(101, "Alice"); // using constructor
        s1.show();

        thisuse s2 = new thisuse(0, ""); // temporary object
        s2.setDetails(102, "Bob"); // using method with 'this'
        s2.show();
    }
}
