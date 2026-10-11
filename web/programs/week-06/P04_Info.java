import java.util.Scanner;

public class Info {
    int rollNumber;
    String name;
    double marks;

    void display() {
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("Name: " + name);
        System.out.println("Marks: " + marks);
        System.out.println("-----------------");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Info[] students = new Info[5];

        for (int i = 0; i < 5; i++) {
            students[i] = new Info();
            System.out.println("Enter Roll Number, Name, Marks:");
            students[i].rollNumber = sc.nextInt();
            students[i].name = sc.next();
            students[i].marks = sc.nextDouble();
        }

        for (int i = 0; i < 5; i++) {
            students[i].display();
        }
    }
}
