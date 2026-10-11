class StuinfoSys {

    int rollNo;
    String name;
    String branch;
    double cgpa;

    void setData(int r, String n, String b, double c) {
        rollNo = r;
        name = n;
        branch = b;
        cgpa = c;
    }

    void display() {
        System.out.println("------ Student Information ------");
        System.out.println("Roll Number : " + rollNo);
        System.out.println("Name : " + name);
        System.out.println("Branch : " + branch);
        System.out.println("CGPA : " + cgpa);
    }

    public static void main(String[] args) {
        StuinfoSys s = new StuinfoSys();

        s.setData(101, "Sathwika", "AIML", 9.5);
        s.display();
    }
}