interface Animal {
    void eat();
}

interface Dog extends Animal {
    void bark();
}

class Labrador implements Dog {
    public void eat() {
        System.out.println("Labrador eats food");
    }

    public void bark() {
        System.out.println("Labrador barks");
    }
}

public class InterfaceInheritanceDemo {
    public static void main(String[] args) {
        Labrador l = new Labrador();

        l.eat();
        l.bark();
    }
}