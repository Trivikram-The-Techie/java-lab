class EmpinfoSys {

    int empId;
    String name;
    String department;
    double salary;

    void setData(int id, String n, String d, double s) {
        empId = id;
        name = n;
        department = d;
        salary = s;
    }

    void display() {
        System.out.println("------ Employee Information ------");
        System.out.println("Employee ID : " + empId);
        System.out.println("Name : " + name);
        System.out.println("Department : " + department);
        System.out.println("Salary : " + salary);
    }

    public static void main(String[] args) {
        EmpinfoSys e = new EmpinfoSys();

        e.setData(1001, "Rahul", "HR", 35000);
        e.display();
    }
}