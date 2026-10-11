class Animal {
    String name = "Animal";

    void display() {
        System.out.println("Animal class");
    }
}

class Dog extends Animal {
    String name = "Dog";

    void display() {
        System.out.println("Dog class");
    }

    void show() {
        System.out.println("Child name: " + name);
        System.out.println("Parent name: " + super.name);

        super.display();
        display();
    }
}

public class SuperDemo {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.show();
    }
}