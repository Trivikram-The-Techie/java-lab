class University {
    interface Department {
        void showDepartment();
    }
}

class CSEDepartment implements University.Department {
    public void showDepartment() {
        System.out.println("Department : Computer Science and Engineering");
    }
}

public class NestedInterfaceDemo {
    public static void main(String[] args) {
        University.Department dept = new CSEDepartment();
        dept.showDepartment();
    }
}
