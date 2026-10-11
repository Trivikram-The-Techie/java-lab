class Person {

    Person() {
        System.out.println(
            "Person constructor executed"
        );
    }
}

class Student extends Person {

    Student() {
        System.out.println(
            "Student constructor executed"
        );
    }
}

class GraduateStudent extends Student {

    GraduateStudent() {
        System.out.println(
            "GraduateStudent constructor executed"
        );
    }
}

public class Main {

    public static void main(String[] args) {

        GraduateStudent gs =
            new GraduateStudent();
    }
}