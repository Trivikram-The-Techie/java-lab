// Java Programming Lab Curriculum & Dataset
// Student: Trivikram | Roll No: 25EU02067 | Dept of AI & ML

const weeks = [

  // =========================================================
  // WEEK 1
  // =========================================================
  {
    id: 1,
    title: "Week 01",
    subtitle: "Comparative Study of Programming Languages",
    programs: [
      {
        title: "Comparative Table — Java, C, C++, Python & JavaScript",
        description:
          "Comparative study of Java, C, C++, Python and JavaScript based on language type, OOP support, memory management, performance, platform independence, IDEs, applications, advantages and limitations.",
        code: `Java
C
C++
Python
JavaScript

Parameters covered:
1. Language / Package Name
2. Open Source or Commercial
3. Compiler or Interpreter
4. OOP Support
5. Developer Organization
6. Developer
7. Current Major Version
8. Primary Purpose
9. Common Applications
10. Database Support
11. Memory Management
12. Security Features
13. Performance
14. Platform Independence
15. Other Important Features
16. Ease of Learning
17. Popular IDEs
18. Compilation Output
19. Advantages
20. Limitations`,
        output: null
      }
    ]
  },


  // =========================================================
  // WEEK 2
  // =========================================================
  {
    id: 2,
    title: "Week 02",
    subtitle: "Installation of Java and Hello World",
    programs: [
      {
        title: "Oracle JDK Installation — Windows",
        description:
          "Installation of Java using Oracle JDK on Windows, configuring JAVA_HOME and PATH, verifying the Java version and executing a simple Hello World program.",
        code: `// Hello World Program

class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
        output: null
      },

      {
        title: "OpenJDK Installation — Windows",
        description:
          "Installation of Java using OpenJDK on Windows, running the MSI installer, checking the Java version and executing a Java program using PowerShell.",
        code: `// Hello World Program using OpenJDK

class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
        output: null
      }
    ]
  },


  // =========================================================
  // WEEK 3
  // =========================================================
  {
    id: 3,
    title: "Week 03",
    subtitle:
      "Basic Java Concepts, Data Types, Variables, Type Conversion, Type Casting and Control Statements",

    programs: [

      {
        title: "Hello Java",
        description:
          'Write a Java program to display "Hello, Java!" and demonstrate the basic structure of a Java program.',
        code: `class HelloJava {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`,
        output: null
      },

      {
        title: "Primitive Data Types",
        description:
          "Declare variables of byte, short, int, long, float, double, char and boolean data types and display their values.",
        code: `class PrimitiveDataTypes {
    public static void main(String[] args) {

        byte BV = 100;
        short SV = 20000;
        int IV = 500000;
        long LV = 9876543210L;
        float FV = 12.5f;
        double DV = 123.456789;
        char CV = 'A';
        boolean BOLV = true;

        System.out.println("Byte Value : " + BV);
        System.out.println("Short Value : " + SV);
        System.out.println("Int Value : " + IV);
        System.out.println("Long Value : " + LV);
        System.out.println("Float Value : " + FV);
        System.out.println("Double Value : " + DV);
        System.out.println("Char Value : " + CV);
        System.out.println("Boolean Value : " + BOLV);
    }
}`,
        output: null
      },

      {
        title: "Arithmetic Operations on Integers",
        description:
          "Perform addition, subtraction, multiplication, division and modulus operations on two integer variables.",
        code: `class ArithmeticOperations {
    public static void main(String[] args) {

        int a = 20;
        int b = 6;

        int addition = a + b;
        int subtraction = a - b;
        int multiplication = a * b;
        int division = a / b;
        int modulus = a % b;

        System.out.println("First Number : " + a);
        System.out.println("Second Number : " + b);
        System.out.println("Addition : " + addition);
        System.out.println("Subtraction : " + subtraction);
        System.out.println("Multiplication : " + multiplication);
        System.out.println("Division : " + division);
        System.out.println("Modulus : " + modulus);
    }
}`,
        output: null
      },

      {
        title: "Floating Point Arithmetic",
        description:
          "Perform arithmetic operations on floating-point numbers and display the results.",
        code: `class FloatingPointArithmetic {
    public static void main(String[] args) {

        float a = 15.5f;
        float b = 4.5f;

        float addition = a + b;
        float subtraction = a - b;
        float multiplication = a * b;
        float division = a / b;
        float modulus = a % b;

        System.out.println("First Number : " + a);
        System.out.println("Second Number : " + b);
        System.out.println("Addition : " + addition);
        System.out.println("Subtraction : " + subtraction);
        System.out.println("Multiplication : " + multiplication);
        System.out.println("Division : " + division);
        System.out.println("Modulus : " + modulus);
    }
}`,
        output: null
      },

      {
        title: "Character and ASCII Value",
        description:
          "Demonstrate the character data type by displaying a character and its corresponding ASCII/Unicode value.",
        code: `class CharacterDemo {
    public static void main(String[] args) {

        char ch = 'A';
        int asciiValue = ch;

        System.out.println("Character : " + ch);
        System.out.println("ASCII/Unicode Value : " + asciiValue);
    }
}`,
        output: null
      },

      {
        title: "Boolean Variables and Expressions",
        description:
          "Demonstrate boolean variables and boolean expressions using relational operators.",
        code: `class BooleanDemo {
    public static void main(String[] args) {

        boolean isJavaFun = true;
        boolean isRainy = false;

        System.out.println("Is Java Fun? " + isJavaFun);
        System.out.println("Is it Rainy? " + isRainy);

        int num1 = 15;
        int num2 = 10;

        boolean greaterThan = num1 > num2;
        boolean equalTo = num1 == num2;
        boolean lessThan = num1 < num2;

        System.out.println(num1 + " > " + num2 + " : " + greaterThan);
        System.out.println(num1 + " == " + num2 + " : " + equalTo);
        System.out.println(num1 + " < " + num2 + " : " + lessThan);
    }
}`,
        output: null
      },

      {
        title: "Variable Demo",
        description:
          "Declare and initialize different types of variables and display their values.",
        code: `class VariableDemo {
    public static void main(String[] args) {

        byte age = 20;
        short year = 2026;
        int salary = 50000;
        long population = 1400000000L;
        float height = 5.8f;
        double percentage = 92.75;
        char grade = 'A';
        boolean isPassed = true;
        String name = "John";

        System.out.println("Name : " + name);
        System.out.println("Age : " + age);
        System.out.println("Year : " + year);
        System.out.println("Salary : " + salary);
        System.out.println("Population : " + population);
        System.out.println("Height : " + height);
        System.out.println("Percentage : " + percentage);
        System.out.println("Grade : " + grade);
        System.out.println("Passed : " + isPassed);
    }
}`,
        output: null
      },

      {
        title: "Swap Two Variables",
        description:
          "Swap the values of two variables using a temporary variable.",
        code: `class Swap {
    public static void main(String[] args) {

        int a = 10;
        int b = 20;
        int temp;

        System.out.println("a = " + a);
        System.out.println("b = " + b);

        temp = a;
        a = b;
        b = temp;

        System.out.println("a = " + a);
        System.out.println("b = " + b);
    }
}`,
        output: null
      },

      {
        title: "Widening Type Conversion",
        description:
          "Demonstrate automatic widening type conversion between primitive data types.",
        code: `class WTC {
    public static void main(String[] args) {

        int intValue = 100;

        long longValue = intValue;
        float floatValue = intValue;
        double doubleValue = intValue;

        System.out.println("Int value : " + intValue);
        System.out.println("Long value : " + longValue);
        System.out.println("Float value : " + floatValue);
        System.out.println("Double value : " + doubleValue);
    }
}`,
        output: null
      },

      {
        title: "Narrowing Type Casting",
        description:
          "Demonstrate explicit narrowing type casting from one primitive data type to another.",
        code: `class NTC {
    public static void main(String[] args) {

        double doubleValue = 123.45;

        int intValue = (int) doubleValue;
        float floatValue = (float) doubleValue;
        short shortValue = (short) doubleValue;

        System.out.println("Double value : " + doubleValue);
        System.out.println("Int value : " + intValue);
        System.out.println("Float value : " + floatValue);
        System.out.println("Short value : " + shortValue);
    }
}`,
        output: null
      },

      {
        title: "Character and ASCII Conversion",
        description:
          "Convert a character to its ASCII/Unicode value and vice versa using type casting.",
        code: `class CAC {
    public static void main(String[] args) {

        char ch = 'A';
        int ascii = ch;

        int value = 66;
        char ch2 = (char) value;

        System.out.println("Character: " + ch);
        System.out.println("ASCII value: " + ascii);
        System.out.println("ASCII value: " + value);
        System.out.println("Character: " + ch2);
    }
}`,
        output: null
      },

      {
        title: "Even or Odd",
        description:
          "Check whether a given number is even or odd using the if-else control statement.",
        code: `class EvenOddCheck {
    public static void main(String[] args) {

        int number = 7;

        if (number % 2 == 0) {
            System.out.println(number + " is Even");
        } else {
            System.out.println(number + " is Odd");
        }
    }
}`,
        output: null
      },

      {
        title: "Largest of Two Numbers",
        description:
          "Find the largest of two numbers using the if-else statement.",
        code: `class LargestOfTwoNumbers {
    public static void main(String[] args) {

        int a = 25;
        int b = 40;

        if (a > b) {
            System.out.println(a + " is the largest number");
        } else {
            System.out.println(b + " is the largest number");
        }
    }
}`,
        output: null
      },

      {
        title: "Reserved Keywords",
        description:
          "Demonstrate valid Java identifiers and explain why Java reserved keywords cannot be used as variable names.",
        code: `class ReservedKeywordsDemo {
    public static void main(String[] args) {

        int number = 10;
        int totalMarks = 95;
        float average_score = 88.5f;
        char grade = 'A';

        System.out.println("Number : " + number);
        System.out.println("Total Marks : " + totalMarks);
        System.out.println("Average Score : " + average_score);
        System.out.println("Grade : " + grade);

        /*
         * Keywords like int, class, public, static, etc.
         * cannot be used as variable names because they are
         * reserved by Java for predefined purposes.
         *
         * Invalid examples:
         * int int = 5;
         * class class = 10;
         */
    }
}`,
        output: null
      },

      {
        title: "For Loop — Numbers 1 to 10",
        description:
          "Demonstrate the use of a for loop by displaying numbers from 1 to 10.",
        code: `class ForLoopDemo {
    public static void main(String[] args) {

        for (int i = 1; i <= 10; i++) {
            System.out.println(i);
        }
    }
}`,
        output: null
      }
    ]
  },


  // =========================================================
  // WEEK 4
  // =========================================================
  {
    id: 4,
    title: "Week 04",
    subtitle: "Viva Examination",
    programs: []
  },


  // =========================================================
  // WEEK 5
  // =========================================================
  {
    id: 5,
    title: "Week 05",
    subtitle: "Viva Examination",
    programs: []
  },


  // =========================================================
  // WEEK 6
  // =========================================================
  {
    id: 6,
    title: "Week 06",
    subtitle: "Unit 2 — Object Oriented Programming",
    programs: [

      {
        title: "Student Information System",
        description:
          "Create a Student Information System using classes, objects, instance variables and methods.",
        code: `class StuinfoSys {

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
}`,
        output: null
      },

      {
        title: "Employee Information System",
        description:
          "Create an Employee Information System using a class, object, variables and methods.",
        code: `class EmpinfoSys {

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
}`,
        output: null
      },

      {
        title: "Book Details — Multiple Objects",
        description:
          "Create three Book objects and display their book ID, title and author.",
        code: `class BookDetails {

    int bookId;
    String title;
    String author;

    BookDetails(int id, String t, String a) {
        bookId = id;
        title = t;
        author = a;
    }

    void display() {
        System.out.println("Book ID : " + bookId);
        System.out.println("Title : " + title);
        System.out.println("Author : " + author);
        System.out.println();
    }

    public static void main(String[] args) {

        BookDetails b1 =
            new BookDetails(1, "Java", "James");

        BookDetails b2 =
            new BookDetails(2, "Python", "Guido");

        BookDetails b3 =
            new BookDetails(3, "C Programming", "Dennis");

        b1.display();
        b2.display();
        b3.display();
    }
}`,
        output: null
      },

      {
        title: "Array of Student Objects",
        description:
          "Create an array of five Student objects, accept their details and display them.",
        code: `import java.util.Scanner;

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

        System.out.println("\\nStudent Details");

        for (int i = 0; i < 5; i++) {
            s[i].display();
        }

        sc.close();
    }
}`,
        output: null
      },

      {
        title: "Reference Assignment",
        description:
          "Demonstrate assigning one object reference variable to another.",
        code: `class RefAssignment {

    String name;

    public static void main(String[] args) {

        RefAssignment s1 = new RefAssignment();

        s1.name = "Ravi";

        RefAssignment s2 = s1;

        s2.name = "Sathwika";

        System.out.println("s1 Name : " + s1.name);
        System.out.println("s2 Name : " + s2.name);
    }
}`,
        output: null
      },

      {
        title: "Comparing Object References",
        description:
          "Compare two object reference variables using the == operator.",
        code: `class EmpReference {

    String name;

    public static void main(String[] args) {

        EmpReference e1 = new EmpReference();

        e1.name = "Anil";

        EmpReference e2 = e1;

        System.out.println(
            "Are both references same? " + (e1 == e2)
        );
    }
}`,
        output: null
      },

      {
        title: "Calculator Using Methods",
        description:
          "Create methods for addition, subtraction, multiplication and division.",
        code: `class CalcMethods {

    int add(int a, int b) {
        return a + b;
    }

    int subtract(int a, int b) {
        return a - b;
    }

    int multiply(int a, int b) {
        return a * b;
    }

    double divide(int a, int b) {
        return (double) a / b;
    }

    public static void main(String[] args) {

        CalcMethods c = new CalcMethods();

        System.out.println("Addition = " + c.add(10, 5));
        System.out.println("Subtraction = " + c.subtract(10, 5));
        System.out.println("Multiplication = " + c.multiply(10, 5));
        System.out.println("Division = " + c.divide(10, 5));
    }
}`,
        output: null
      },

      {
        title: "Rectangle Operations",
        description:
          "Calculate the area and perimeter of a rectangle using a constructor and methods.",
        code: `class RectOperations {

    double length;
    double width;

    RectOperations(double l, double w) {
        length = l;
        width = w;
    }

    double area() {
        return length * width;
    }

    double perimeter() {
        return 2 * (length + width);
    }

    public static void main(String[] args) {

        RectOperations r =
            new RectOperations(10, 5);

        System.out.println("Area = " + r.area());
        System.out.println("Perimeter = " + r.perimeter());
    }
}`,
        output: null
      },

      {
        title: "Student Constructors",
        description:
          "Demonstrate default and parameterized constructors using Student objects.",
        code: `class StudentConstructors {

    int rollNo;
    String name;
    String branch;

    StudentConstructors() {
        rollNo = 101;
        name = "Sathwika";
        branch = "AIML";
    }

    StudentConstructors(int r, String n, String b) {
        rollNo = r;
        name = n;
        branch = b;
    }

    void display() {
        System.out.println("Roll Number : " + rollNo);
        System.out.println("Name : " + name);
        System.out.println("Branch : " + branch);
        System.out.println();
    }

    public static void main(String[] args) {

        StudentConstructors s1 =
            new StudentConstructors();

        StudentConstructors s2 =
            new StudentConstructors(102, "Rahul", "CSE");

        System.out.println("Default Constructor");
        s1.display();

        System.out.println("Parameterized Constructor");
        s2.display();
    }
}`,
        output: null
      },

      {
        title: "Constructor Overloading",
        description:
          "Demonstrate constructor overloading using constructors with different parameter lists.",
        code: `class ConstructorOverload {

    int accountNumber;
    String accountHolder;
    double balance;

    ConstructorOverload() {
        accountNumber = 1001;
        accountHolder = "Sathwika";
        balance = 0;
    }

    ConstructorOverload(int accNo, String holder) {
        accountNumber = accNo;
        accountHolder = holder;
        balance = 0;
    }

    ConstructorOverload(
        int accNo,
        String holder,
        double bal
    ) {
        accountNumber = accNo;
        accountHolder = holder;
        balance = bal;
    }

    void display() {
        System.out.println("Account Number : " + accountNumber);
        System.out.println("Account Holder : " + accountHolder);
        System.out.println("Balance : " + balance);
        System.out.println();
    }

    public static void main(String[] args) {

        ConstructorOverload b1 =
            new ConstructorOverload();

        ConstructorOverload b2 =
            new ConstructorOverload(1002, "Rahul");

        ConstructorOverload b3 =
            new ConstructorOverload(1003, "Anil", 5000);

        b1.display();
        b2.display();
        b3.display();
    }
}`,
        output: null
      },

      {
        title: "Using this Keyword",
        description:
          "Demonstrate the use of the this keyword for referring to the current object's variables.",
        code: `class ThisKeywordDemo {

    int rollNo;
    String name;

    ThisKeywordDemo(int rollNo, String name) {
        this.rollNo = rollNo;
        this.name = name;
    }

    void display() {
        System.out.println("Roll Number : " + rollNo);
        System.out.println("Name : " + name);
    }

    public static void main(String[] args) {

        ThisKeywordDemo s =
            new ThisKeywordDemo(101, "Sathwika");

        s.display();
    }
}`,
        output: null
      },

      {
        title: "Constructor Chaining",
        description:
          "Demonstrate constructor chaining using this() between constructors.",
        code: `class ConstructorChaining {

    ConstructorChaining() {
        this(101);
        System.out.println("Default Constructor");
    }

    ConstructorChaining(int rollNo) {
        this(rollNo, "Sathwika");
        System.out.println("Roll Number : " + rollNo);
    }

    ConstructorChaining(int rollNo, String name) {
        System.out.println("Roll Number : " + rollNo);
        System.out.println("Name : " + name);
    }

    public static void main(String[] args) {
        new ConstructorChaining();
    }
}`,
        output: null
      },

      {
        title: "Demonstrating Garbage Collection",
        description:
          "Demonstrate objects becoming eligible for garbage collection and request garbage collection using System.gc().",
        code: `class GarbageCollection {

    public static void main(String[] args) {

        GarbageCollection obj1 =
            new GarbageCollection();

        GarbageCollection obj2 =
            new GarbageCollection();

        obj1 = null;
        obj2 = null;

        System.gc();

        System.out.println(
            "Garbage Collection Requested"
        );
    }
}`,
        output: null
      },

      {
        title: "Object Eligibility for Garbage Collection",
        description:
          "Demonstrate different situations in which objects become eligible for garbage collection.",
        code: `class GarbageEligibility {

    public static void main(String[] args) {

        GarbageEligibility obj1 =
            new GarbageEligibility();

        GarbageEligibility obj2 =
            new GarbageEligibility();

        // obj1 becomes eligible
        obj1 = null;

        // Old object referenced by obj2
        // becomes eligible
        obj2 = new GarbageEligibility();

        // Anonymous object becomes eligible
        new GarbageEligibility();

        System.gc();

        System.out.println(
            "Objects are eligible for Garbage Collection"
        );
    }
}`,
        output: null
      },

      {
        title: "Method Overloading",
        description:
          "Demonstrate method overloading using methods with different parameter lists.",
        code: `class ArithmeticOverload {

    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    double add(double a, double b) {
        return a + b;
    }

    public static void main(String[] args) {

        ArithmeticOverload obj =
            new ArithmeticOverload();

        System.out.println(
            "Sum = " + obj.add(10, 20)
        );

        System.out.println(
            "Sum = " + obj.add(10, 20, 30)
        );

        System.out.println(
            "Sum = " + obj.add(10.5, 20.5)
        );
    }
}`,
        output: null
      },

      {
        title: "Overloading Area Methods",
        description:
          "Calculate the area of a circle, rectangle and square using overloaded methods.",
        code: `class AreaOverload {

    double area(double radius) {
        return 3.14 * radius * radius;
    }

    int area(int length, int breadth) {
        return length * breadth;
    }

    int area(int side) {
        return side * side;
    }

    public static void main(String[] args) {

        AreaOverload obj =
            new AreaOverload();

        System.out.println(
            "Area of Circle : " + obj.area(7.0)
        );

        System.out.println(
            "Area of Rectangle : " + obj.area(10, 5)
        );

        System.out.println(
            "Area of Square : " + obj.area(4)
        );
    }
}`,
        output: null
      },

      {
        title: "Passing Student Object",
        description:
          "Pass a Student object to a method and display its details.",
        code: `class PassingStudentObj {

    int rollNo;
    String name;
    String branch;

    PassingStudentObj(
        int rollNo,
        String name,
        String branch
    ) {
        this.rollNo = rollNo;
        this.name = name;
        this.branch = branch;
    }

    static void displayStudent(PassingStudentObj s) {

        System.out.println("Roll Number : " + s.rollNo);
        System.out.println("Name : " + s.name);
        System.out.println("Branch : " + s.branch);
    }

    public static void main(String[] args) {

        PassingStudentObj student =
            new PassingStudentObj(
                101,
                "Sathwika",
                "AIML"
            );

        displayStudent(student);
    }
}`,
        output: null
      },

      {
        title: "Comparing Employee Salaries",
        description:
          "Compare the salaries of two Employee objects and display the employee with the higher salary.",
        code: `class CompareEmpSalary {

    int empId;
    String name;
    double salary;

    CompareEmpSalary(
        int empId,
        String name,
        double salary
    ) {
        this.empId = empId;
        this.name = name;
        this.salary = salary;
    }

    static void compareSalary(
        CompareEmpSalary e1,
        CompareEmpSalary e2
    ) {

        if (e1.salary > e2.salary) {

            System.out.println(
                "Higher Salary Employee : " + e1.name
            );

            System.out.println(
                "Salary : " + e1.salary
            );

        } else if (e2.salary > e1.salary) {

            System.out.println(
                "Higher Salary Employee : " + e2.name
            );

            System.out.println(
                "Salary : " + e2.salary
            );

        } else {

            System.out.println(
                "Both employees have equal salary."
            );
        }
    }

    public static void main(String[] args) {

        CompareEmpSalary e1 =
            new CompareEmpSalary(
                101,
                "Rahul",
                35000
            );

        CompareEmpSalary e2 =
            new CompareEmpSalary(
                102,
                "Anil",
                45000
            );

        compareSalary(e1, e2);
    }
}`,
        output: null
      },

      {
        title: "Returning a Student Object",
        description:
          "Create a Student object inside a method and return the object to the caller.",
        code: `class ReturnStudentObj {

    int rollNo;
    String name;
    String branch;

    ReturnStudentObj(
        int rollNo,
        String name,
        String branch
    ) {
        this.rollNo = rollNo;
        this.name = name;
        this.branch = branch;
    }

    static ReturnStudentObj createStudent() {

        ReturnStudentObj s =
            new ReturnStudentObj(
                101,
                "Sathwika",
                "AIML"
            );

        return s;
    }

    void display() {
        System.out.println("Roll Number : " + rollNo);
        System.out.println("Name : " + name);
        System.out.println("Branch : " + branch);
    }

    public static void main(String[] args) {

        ReturnStudentObj student =
            createStudent();

        student.display();
    }
}`,
        output: null
      },

      {
        title: "Returning a Bank Account Object",
        description:
          "Pass a Bank Account object to a method, update its balance and return the object.",
        code: `class ReturnBankObj {

    int accountNumber;
    String accountHolder;
    double balance;

    ReturnBankObj(
        int accountNumber,
        String accountHolder,
        double balance
    ) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    static ReturnBankObj updateBalance(
        ReturnBankObj account,
        double amount
    ) {
        account.balance =
            account.balance + amount;

        return account;
    }

    void display() {
        System.out.println(
            "Account Number : " + accountNumber
        );

        System.out.println(
            "Account Holder : " + accountHolder
        );

        System.out.println(
            "Balance : " + balance
        );
    }

    public static void main(String[] args) {

        ReturnBankObj account =
            new ReturnBankObj(
                1001,
                "Sathwika",
                5000
            );

        account =
            updateBalance(account, 2000);

        account.display();
    }
}`,
        output: null
      },

      {
        title: "Static Variable",
        description:
          "Demonstrate a static variable by counting the number of Student objects created.",
        code: `class StaticStudentCount {

    int rollNo;
    String name;

    static int count = 0;

    StaticStudentCount(
        int rollNo,
        String name
    ) {
        this.rollNo = rollNo;
        this.name = name;
        count++;
    }

    void display() {
        System.out.println("Roll Number : " + rollNo);
        System.out.println("Name : " + name);
    }

    public static void main(String[] args) {

        StaticStudentCount s1 =
            new StaticStudentCount(101, "Sathwika");

        StaticStudentCount s2 =
            new StaticStudentCount(102, "Rahul");

        StaticStudentCount s3 =
            new StaticStudentCount(103, "Anil");

        s1.display();
        System.out.println();

        s2.display();
        System.out.println();

        s3.display();

        System.out.println(
            "\\nTotal Students : " + count
        );
    }
}`,
        output: null
      },

      {
        title: "Static Methods",
        description:
          "Demonstrate static methods by calculating square, cube and factorial.",
        code: `class StaticUtility {

    static int square(int n) {
        return n * n;
    }

    static int cube(int n) {
        return n * n * n;
    }

    static long factorial(int n) {

        long fact = 1;

        for (int i = 1; i <= n; i++) {
            fact = fact * i;
        }

        return fact;
    }

    public static void main(String[] args) {

        int n = 5;

        System.out.println(
            "Square : " + square(n)
        );

        System.out.println(
            "Cube : " + cube(n)
        );

        System.out.println(
            "Factorial : " + factorial(n)
        );
    }
}`,
        output: null
      },

      {
        title: "Final Keyword",
        description:
          "Demonstrate final variables, final methods and final classes.",
        code: `class FinalKeywordDemo {

    final int MAX_MARKS = 100;

    final void display() {

        System.out.println(
            "Final method executed."
        );

        System.out.println(
            "Maximum Marks : " + MAX_MARKS
        );
    }

    final class FinalClass {

        void show() {
            System.out.println(
                "This is a final class."
            );
        }
    }

    public static void main(String[] args) {

        FinalKeywordDemo obj =
            new FinalKeywordDemo();

        obj.display();

        FinalKeywordDemo.FinalClass f =
            obj.new FinalClass();

        f.show();
    }
}`,
        output: null
      },

      {
        title: "Blank Final Variable",
        description:
          "Demonstrate a blank final variable initialized through a constructor.",
        code: `class BlankFinalEmp {

    final int employeeId;
    String name;

    BlankFinalEmp(
        int employeeId,
        String name
    ) {
        this.employeeId = employeeId;
        this.name = name;
    }

    void display() {

        System.out.println(
            "Employee ID : " + employeeId
        );

        System.out.println(
            "Name : " + name
        );
    }

    public static void main(String[] args) {

        BlankFinalEmp e1 =
            new BlankFinalEmp(
                1001,
                "Sathwika"
            );

        BlankFinalEmp e2 =
            new BlankFinalEmp(
                1002,
                "Rahul"
            );

        e1.display();

        System.out.println();

        e2.display();
    }
}`,
        output: null
      },

      {
        title: "College and Department — Nested Class",
        description:
          "Demonstrate a static nested Department class inside a College class.",
        code: `class CollegeDeptNested {

    String collegeName =
        "ABC Engineering College";

    static class Department {

        String departmentName;
        String hodName;

        Department(
            String departmentName,
            String hodName
        ) {
            this.departmentName = departmentName;
            this.hodName = hodName;
        }

        void display() {

            System.out.println(
                "Department : " + departmentName
            );

            System.out.println(
                "HOD : " + hodName
            );
        }
    }

    public static void main(String[] args) {

        CollegeDeptNested college =
            new CollegeDeptNested();

        CollegeDeptNested.Department dept =
            new CollegeDeptNested.Department(
                "AIML",
                "Dr. Kumar"
            );

        System.out.println(
            "College : " + college.collegeName
        );

        dept.display();
    }
}`,
        output: null
      },

      {
        title: "Employee Address — Nested Class",
        description:
          "Demonstrate a static nested Address class associated with an Employee.",
        code: `class EmployeeAddressNested {

    String employeeName;
    int employeeId;

    EmployeeAddressNested(
        String employeeName,
        int employeeId
    ) {
        this.employeeName = employeeName;
        this.employeeId = employeeId;
    }

    static class Address {

        String city;
        String state;

        Address(String city, String state) {
            this.city = city;
            this.state = state;
        }

        void display() {

            System.out.println(
                "City : " + city
            );

            System.out.println(
                "State : " + state
            );
        }
    }

    public static void main(String[] args) {

        EmployeeAddressNested emp =
            new EmployeeAddressNested(
                "Sathwika",
                1001
            );

        EmployeeAddressNested.Address address =
            new EmployeeAddressNested.Address(
                "Hyderabad",
                "Telangana"
            );

        System.out.println(
            "Employee ID : " + emp.employeeId
        );

        System.out.println(
            "Employee Name : " + emp.employeeName
        );

        address.display();
    }
}`,
        output: null
      },

      {
        title: "Student Address — Inner Class",
        description:
          "Demonstrate a non-static inner Address class inside StudentAddressInner.",
        code: `class StudentAddressInner {

    int rollNo;
    String name;

    StudentAddressInner(
        int rollNo,
        String name
    ) {
        this.rollNo = rollNo;
        this.name = name;
    }

    class Address {

        String city;
        String state;

        Address(String city, String state) {
            this.city = city;
            this.state = state;
        }

        void display() {

            System.out.println(
                "City : " + city
            );

            System.out.println(
                "State : " + state
            );
        }
    }

    public static void main(String[] args) {

        StudentAddressInner student =
            new StudentAddressInner(
                101,
                "Sathwika"
            );

        StudentAddressInner.Address address =
            student.new Address(
                "Hyderabad",
                "Telangana"
            );

        System.out.println(
            "Roll Number : " + student.rollNo
        );

        System.out.println(
            "Name : " + student.name
        );

        address.display();
    }
}`,
        output: null
      },

      {
        title: "Library Management — Inner Class",
        description:
          "Demonstrate an inner Book class inside a LibraryBookInner class.",
        code: `class LibraryBookInner {

    String libraryName =
        "Central Library";

    class Book {

        int bookId;
        String title;
        String author;

        Book(
            int bookId,
            String title,
            String author
        ) {
            this.bookId = bookId;
            this.title = title;
            this.author = author;
        }

        void display() {

            System.out.println(
                "Library : " + libraryName
            );

            System.out.println(
                "Book ID : " + bookId
            );

            System.out.println(
                "Title : " + title
            );

            System.out.println(
                "Author : " + author
            );
        }
    }

    public static void main(String[] args) {

        LibraryBookInner library =
            new LibraryBookInner();

        LibraryBookInner.Book book =
            library.new Book(
                101,
                "Java Programming",
                "James Gosling"
            );

        book.display();
    }
}`
        ,
        output: null
      }
    ]
  },


  // =========================================================
  
];
const generatedOutputs = {};
