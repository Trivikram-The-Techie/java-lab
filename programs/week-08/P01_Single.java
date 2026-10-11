class Person {
    String name;
    int age;

    void details() {
        System.out.println("Name is " + name);
        System.out.println("Age is " + age);
    }
}

class Student extends Person {
    int roll;
    String branch;

    void cred() {
        System.out.println("Roll Number: " + roll);
        System.out.println("Branch : " + branch);
    }
}

public class Single {
    public static void main(String[] args) {
        Student newStudent = new Student();
        newStudent.name = "Prazod";
        newStudent.age = 18;
        newStudent.roll = 98;
        newStudent.branch = "AIML";
        newStudent.details();
        newStudent.cred();
    }
}
