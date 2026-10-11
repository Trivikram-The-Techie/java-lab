class chaining {
    int id;
    String name;
    String course;

    // Constructor 1: No arguments
    chaining() {
        this(0, "Unknown"); // calls Constructor 2
        System.out.println("Default constructor called");
    }

    // Constructor 2: With id and name
    chaining(int id, String name) {
        this(id, name, "Not Enrolled"); // calls Constructor 3
        System.out.println("Constructor with id and name called");
    }

    // Constructor 3: With all details (main constructor)
    chaining(int id, String name, String course) {
        this.id = id;
        this.name = name;
        this.course = course;
        System.out.println("Constructor with all parameters called");
    }

    void show() {
        System.out.println("ID: " + id + ", Name: " + name + ", Course: " + course);
    }

    public static void main(String[] args) {
        chaining s1 = new chaining(); // chains through all constructors
        s1.show();

        System.out.println();

        chaining s2 = new chaining(101, "Alice"); // chains to Constructor 3
        s2.show();

        System.out.println();

        chaining s3 = new chaining(102, "Bob", "Mathematics"); // direct call
        s3.show();
    }
}
