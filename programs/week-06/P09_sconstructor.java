class sconstructor {
    int id;
    String name;

    // Default constructor
    sconstructor() {
        id = 0;
        name = "Unknown";
    }

    // Parameterized constructor
    sconstructor(int id, String name) {
        this.id = id;
        this.name = name;
    }

    void show() {
        System.out.println("ID: " + id + ", Name: " + name);
    }

    public static void main(String[] args) {
        sconstructor s1 = new sconstructor(); // default constructor
        sconstructor s2 = new sconstructor(101, "Alice"); // parameterized constructor

        s1.show();
        s2.show();
    }
}
