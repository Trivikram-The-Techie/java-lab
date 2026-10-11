class Person {
    Person() {
        System.out.println("Person constructor executed.");
    }
}

class Student extends Person {
    Student() {
        System.out.println("Student constructor executed.");
    }
}

class GraduateStudent extends Student {
    GraduateStudent() {
        System.out.println("GraduateStudent constructor executed.");
    }
}

public class Main9 {
    public static void main(String[] args) {
        System.out.println("Creating GraduateStudent object:");
        // Instantiating the lowest subclass triggers the constructor chain
        // from the top-most superclass down to the subclass.
        GraduateStudent gs = new GraduateStudent();
    }
}
