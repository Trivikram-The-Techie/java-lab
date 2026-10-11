import java.util.Scanner;

class StudentArray {

    int rollNo;
    String name;

    void input(Scanner sc) {
        System.out.print("Enter Roll No: ");
        rollNo = sc.nextInt();

        System.out.print("Enter Name: ");
        name = sc.next();
    }

    void display() {
        System.out.println(rollNo + " " + name);
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        StudentArray[] s = new StudentArray[5];

        for (int i = 0; i < 5; i++) {
            s[i] = new StudentArray();
            s[i].input(sc);
        }

        System.out.println("\nStudent Details");

        for (int i = 0; i < 5; i++) {
            s[i].display();
        }

        sc.close();
    }
}