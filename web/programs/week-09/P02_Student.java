// File: college/Student.java
package college;

public class Student {
    public void show() {
        System.out.println("Student class from college package");
    }
}

// File: college/Faculty.java
package college;

public class Faculty {
    public void show() {
        System.out.println("Faculty class from college package");
    }
}

// File: TestSpecificImport.java
import college.Student;

public class TestSpecificImport {
    public static void main(String[] args) {
        Student s = new Student();
        s.show();
    }
}

// File: TestWildcardImport.java
import college.*;

public class TestWildcardImport {
    public static void main(String[] args) {
        Student s = new Student();
        Faculty f = new Faculty();

        s.show();
        f.show();
    }
}
