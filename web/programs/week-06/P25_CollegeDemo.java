class College {
    static class Department {
        String deptName;
        int deptCode;

        public Department(String deptName, int deptCode) {
            this.deptName = deptName;
            this.deptCode = deptCode;
        }

        public void displayDetails() {
            System.out.println("Department Name: " + deptName);
            System.out.println("Department Code: " + deptCode);
        }
    }
}

public class CollegeDemo {
    public static void main(String[] args) {
        College.Department dept1 = new College.Department("Computer Science", 101);
        College.Department dept2 = new College.Department("Electrical Engineering", 102);

        dept1.displayDetails();
        System.out.println("------------------");
        dept2.displayDetails();
    }
}
