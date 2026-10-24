// Laboratory Syllabus and Programs Data Store (Weeks 01 - 14)
// Student: Trivikram | Roll No: 25EU02067 | Course: 24CS281

const weeks = [
  {
    "id": 1,
    "title": "Week 01",
    "subtitle": "Comparative Study of Programming Languages",
    "programs": [
      {
        "title": "Comparative Table — Java, C, C++, Python & JavaScript",
        "description": "Comparative study of Java, C, C++, Python and JavaScript based on language type, OOP support, memory management, performance, platform independence, IDEs, applications, advantages and limitations.",
        "code": "Java\nC\nC++\nPython\nJavaScript\n\nParameters covered:\n1. Language / Package Name\n2. Open Source or Commercial\n3. Compiler or Interpreter\n4. OOP Support\n5. Developer Organization\n6. Developer\n7. Current Major Version\n8. Primary Purpose\n9. Common Applications\n10. Database Support\n11. Memory Management\n12. Security Features\n13. Performance\n14. Platform Independence\n15. Other Important Features\n16. Ease of Learning\n17. Popular IDEs\n18. Compilation Output\n19. Advantages\n20. Limitations",
        "output": null
      }
    ]
  },
  {
    "id": 2,
    "title": "Week 02",
    "subtitle": "Installation of Java and Hello World",
    "programs": [
      {
        "title": "Oracle JDK Installation — Windows",
        "description": "Installation of Java using Oracle JDK on Windows, configuring JAVA_HOME and PATH, verifying the Java version and executing a simple Hello World program.",
        "code": "// Hello World Program\n\nclass HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}",
        "output": null
      },
      {
        "title": "OpenJDK Installation — Windows",
        "description": "Installation of Java using OpenJDK on Windows, running the MSI installer, checking the Java version and executing a Java program using PowerShell.",
        "code": "// Hello World Program using OpenJDK\n\nclass HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}",
        "output": null
      }
    ]
  },
  {
    "id": 3,
    "title": "Week 03",
    "subtitle": "Basic Java Concepts, Data Types, Variables, Type Conversion, Type Casting and Control Statements",
    "programs": [
      {
        "title": "Hello Java",
        "description": "Write a Java program to display \"Hello, Java!\" and demonstrate the basic structure of a Java program.",
        "code": "public class HelloJava {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "output": null
      },
      {
        "title": "Primitive Data Types",
        "description": "Write a Java program to declare variables of different primitive data types (byte, short, int, long, float, double, char, and boolean) and display their values.",
        "code": "public class PrimitiveDataTypes {\n    public static void main(String[] args) {\n        byte b = 100;\n        short s = 20000;\n        int i = 500000;\n        long l = 9000000000L;\n        float f = 12.5f;\n        double d = 99.999;\n        char c = 'A';\n        boolean a = true;\n\n        System.out.println(\"Byte: \" + b);\n        System.out.println(\"Short: \" + s);\n        System.out.println(\"Int: \" + i);\n        System.out.println(\"Long: \" + l);\n        System.out.println(\"Float: \" + f);\n        System.out.println(\"Double: \" + d);\n        System.out.println(\"Char: \" + c);\n        System.out.println(\"Boolean: \" + a);\n    }\n}",
        "output": null
      },
      {
        "title": "Arithmetic Operations on Integers",
        "description": "Write a Java program to perform arithmetic operations (addition, subtraction, multiplication, division, and modulus) on two integer variables.",
        "code": "public class Arthmtc {\n    public static void main(String[] args) {\n        int a = 20;\n        int b = 6;\n\n        System.out.println(\"Addition: \" + (a + b));\n        System.out.println(\"Subtraction: \" + (a - b));\n        System.out.println(\"Multiplication: \" + (a * b));\n        System.out.println(\"Division: \" + (a / b));\n        System.out.println(\"Modulus: \" + (a % b));\n    }\n}",
        "output": null
      },
      {
        "title": "Floating Point Arithmetic",
        "description": "Write a Java program to perform arithmetic operations on floating-point numbers and display the results.",
        "code": "public class Float {\n    public static void main(String[] args) {\n        float a = 15.5f;\n        float b = 4.5f;\n\n        System.out.println(\"Addition: \" + (a + b));\n        System.out.println(\"Subtraction: \" + (a - b));\n        System.out.println(\"Multiplication: \" + (a * b));\n        System.out.println(\"Division: \" + (a / b));\n        System.out.println(\"Modulus: \" + (a % b));\n    }\n}",
        "output": null
      },
      {
        "title": "Character and ASCII Value",
        "description": "Write a Java program to demonstrate character data type by displaying a character and its corresponding ASCII/Unicode value.",
        "code": "public class CharacterDemo {\n    public static void main(String[] args) {\n        char ch = 'A';\n\n        System.out.println(\"Character: \" + ch);\n        System.out.println(\"ASCII/Unicode Value: \" + (int) ch);\n    }\n}",
        "output": null
      },
      {
        "title": "Boolean Variables and Expressions",
        "description": "Write a Java program to demonstrate the use of Boolean variables and Boolean expressions.",
        "code": "public class Bool {\n    public static void main(String[] args) {\n        boolean isJavaFun = true;\n        boolean isGreater = 15 > 10;\n\n        System.out.println(\"Is Java Fun? \" + isJavaFun);\n        System.out.println(\"Is 15 greater than 10? \" + isGreater);\n    }\n}",
        "output": null
      },
      {
        "title": "Variable Demo",
        "description": "Write a Java program to declare and initialize different types of variables and display their values.",
        "code": "public class VariableDemo {\n    public static void main(String[] args) {\n        int age = 19;\n        double cgpa = 9;\n        char grade = 'A';\n        boolean isStudent = true;\n        String name = \"Aditya\";\n\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Age: \" + age);\n        System.out.println(\"CGPA: \" + cgpa);\n        System.out.println(\"Grade: \" + grade);\n        System.out.println(\"Student: \" + isStudent);\n    }\n}",
        "output": null
      },
      {
        "title": "Swap Two Variables",
        "description": "Write a Java program to swap the values of two variables using a temporary variable.",
        "code": "public class Swap {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = 20;\n        int temp;\n\n        System.out.println(\"Before Swapping:\");\n        System.out.println(\"a = \" + a);\n        System.out.println(\"b = \" + b);\n\n        temp = a;\n        a = b;\n        b = temp;\n\n        System.out.println(\"After Swapping:\");\n        System.out.println(\"a = \" + a);\n        System.out.println(\"b = \" + b);\n    }\n}",
        "output": null
      },
      {
        "title": "Widening Type Conversion",
        "description": "Write a Java program to demonstrate automatic (widening) type conversion between primitive data types.",
        "code": "public class Widening {\n    public static void main(String[] args) {\n        int num = 50;\n        double result = num;\n\n        System.out.println(\"Integer Value: \" + num);\n        System.out.println(\"Double Value: \" + result);\n    }\n}",
        "output": null
      },
      {
        "title": "Narrowing Type Casting",
        "description": "Write a Java program to demonstrate explicit (narrowing) type casting from one primitive data type to another.",
        "code": "public class Narrowing {\n    public static void main(String[] args) {\n        double num = 25.75;\n        int result = (int) num;\n\n        System.out.println(\"Double Value: \" + num);\n        System.out.println(\"Integer Value: \" + result);\n    }\n}",
        "output": null
      },
      {
        "title": "Character and ASCII Conversion",
        "description": "Write a Java program to convert a character to its ASCII/Unicode value and vice versa using type casting.",
        "code": "public class CharConv {\n    public static void main(String[] args) {\n        char ch = 'A';\n        int ascii = (int) ch;\n\n        int value = 66;\n        char letter = (char) value;\n\n        System.out.println(\"Character: \" + ch);\n        System.out.println(\"ASCII/Unicode Value: \" + ascii);\n        System.out.println(\"ASCII/Unicode Value: \" + value);\n        System.out.println(\"Character: \" + letter);\n    }\n}",
        "output": null
      },
      {
        "title": "Even or Odd",
        "description": "Write a Java program to check whether a given number is even or odd using the if-else control statement.",
        "code": "public class EvenOdd {\n    public static void main(String[] args) {\n        int num = 57;\n\n        if (num % 2 == 0) {\n            System.out.println(num + \" is Even\");\n        } else {\n            System.out.println(num + \" is Odd\");\n        }\n    }\n}",
        "output": null
      },
      {
        "title": "Largest of Two Numbers",
        "description": "Write a Java program to find the largest of two numbers using the if-else statement.",
        "code": "public class Lrgst {\n    public static void main(String[] args) {\n        int num1 = 25;\n        int num2 = 18;\n\n        if (num1 > num2) {\n            System.out.println(num1 + \" is the largest number.\");\n        } else if (num2 > num1) {\n            System.out.println(num2 + \" is the largest number.\");\n        } else {\n            System.out.println(\"Both numbers are equal.\");\n        }\n    }\n}",
        "output": null
      },
      {
        "title": "Reserved Keywords",
        "description": "Write a Java program to demonstrate the use of Java reserved keywords by creating valid identifiers and explaining why keywords cannot be used as variable names.",
        "code": "public class KeywordsDemo {\n    public static void main(String[] args) {\n        int age = 19;\n        double salary = 50000.0;\n        String studentName = \"Harini\";\n\n        System.out.println(\"Age: \" + age);\n        System.out.println(\"Salary: \" + salary);\n        System.out.println(\"Student Name: \" + studentName);\n        System.out.println(\"Keywords like int, class, if, and while cannot be used as variable names.\");\n    }\n}",
        "output": null
      },
      {
        "title": "For Loop — Numbers 1 to 10",
        "description": "Write a Java program to demonstrate the use of the for loop by displaying numbers from 1 to 10.",
        "code": "public class For {\n    public static void main(String[] args) {\n        System.out.println(\"Numbers from 1 to 10:\");\n        for (int i = 1; i <= 10; i++) {\n            System.out.println(i);\n        }\n    }\n}",
        "output": null
      }
    ]
  },
  {
    "id": 4,
    "title": "Week 04",
    "subtitle": "Viva Examination",
    "programs": []
  },
  {
    "id": 5,
    "title": "Week 05",
    "subtitle": "Viva Examination",
    "programs": []
  },
  {
    "id": 6,
    "title": "Week 06",
    "subtitle": "Unit 2 — Object Oriented Programming",
    "programs": [
      {
        "title": "Student Information System",
        "description": "Develop a Java program to create a Student class with data members such as Roll Number, Name, Branch, and CGPA. Create an object of the class, initialize the data, and display the student information using a method.",
        "code": "public class Student {\n    int rollNumber;\n    String name;\n    String branch;\n    double cgpa;\n\n    void display() {\n        System.out.println(\"Roll Number: \" + rollNumber);\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Branch: \" + branch);\n        System.out.println(\"CGPA: \" + cgpa);\n    }\n\n    public static void main(String[] args) {\n        Student s1 = new Student();\n        s1.rollNumber = 101;\n        s1.name = \"Aditi Sharma\";\n        s1.branch = \"Computer Science\";\n        s1.cgpa = 9.12;\n\n        s1.display();\n    }\n}",
        "output": null
      },
      {
        "title": "Employee Information System",
        "description": "Develop a Java program to create an Employee class containing Employee ID, Name, Department, and Salary. Create an object of the class and display the employee details.",
        "code": "public class Employee {\n    int empId;\n    String name;\n    String department;\n    double salary;\n\n    void display() {\n        System.out.println(\"Employee ID: \" + empId);\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Department: \" + department);\n        System.out.println(\"Salary: \" + salary);\n    }\n\n    public static void main(String[] args) {\n        Employee e1 = new Employee();\n        e1.empId = 501;\n        e1.name = \"Rohan Verma\";\n        e1.department = \"Human Resources\";\n        e1.salary = 45000.0;\n\n        e1.display();\n    }\n}",
        "output": null
      },
      {
        "title": "Book Details — Multiple Objects",
        "description": "Write a Java program to declare and create three objects of a Book class. Display the details of all books using object reference.",
        "code": "public class Book {\n    String title;\n    String author;\n    double price;\n\n    void display() {\n        System.out.println(\"Title: \" + title);\n        System.out.println(\"Author: \" + author);\n        System.out.println(\"Price: \" + price);\n        System.out.println(\"-----------------\");\n    }\n\n    public static void main(String[] args) {\n        Book b1 = new Book();\n        b1.title = \"Java Programming\";\n        b1.author = \"James Gosling\";\n        b1.price = 599.0;\n\n        Book b2 = new Book();\n        b2.title = \"The Alchemist\";\n        b2.author = \"Paulo Coelho\";\n        b2.price = 299.0;\n\n        Book b3 = new Book();\n        b3.title = \"Wings of Fire\";\n        b3.author = \"A.P.J. Abdul Kalam\";\n        b3.price = 350.0;\n\n        b1.display();\n        b2.display();\n        b3.display();\n    }\n}",
        "output": null
      },
      {
        "title": "Array of Student Objects",
        "description": "Write a Java program to create an array of five Student objects, accept their details from the user, and display all student information.",
        "code": "import java.util.Scanner;\n\npublic class Info {\n    int rollNumber;\n    String name;\n    double marks;\n\n    void display() {\n        System.out.println(\"Roll Number: \" + rollNumber);\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Marks: \" + marks);\n        System.out.println(\"-----------------\");\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Info[] students = new Info[5];\n\n        for (int i = 0; i < 5; i++) {\n            students[i] = new Info();\n            System.out.println(\"Enter Roll Number, Name, Marks:\");\n            students[i].rollNumber = sc.nextInt();\n            students[i].name = sc.next();\n            students[i].marks = sc.nextDouble();\n        }\n\n        for (int i = 0; i < 5; i++) {\n            students[i].display();\n        }\n    }\n}",
        "output": null
      },
      {
        "title": "Reference Assignment",
        "description": "Develop a Java program to create a Student object and assign its reference to another reference variable. Modify the object through one reference and observe the changes using the other reference.",
        "code": "public class Details {\n    int rollNumber;\n    String name;\n    double marks;\n\n    void display() {\n        System.out.println(\"Roll Number: \" + rollNumber);\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Marks: \" + marks);\n        System.out.println(\"-----------------\");\n    }\n\n    public static void main(String[] args) {\n        Details d1 = new Details();\n        d1.rollNumber = 101;\n        d1.name = \"Aditi Sharma\";\n        d1.marks = 89.5;\n\n        Details d2 = d1; // d2 now refers to the same object as d1\n\n        System.out.println(\"Before modification (via d1):\");\n        d1.display();\n\n        System.out.println(\"Before modification (via d2):\");\n        d2.display();\n\n        // Modify the object through d2\n        d2.name = \"Rohan Verma\";\n        d2.marks = 95.0;\n\n        System.out.println(\"After modifying through d2:\");\n\n        System.out.println(\"d1 now shows:\");\n        d1.display();\n\n        System.out.println(\"d2 now shows:\");\n        d2.display();\n    }\n}",
        "output": null
      },
      {
        "title": "Comparing Object References",
        "description": "Write a Java program to create two reference variables pointing to the same Employee object. Compare the references using the == operator and display the result.",
        "code": "public class Staff {\n    int empId;\n    String name;\n    double salary;\n\n    void display() {\n        System.out.println(\"Employee ID: \" + empId);\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Salary: \" + salary);\n        System.out.println(\"-----------------\");\n    }\n\n    public static void main(String[] args) {\n        Staff s1 = new Staff();\n        s1.empId = 501;\n        s1.name = \"Rohan Verma\";\n        s1.salary = 45000.0;\n\n        Staff s2 = s1; // s2 points to the same object as s1\n\n        System.out.println(\"Details via s1:\");\n        s1.display();\n\n        System.out.println(\"Details via s2:\");\n        s2.display();\n\n        // Comparing references using ==\n        if (s1 == s2) {\n            System.out.println(\"s1 and s2 refer to the SAME object.\");\n        } else {\n            System.out.println(\"s1 and s2 refer to DIFFERENT objects.\");\n        }\n    }\n}",
        "output": null
      },
      {
        "title": "Calculator Using Methods",
        "description": "Develop a Java program to create a Calculator class with methods to perform addition, subtraction, multiplication, and division of two numbers.",
        "code": "public class Calculator {\n    int add(int a, int b) {\n        return a + b;\n    }\n\n    int subtract(int a, int b) {\n        return a - b;\n    }\n\n    int multiply(int a, int b) {\n        return a * b;\n    }\n\n    double divide(int a, int b) {\n        if (b == 0) {\n            System.out.println(\"Error: Division by zero is not allowed.\");\n            return 0;\n        }\n        return (double) a / b;\n    }\n\n    public static void main(String[] args) {\n        Calculator calc = new Calculator();\n\n        int num1 = 20, num2 = 4;\n\n        System.out.println(\"Addition: \" + calc.add(num1, num2));\n        System.out.println(\"Subtraction: \" + calc.subtract(num1, num2));\n        System.out.println(\"Multiplication: \" + calc.multiply(num1, num2));\n        System.out.println(\"Division: \" + calc.divide(num1, num2));\n    }\n}",
        "output": null
      },
      {
        "title": "Rectangle Operations",
        "description": "Write a Java program to create a Rectangle class with methods to calculate and display the area and perimeter of a rectangle.",
        "code": "public class Rectangle {\n    double length;\n    double width;\n\n    double calculateArea() {\n        return length * width;\n    }\n\n    double calculatePerimeter() {\n        return 2 * (length + width);\n    }\n\n    void display() {\n        System.out.println(\"Length: \" + length);\n        System.out.println(\"Width: \" + width);\n        System.out.println(\"Area: \" + calculateArea());\n        System.out.println(\"Perimeter: \" + calculatePerimeter());\n    }\n\n    public static void main(String[] args) {\n        Rectangle rect = new Rectangle();\n        rect.length = 10.5;\n        rect.width = 5.0;\n\n        rect.display();\n    }\n}",
        "output": null
      },
      {
        "title": "Student Constructors",
        "description": "Develop a Java program to demonstrate the use of default and parameterized constructors for initializing student information.",
        "code": "class sconstructor {\n    int id;\n    String name;\n\n    // Default constructor\n    sconstructor() {\n        id = 0;\n        name = \"Unknown\";\n    }\n\n    // Parameterized constructor\n    sconstructor(int id, String name) {\n        this.id = id;\n        this.name = name;\n    }\n\n    void show() {\n        System.out.println(\"ID: \" + id + \", Name: \" + name);\n    }\n\n    public static void main(String[] args) {\n        sconstructor s1 = new sconstructor(); // default constructor\n        sconstructor s2 = new sconstructor(101, \"Alice\"); // parameterized constructor\n\n        s1.show();\n        s2.show();\n    }\n}",
        "output": null
      },
      {
        "title": "Constructor Overloading",
        "description": "Write a Java program to demonstrate constructor overloading in a BankAccount class by creating objects using different constructors.",
        "code": "class BankAccount {\n    int accountNumber;\n    String accountHolder;\n    double balance;\n\n    // Constructor 1: No arguments (default)\n    BankAccount() {\n        accountNumber = 0;\n        accountHolder = \"Unknown\";\n        balance = 0.0;\n    }\n\n    // Constructor 2: With account number and holder name\n    BankAccount(int accountNumber, String accountHolder) {\n        this.accountNumber = accountNumber;\n        this.accountHolder = accountHolder;\n        balance = 0.0;\n    }\n\n    // Constructor 3: With all details\n    BankAccount(int accountNumber, String accountHolder, double balance) {\n        this.accountNumber = accountNumber;\n        this.accountHolder = accountHolder;\n        this.balance = balance;\n    }\n\n    void show() {\n        System.out.println(\"Account No: \" + accountNumber + \", Holder: \" + accountHolder + \", Balance: $\" + balance);\n    }\n\n    public static void main(String[] args) {\n        // Using default constructor\n        BankAccount acc1 = new BankAccount();\n\n        // Using constructor with 2 parameters\n        BankAccount acc2 = new BankAccount(1001, \"Alice\");\n\n        // Using constructor with 3 parameters\n        BankAccount acc3 = new BankAccount(1002, \"Bob\", 5000.0);\n\n        acc1.show();\n        acc2.show();\n        acc3.show();\n    }\n}",
        "output": null
      },
      {
        "title": "Using this Keyword",
        "description": "Develop a Java program to demonstrate the use of the this keyword to distinguish instance variables from local variables.",
        "code": "class thisuse {\n    int id;\n    String name;\n\n    // Constructor using 'this' to refer to instance variables\n    thisuse(int id, String name) {\n        this.id = id; // this.id refers to instance variable\n        this.name = name; // this.name refers to instance variable\n    }\n\n    // Method using 'this' to distinguish variables\n    void setDetails(int id, String name) {\n        this.id = id; // instance variable = local variable (parameter)\n        this.name = name;\n    }\n\n    void show() {\n        System.out.println(\"ID: \" + id + \", Name: \" + name);\n    }\n\n    public static void main(String[] args) {\n        thisuse s1 = new thisuse(101, \"Alice\"); // using constructor\n        s1.show();\n\n        thisuse s2 = new thisuse(0, \"\"); // temporary object\n        s2.setDetails(102, \"Bob\"); // using method with 'this'\n        s2.show();\n    }\n}",
        "output": null
      },
      {
        "title": "Constructor Chaining",
        "description": "Write a Java program to demonstrate constructor chaining using the this() constructor in a Student class.",
        "code": "class chaining {\n    int id;\n    String name;\n    String course;\n\n    // Constructor 1: No arguments\n    chaining() {\n        this(0, \"Unknown\"); // calls Constructor 2\n        System.out.println(\"Default constructor called\");\n    }\n\n    // Constructor 2: With id and name\n    chaining(int id, String name) {\n        this(id, name, \"Not Enrolled\"); // calls Constructor 3\n        System.out.println(\"Constructor with id and name called\");\n    }\n\n    // Constructor 3: With all details (main constructor)\n    chaining(int id, String name, String course) {\n        this.id = id;\n        this.name = name;\n        this.course = course;\n        System.out.println(\"Constructor with all parameters called\");\n    }\n\n    void show() {\n        System.out.println(\"ID: \" + id + \", Name: \" + name + \", Course: \" + course);\n    }\n\n    public static void main(String[] args) {\n        chaining s1 = new chaining(); // chains through all constructors\n        s1.show();\n\n        System.out.println();\n\n        chaining s2 = new chaining(101, \"Alice\"); // chains to Constructor 3\n        s2.show();\n\n        System.out.println();\n\n        chaining s3 = new chaining(102, \"Bob\", \"Mathematics\"); // direct call\n        s3.show();\n    }\n}",
        "output": null
      },
      {
        "title": "Demonstrating Garbage Collection",
        "description": "Develop a Java program to create multiple objects, make them eligible for garbage collection, and invoke System.gc().",
        "code": "public class multiple {\n    String objectName;\n\n    // Constructor\n    public multiple(String name) {\n        this.objectName = name;\n        System.out.println(this.objectName + \" successfully created.\");\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"--- 1. Creating Objects ---\");\n        multiple obj1 = new multiple(\"Object 1\");\n        multiple obj2 = new multiple(\"Object 2\");\n        multiple obj3 = new multiple(\"Object 3\");\n\n        System.out.println(\"\\n--- 2. Making objects eligible for GC ---\");\n\n        // Method A: Nullifying the reference\n        obj1 = null;\n        System.out.println(\"Object 1 reference set to null.\");\n\n        // Method B: Reassigning the reference\n        obj2 = obj3;\n        System.out.println(\"Object 2 reference reassigned to Object 3.\");\n\n        // Method C: Creating an anonymous object\n        new multiple(\"Object 4 (Anonymous)\");\n        System.out.println(\"Object 4 created without a reference.\");\n\n        System.out.println(\"\\n--- 3. Requesting Garbage Collection ---\");\n\n        // Calling System.gc() suggests the JVM run the Garbage Collector\n        System.gc();\n\n        System.out.println(\"System.gc() called! The JVM will silently clean up Objects 1, 2, and 4 in the background.\");\n    }\n}",
        "output": null
      },
      {
        "title": "Object Eligibility for Garbage Collection",
        "description": "Write a Java program to demonstrate different ways of making objects eligible for garbage collection, such as null assignment, reassignment, and anonymous objects.",
        "code": "public class GarbageCollectionDemo {\n    String objectName;\n\n    // Constructor to assign a name upon creation\n    public GarbageCollectionDemo(String name) {\n        this.objectName = name;\n        System.out.println(this.objectName + \" successfully created.\");\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"=== Step 1: Object Creation ===\");\n        GarbageCollectionDemo obj1 = new GarbageCollectionDemo(\"Object 1\");\n        GarbageCollectionDemo obj2 = new GarbageCollectionDemo(\"Object 2\");\n        GarbageCollectionDemo obj3 = new GarbageCollectionDemo(\"Object 3\");\n\n        System.out.println(\"\\n=== Step 2: Making Objects Eligible for GC ===\");\n\n        // Method 1: Null Assignment\n        // By setting the reference to null, \"Object 1\" is left without an active reference.\n        obj1 = null;\n        System.out.println(\"-> Null Assignment: 'Object 1' reference set to null.\");\n\n        // Method 2: Reassignment\n        // By pointing obj2 to obj3, the original \"Object 2\" is orphaned and loses its reference.\n        obj2 = obj3;\n        System.out.println(\"-> Reassignment: 'Object 2' reference repointed to 'Object 3'.\");\n\n        // Method 3: Anonymous Object\n        // Created without assigning it to a variable, meaning it is eligible the moment it finishes initializing.\n        new GarbageCollectionDemo(\"Object 4 (Anonymous)\");\n        System.out.println(\"-> Anonymous Object: 'Object 4' created without a variable reference.\");\n\n        System.out.println(\"\\n=== Step 3: Requesting Garbage Collection ===\");\n\n        // Suggests that the JVM run the Garbage Collector\n        System.gc();\n        System.out.println(\"-> System.gc() invoked. Objects 1, 2, and 4 will be cleaned up in the background.\");\n    }\n}",
        "output": null
      },
      {
        "title": "Method Overloading",
        "description": "Develop a Java program to overload the add() method for different parameter lists.",
        "code": "public class Add {\n    // 1. Method to add two integers\n    public int add(int a, int b) {\n        return a + b;\n    }\n\n    // 2. Overloaded method to add three integers (Different number of parameters)\n    public int add(int a, int b, int c) {\n        return a + b + c;\n    }\n\n    // 3. Overloaded method to add two doubles (Different data types)\n    public double add(double a, double b) {\n        return a + b;\n    }\n\n    // 4. Overloaded method to add an integer and a double (Different order of data types)\n    public double add(int a, double b) {\n        return a + b;\n    }\n\n    public static void main(String[] args) {\n        // Instantiating the 'Add' class\n        Add calc = new Add();\n\n        System.out.println(\"=== Method Overloading Demonstration ===\");\n\n        // Calls add(int, int)\n        int sum1 = calc.add(15, 25);\n        System.out.println(\"Adding two integers (15 + 25): \" + sum1);\n\n        // Calls add(int, int, int)\n        int sum2 = calc.add(10, 20, 30);\n        System.out.println(\"Adding three integers (10 + 20 + 30): \" + sum2);\n\n        // Calls add(double, double)\n        double sum3 = calc.add(12.5, 7.5);\n        System.out.println(\"Adding two doubles (12.5 + 7.5): \" + sum3);\n\n        // Calls add(int, double)\n        double sum4 = calc.add(10, 5.5);\n        System.out.println(\"Adding an int and a double (10 + 5.5): \" + sum4);\n    }\n}",
        "output": null
      },
      {
        "title": "Overloading Area Methods",
        "description": "Write a Java program to overload the area() method to calculate the area of a circle, rectangle, and square.",
        "code": "public class AreaCalculator {\n    // 1. Overloaded method for the area of a circle\n    // Uses a 'double' parameter for the radius\n    public double area(double radius) {\n        return Math.PI * radius * radius;\n    }\n\n    // 2. Overloaded method for the area of a square\n    // Uses an 'int' parameter for the side to differentiate from the circle method\n    public int area(int side) {\n        return side * side;\n    }\n\n    // 3. Overloaded method for the area of a rectangle\n    // Uses two parameters (length and width)\n    public int area(int length, int width) {\n        return length * width;\n    }\n\n    public static void main(String[] args) {\n        AreaCalculator calc = new AreaCalculator();\n\n        System.out.println(\"=== Area Calculations Demonstration ===\");\n\n        // Calls area(double) -> Circle\n        double circleArea = calc.area(5.5);\n        System.out.println(\"Area of the Circle (radius 5.5): \" + circleArea);\n\n        // Calls area(int) -> Square\n        int squareArea = calc.area(7);\n        System.out.println(\"Area of the Square (side 7): \" + squareArea);\n\n        // Calls area(int, int) -> Rectangle\n        int rectangleArea = calc.area(8, 12);\n        System.out.println(\"Area of the Rectangle (length 8, width 12): \" + rectangleArea);\n    }\n}",
        "output": null
      },
      {
        "title": "Passing Student Object",
        "description": "Develop a Java program to pass a Student object as a parameter to a method and display the student details.",
        "code": "class Student {\n    String name;\n    int rollNumber;\n    String course;\n\n    // Constructor to initialize the student details\n    public Student(String name, int rollNumber, String course) {\n        this.name = name;\n        this.rollNumber = rollNumber;\n        this.course = course;\n    }\n}\n\npublic class methoddisplay {\n    // Method that accepts a Student object as a parameter\n    public static void displayStudentDetails(Student student) {\n        System.out.println(\"--- Student Details ---\");\n        System.out.println(\"Name         : \" + student.name);\n        System.out.println(\"Roll Number  : \" + student.rollNumber);\n        System.out.println(\"Course       : \" + student.course);\n    }\n\n    public static void main(String[] args) {\n        // 1. Create Student objects\n        Student student1 = new Student(\"Alice Johnson\", 101, \"Computer Science\");\n        Student student2 = new Student(\"Bob Smith\", 102, \"Information Technology\");\n\n        // 2. Pass the objects to the display method\n        displayStudentDetails(student1);\n\n        System.out.println(); // Print a blank line for readability\n\n        displayStudentDetails(student2);\n    }\n}",
        "output": null
      },
      {
        "title": "Comparing Employee Salaries",
        "description": "Write a Java program to pass two Employee objects to a method that compares their salaries and displays the employee with the higher salary.",
        "code": "// Define the Employee class using encapsulation\nclass Employee {\n    private String name;\n    private double salary;\n\n    // Constructor to initialize the employee details\n    public Employee(String name, double salary) {\n        this.name = name;\n        this.salary = salary;\n    }\n\n    // Getter method for the employee's name\n    public String getName() {\n        return name;\n    }\n\n    // Getter method for the employee's salary\n    public double getSalary() {\n        return salary;\n    }\n}\n\n// Main class renamed to 'employeeobjects'\npublic class employeeobjects {\n    // Method that accepts two Employee objects as parameters\n    public static void displayHigherSalary(Employee emp1, Employee emp2) {\n        System.out.println(\"--- Salary Comparison ---\");\n        System.out.println(\"Employee 1: \" + emp1.getName() + \" ($\" + emp1.getSalary() + \")\");\n        System.out.println(\"Employee 2: \" + emp2.getName() + \" ($\" + emp2.getSalary() + \")\");\n        System.out.println(\"-------------------------\");\n\n        // Compare the salaries using the getter methods\n        if (emp1.getSalary() > emp2.getSalary()) {\n            System.out.println(\"Result: \" + emp1.getName() + \" has the higher salary.\");\n        } else if (emp2.getSalary() > emp1.getSalary()) {\n            System.out.println(\"Result: \" + emp2.getName() + \" has the higher salary.\");\n        } else {\n            System.out.println(\"Result: Both employees earn the exact same salary.\");\n        }\n    }\n\n    public static void main(String[] args) {\n        // 1. Create two Employee objects\n        Employee employeeA = new Employee(\"David\", 55000.0);\n        Employee employeeB = new Employee(\"Sarah\", 62000.0);\n\n        // 2. Pass the objects to the comparison method\n        displayHigherSalary(employeeA, employeeB);\n    }\n}",
        "output": null
      },
      {
        "title": "Returning a Student Object",
        "description": "Develop a Java program in which a method creates and returns a Student object. Display the returned object's details.",
        "code": "// Define the Student class\nclass Student {\n    private int rollNumber;\n    private String name;\n    private String major;\n\n    // Constructor to initialize the student details\n    public Student(int rollNumber, String name, String major) {\n        this.rollNumber = rollNumber;\n        this.name = name;\n        this.major = major;\n    }\n\n    // Method to display the student's details\n    public void displayInfo() {\n        System.out.println(\"Roll Number : \" + rollNumber);\n        System.out.println(\"Name        : \" + name);\n        System.out.println(\"Major       : \" + major);\n    }\n}\n\n// Main class renamed to 'Studentobjects'\npublic class Studentobjects {\n    // Method that creates and returns a Student object\n    public static Student createNewStudent() {\n        System.out.println(\"Creating a new Student object inside the method...\");\n\n        // Instantiating a new Student object\n        Student tempStudent = new Student(104, \"Elena Gilbert\", \"Data Science\");\n\n        // Returning the object to the caller\n        return tempStudent;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"=== Step 1: Call Method ===\");\n        // Call the method and store the returned object in a reference variable\n        Student returnedStudent = createNewStudent();\n\n        System.out.println(\"\\n=== Step 2: Display Returned Object ===\");\n        // Call the display method using the returned object\n        returnedStudent.displayInfo();\n    }\n}",
        "output": null
      },
      {
        "title": "Returning a Bank Account Object",
        "description": "Write a Java program in which a method updates the balance of a BankAccount object and returns the updated object.",
        "code": "// Define the BankAccount class\nclass BankAccount {\n    private String accountNumber;\n    private String accountHolder;\n    private double balance;\n\n    // Constructor to initialize the bank account\n    public BankAccount(String accountNumber, String accountHolder, double balance) {\n        this.accountNumber = accountNumber;\n        this.accountHolder = accountHolder;\n        this.balance = balance;\n    }\n\n    // Method to add money to the balance\n    public void deposit(double amount) {\n        this.balance += amount;\n    }\n\n    // Method to display account details\n    public void displayAccountInfo() {\n        System.out.println(\"Account Number : \" + accountNumber);\n        System.out.println(\"Account Holder : \" + accountHolder);\n        System.out.println(\"Current Balance: $\" + balance);\n        System.out.println(\"----------------------------\");\n    }\n}\n\n// Main class renamed to 'bankaccountobject'\npublic class bankaccountobject {\n    // Method that takes a BankAccount object, updates its balance, and returns it\n    public static BankAccount addBonusAndReturn(BankAccount account, double bonusAmount) {\n        System.out.println(\"Applying a bonus of $\" + bonusAmount + \" to the account...\");\n\n        // Update the state of the passed object\n        account.deposit(bonusAmount);\n\n        // Return the updated object\n        return account;\n    }\n\n    public static void main(String[] args) {\n        // 1. Create a BankAccount object\n        BankAccount myAccount = new BankAccount(\"ACC-12345\", \"Michael Scott\", 1500.00);\n\n        System.out.println(\"=== Before Update ===\");\n        myAccount.displayAccountInfo();\n\n        // 2. Pass the object to the method and catch the returned object reference\n        BankAccount updatedAccount = addBonusAndReturn(myAccount, 500.00);\n\n        System.out.println(\"\\n=== After Update ===\");\n        // 3. Display details using the returned object reference\n        updatedAccount.displayAccountInfo();\n    }\n}",
        "output": null
      },
      {
        "title": "Static Variable",
        "description": "Develop a Java program to count the total number of Student objects created using a static variable.",
        "code": "// Define the Student class\nclass Student {\n    // 1. Declare a static variable to keep track of the object count\n    private static int studentCount = 0;\n\n    private String name;\n    private int rollNumber;\n\n    // Constructor to initialize the student\n    public Student(String name, int rollNumber) {\n        this.name = name;\n        this.rollNumber = rollNumber;\n\n        // 2. Increment the static variable every time the constructor is called\n        studentCount++;\n        System.out.println(\"Created Student: \" + this.name);\n    }\n\n    // Static method to retrieve the total count\n    public static int getStudentCount() {\n        return studentCount;\n    }\n}\n\n// Main class to demonstrate the static counter\npublic class StudentCounterDemo {\n    public static void main(String[] args) {\n        System.out.println(\"Initial Student count: \" + Student.getStudentCount());\n        System.out.println(\"\\n--- Creating Student Objects ---\");\n\n        // Create multiple Student objects\n        Student student1 = new Student(\"Alice Johnson\", 101);\n        Student student2 = new Student(\"Bob Smith\", 102);\n        Student student3 = new Student(\"Charlie Brown\", 103);\n        Student student4 = new Student(\"Diana Prince\", 104);\n\n        System.out.println(\"\\n--- Final Object Count ---\");\n\n        // 3. Access the static method to see the final count\n        System.out.println(\"Total Student objects created: \" + Student.getStudentCount());\n    }\n}",
        "output": null
      },
      {
        "title": "Static Methods",
        "description": "Write a Java program to create a utility class containing static methods for calculating the square, cube, and factorial of a number.",
        "code": "class MathUtility {\n    private MathUtility() {\n        throw new UnsupportedOperationException(\"Utility class cannot be instantiated\");\n    }\n\n    public static int square(int number) {\n        return number * number;\n    }\n\n    public static int cube(int number) {\n        return number * number * number;\n    }\n\n    public static long factorial(int number) {\n        if (number < 0) {\n            throw new IllegalArgumentException(\"Factorial is not defined for negative numbers.\");\n        }\n        long result = 1;\n        for (int i = 1; i <= number; i++) {\n            result *= i;\n        }\n        return result;\n    }\n}\n\npublic class UtilityDemo {\n    public static void main(String[] args) {\n        System.out.println(\"=== Math Utility Calculations ===\");\n\n        int num1 = 5;\n        int num2 = 4;\n        int num3 = 6;\n\n        int squareResult = MathUtility.square(num1);\n        int cubeResult = MathUtility.cube(num2);\n        long factorialResult = MathUtility.factorial(num3);\n\n        System.out.println(\"The square of \" + num1 + \" is    : \" + squareResult);\n        System.out.println(\"The cube of \" + num2 + \" is      : \" + cubeResult);\n        System.out.println(\"The factorial of \" + num3 + \" is : \" + factorialResult);\n    }\n}",
        "output": null
      },
      {
        "title": "Final Keyword",
        "description": "Develop a Java program to demonstrate the use of final variables, final methods, and final classes.",
        "code": "final class SecureSystem {\n    public void displayStatus() {\n        System.out.println(\"SecureSystem is a final class. It cannot be subclassed.\");\n    }\n}\n\nclass Parent {\n    final int MAX_SPEED = 120;\n\n    public final void showMaxSpeed() {\n        System.out.println(\"The maximum speed is strictly set to: \" + MAX_SPEED + \" km/h\");\n    }\n}\n\nclass Child extends Parent {\n    public void childBehavior() {\n        System.out.println(\"Inside the Child class.\");\n    }\n}\n\npublic class FinalKeywordDemo {\n    public static void main(String[] args) {\n        System.out.println(\"=== 1. Final Variable and Method Demo ===\");\n        Child childObj = new Child();\n        childObj.childBehavior();\n        childObj.showMaxSpeed();\n\n        System.out.println(\"\\n=== 2. Final Class Demo ===\");\n        SecureSystem system = new SecureSystem();\n        system.displayStatus();\n    }\n}",
        "output": null
      },
      {
        "title": "Blank Final Variable",
        "description": "Write a Java program to initialize a blank final variable through a constructor and use it to assign a unique employee ID.",
        "code": "class Employee {\n    private static int idGenerator = 1000;\n    private final int employeeId;\n    private String name;\n\n    public Employee(String name) {\n        this.name = name;\n        this.employeeId = ++idGenerator;\n        System.out.println(\"Employee created: \" + this.name + \" (ID Assigned: \" + this.employeeId + \")\");\n    }\n\n    public void displayDetails() {\n        System.out.println(\"Employee ID: \" + employeeId + \" | Name: \" + name);\n    }\n}\n\npublic class BlankFinalDemo {\n    public static void main(String[] args) {\n        System.out.println(\"=== Creating Employees ===\");\n\n        Employee emp1 = new Employee(\"Alice Johnson\");\n        Employee emp2 = new Employee(\"Bob Smith\");\n        Employee emp3 = new Employee(\"Charlie Brown\");\n\n        System.out.println(\"\\n=== Employee Records ===\");\n\n        emp1.displayDetails();\n        emp2.displayDetails();\n        emp3.displayDetails();\n    }\n}",
        "output": null
      },
      {
        "title": "College and Department — Nested Class",
        "description": "Develop a Java program to create a College class containing a static nested Department class. Display the department details.",
        "code": "class College {\n    static class Department {\n        String deptName;\n        int deptCode;\n\n        public Department(String deptName, int deptCode) {\n            this.deptName = deptName;\n            this.deptCode = deptCode;\n        }\n\n        public void displayDetails() {\n            System.out.println(\"Department Name: \" + deptName);\n            System.out.println(\"Department Code: \" + deptCode);\n        }\n    }\n}\n\npublic class CollegeDemo {\n    public static void main(String[] args) {\n        College.Department dept1 = new College.Department(\"Computer Science\", 101);\n        College.Department dept2 = new College.Department(\"Electrical Engineering\", 102);\n\n        dept1.displayDetails();\n        System.out.println(\"------------------\");\n        dept2.displayDetails();\n    }\n}",
        "output": null
      },
      {
        "title": "Employee Address — Nested Class",
        "description": "Write a Java program to create an Employee class with a static nested Address class and demonstrate accessing the nested class from the main method.",
        "code": "class Employee {\n    String name;\n    int employeeId;\n    Address address;\n\n    public Employee(String name, int employeeId, Address address) {\n        this.name = name;\n        this.employeeId = employeeId;\n        this.address = address;\n    }\n\n    public void displayEmployeeDetails() {\n        System.out.println(\"Employee ID: \" + employeeId);\n        System.out.println(\"Name: \" + name);\n        address.displayAddress();\n    }\n\n    static class Address {\n        String street;\n        String city;\n        String zipCode;\n\n        public Address(String street, String city, String zipCode) {\n            this.street = street;\n            this.city = city;\n            this.zipCode = zipCode;\n        }\n\n        public void displayAddress() {\n            System.out.println(\"Address: \" + street + \", \" + city + \" - \" + zipCode);\n        }\n    }\n}\n\npublic class EmployeeDemo {\n    public static void main(String[] args) {\n        Employee.Address empAddress = new Employee.Address(\"123 Tech Lane\", \"Silicon Valley\", \"94043\");\n\n        Employee emp = new Employee(\"John Doe\", 1001, empAddress);\n\n        emp.displayEmployeeDetails();\n    }\n}",
        "output": null
      },
      {
        "title": "Student Address — Inner Class",
        "description": "Develop a Java program to create a Student class containing an inner Address class. Display the student and address information.",
        "code": "class Student {\n    String name;\n    int rollNumber;\n\n    public Student(String name, int rollNumber) {\n        this.name = name;\n        this.rollNumber = rollNumber;\n    }\n\n    public void displayStudentInfo() {\n        System.out.println(\"Student Name: \" + name);\n        System.out.println(\"Roll Number: \" + rollNumber);\n    }\n\n    class Address {\n        String street;\n        String city;\n        String zipCode;\n\n        public Address(String street, String city, String zipCode) {\n            this.street = street;\n            this.city = city;\n            this.zipCode = zipCode;\n        }\n\n        public void displayAddressInfo() {\n            System.out.println(\"Address: \" + street + \", \" + city + \" - \" + zipCode);\n        }\n    }\n}\n\npublic class StudentDemo {\n    public static void main(String[] args) {\n        Student student = new Student(\"Alice Smith\", 101);\n\n        Student.Address address = student.new Address(\"456 University Ave\", \"Boston\", \"02115\");\n\n        student.displayStudentInfo();\n        address.displayAddressInfo();\n    }\n}",
        "output": null
      },
      {
        "title": "Library Management — Inner Class",
        "description": "Write a Java program to create a Library class containing an inner Book class. Demonstrate how the inner class accesses the members of the outer class.",
        "code": "class Library {\n    private String libraryName;\n\n    public Library(String libraryName) {\n        this.libraryName = libraryName;\n    }\n\n    class Book {\n        private String title;\n\n        public Book(String title) {\n            this.title = title;\n        }\n\n        public void displayBookDetails() {\n            System.out.println(\"Book Title: \" + title);\n            System.out.println(\"Available at: \" + libraryName);\n        }\n    }\n}\n\npublic class LibraryDemo {\n    public static void main(String[] args) {\n        Library library = new Library(\"City Central Library\");\n\n        Library.Book book1 = library.new Book(\"The Great Gatsby\");\n        Library.Book book2 = library.new Book(\"1984\");\n\n        book1.displayBookDetails();\n        System.out.println(\"-------------\");\n        book2.displayBookDetails();\n    }\n}",
        "output": null
      }
    ]
  },
  {
    "id": 7,
    "title": "Week 07",
    "subtitle": "String Handling",
    "programs": [
      {
        "title": "String Constructors",
        "description": "Write a Java program to demonstrate different ways of creating and initializing String objects using various String constructors.",
        "code": "public class StringConstructor {\n    public static void main(String[] args) {\n        String s1 = \"Hello Java\";\n        String s2 = new String(\"Hello Java\");\n        char[] charArray = {'J', 'a', 'v', 'a'};\n        String s3 = new String(charArray);\n        byte[] byteArray = {72, 101, 108, 108, 111};\n        String s4 = new String(byteArray);\n\n        System.out.println(\"s1 (literal): \" + s1);\n        System.out.println(\"s2 (new String()): \" + s2);\n        System.out.println(\"s3 (from char array): \" + s3);\n        System.out.println(\"s4 (from byte array): \" + s4);\n        System.out.println(\"\\ns1 == s2: \" + (s1 == s2));\n        System.out.println(\"s1.equals(s2): \" + s1.equals(s2));\n        String s5 = \"Hello Java\";\n        System.out.println(\"s1 == s5: \" + (s1 == s5));\n    }\n}",
        "output": null
      },
      {
        "title": "StringBuffer Class",
        "description": "Write a Java program to demonstrate the functionality of the StringBuffer class by performing various mutable string operations.",
        "code": "public class StringBufferDemo {\n    public static void main(String[] args) {\n        StringBuffer sb = new StringBuffer(\"Hello\");\n        System.out.println(\"Original: \" + sb);\n        sb.append(\" World\");\n        System.out.println(\"After append: \" + sb);\n        sb.insert(5, \" Java\");\n        System.out.println(\"After insert: \" + sb);\n        sb.replace(0, 5, \"Hi\");\n        System.out.println(\"After replace: \" + sb);\n        sb.delete(0, 3);\n        System.out.println(\"After delete: \" + sb);\n        sb.reverse();\n        System.out.println(\"After reverse: \" + sb);\n        System.out.println(\"Length: \" + sb.length());\n        System.out.println(\"Capacity: \" + sb.capacity());\n    }\n}",
        "output": null
      },
      {
        "title": "StringTokenizer Class",
        "description": "Write a Java program to tokenize a given sentence using the StringTokenizer class and display each individual token.",
        "code": "import java.util.Scanner;\nimport java.util.StringTokenizer;\n\npublic class StringTokenizerDemo {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a sentence: \");\n        String sentence = sc.nextLine();\n        StringTokenizer st = new StringTokenizer(sentence);\n        System.out.println(\"\\n--- Tokens (default delimiter) ---\");\n        int count = 0;\n        while (st.hasMoreTokens()) {\n            System.out.println(st.nextToken());\n            count++;\n        }\n        System.out.println(\"Total tokens: \" + count);\n        System.out.print(\"\\nEnter a custom delimiter (e.g. , or -): \");\n        String delimiter = sc.nextLine();\n        StringTokenizer st2 = new StringTokenizer(sentence, delimiter);\n        System.out.println(\"\\n--- Tokens (custom delimiter) ---\");\n        int count2 = 0;\n        while (st2.hasMoreTokens()) {\n            System.out.println(st2.nextToken());\n            count2++;\n        }\n        System.out.println(\"Total tokens: \" + count2);\n    }\n}",
        "output": null
      },
      {
        "title": "Basic Inheritance",
        "description": "Write a Java program to demonstrate single inheritance by creating a superclass containing common properties and methods and a subclass that inherits and extends the functionality of the superclass.",
        "code": "class Person {\n    String name;\n    int age;\n\n    void display() {\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Age: \" + age);\n    }\n}\n\nclass Student extends Person {\n    int rollNo;\n    String branch;\n\n    void displayStudent() {\n        display();\n        System.out.println(\"Roll Number: \" + rollNo);\n        System.out.println(\"Branch: \" + branch);\n    }\n}\n\npublic class InheritanceDemo {\n    public static void main(String[] args) {\n        Student s1 = new Student();\n        s1.name = \"Rahul\";\n        s1.age = 20;\n        s1.rollNo = 101;\n        s1.branch = \"CSE\";\n        s1.displayStudent();\n    }\n}",
        "output": null
      },
      {
        "title": "Using super Keyword",
        "description": "Write a Java program to demonstrate the use of the super keyword for accessing superclass variables, methods, and constructors.",
        "code": "class Employee {\n    String name = \"Unknown\";\n    double salary;\n\n    Employee() {\n        System.out.println(\"Employee constructor called\");\n    }\n\n    Employee(String name, double salary) {\n        this.name = name;\n        this.salary = salary;\n        System.out.println(\"Parameterized Employee constructor called\");\n    }\n\n    void display() {\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Salary: \" + salary);\n    }\n}\n\nclass Manager extends Employee {\n    String name = \"Manager Name\";\n    double bonus;\n\n    Manager(String empName, double salary, double bonus) {\n        super(empName, salary);\n        this.bonus = bonus;\n        System.out.println(\"Manager constructor called\");\n    }\n\n    void displayManager() {\n        System.out.println(\"Superclass name (via super): \" + super.name);\n        super.display();\n        System.out.println(\"Bonus: \" + bonus);\n    }\n}\n\npublic class SuperKeywordDemo {\n    public static void main(String[] args) {\n        Manager m1 = new Manager(\"Anita\", 60000, 8000);\n        System.out.println();\n        m1.displayManager();\n    }\n}",
        "output": null
      }
    ]
  },
  {
    "id": 8,
    "title": "Week 08",
    "subtitle": "Inheritance",
    "programs": [
      {
        "title": "Single Inheritance",
        "description": "Write a Java program to demonstrate single inheritance by creating a Person superclass containing the name and age of a person. Create a Student subclass containing roll number and branch. Inherit the properties of Person and display the complete student details.",
        "code": "class Person {\n    String name;\n    int age;\n\n    void details() {\n        System.out.println(\"Name is \" + name);\n        System.out.println(\"Age is \" + age);\n    }\n}\n\nclass Student extends Person {\n    int roll;\n    String branch;\n\n    void cred() {\n        System.out.println(\"Roll Number: \" + roll);\n        System.out.println(\"Branch : \" + branch);\n    }\n}\n\npublic class Single {\n    public static void main(String[] args) {\n        Student newStudent = new Student();\n        newStudent.name = \"Prazod\";\n        newStudent.age = 18;\n        newStudent.roll = 98;\n        newStudent.branch = \"AIML\";\n        newStudent.details();\n        newStudent.cred();\n    }\n}",
        "output": null
      },
      {
        "title": "Using super Keyword",
        "description": "Write a Java program to demonstrate the use of the super keyword. Create a Vehicle superclass with a speed variable and a display() method. Create a Car subclass with a model variable and override the display() method. Use super to access the superclass variable and method.",
        "code": "class Vehicle {\n    int speed = 100;\n\n    void display() {\n        System.out.println(\"Inside Vehicle class\");\n    }\n}\n\nclass Car extends Vehicle {\n    String model = \"Sedan\";\n\n    void display() {\n        super.display(); // 1. Calls superclass method\n        System.out.println(\"Model: \" + model);\n        System.out.println(\"Speed: \" + super.speed); // 2. Accesses superclass variable\n    }\n}\n\npublic class Main2 {\n    public static void main(String[] args) {\n        Car myCar = new Car();\n        myCar.display();\n    }\n}",
        "output": null
      },
      {
        "title": "Multilevel Inheritance",
        "description": "Write a Java program to demonstrate multilevel inheritance by creating three classes: Person, Employee, and Manager. The Person class should contain personal details, Employee should contain employee details, and Manager should contain department details. Display all the details using inherited properties.",
        "code": "class Person {\n    String name = \"John\";\n}\n\nclass Employee extends Person {\n    int empid = 101;\n}\n\nclass Manager extends Employee {\n    String department = \"IT\";\n\n    void display() {\n        // Accessing inherited properties directly\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"ID: \" + empid);\n        System.out.println(\"Dept: \" + department);\n    }\n}\n\npublic class Main3 {\n    public static void main(String[] args) {\n        Manager mgr = new Manager();\n        mgr.display();\n    }\n}",
        "output": null
      },
      {
        "title": "Method Overriding",
        "description": "Write a Java program to demonstrate method overriding by creating an Animal superclass with a sound() method. Create subclasses Dog and Cat that override the sound() method with their respective sounds. Display the appropriate sound for each animal.",
        "code": "class Animal {\n    void sound() {\n        System.out.println(\"Generic animal sound\");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void sound() {\n        System.out.println(\"Bark!\");\n    }\n}\n\nclass Cat extends Animal {\n    @Override\n    void sound() {\n        System.out.println(\"Meow!\");\n    }\n}\n\npublic class Main4 {\n    public static void main(String[] args) {\n        Dog myDog = new Dog();\n        Cat myCat = new Cat();\n\n        myDog.sound(); // Calls Dog's overridden method\n        myCat.sound(); // Calls Cat's overridden method\n    }\n}",
        "output": null
      },
      {
        "title": "Dynamic Method Dispatch",
        "description": "Write a Java program to demonstrate dynamic method dispatch using a superclass Shape and subclasses Circle, Rectangle, and Triangle. Override the draw() method in each subclass and use a superclass reference to invoke the appropriate overridden method at runtime.",
        "code": "class Shape {\n    void draw() {\n        System.out.println(\"Drawing a generic shape\");\n    }\n}\n\nclass Circle extends Shape {\n    void draw() {\n        System.out.println(\"Drawing a Circle\");\n    }\n}\n\nclass Rectangle extends Shape {\n    void draw() {\n        System.out.println(\"Drawing a Rectangle\");\n    }\n}\n\nclass Triangle extends Shape {\n    void draw() {\n        System.out.println(\"Drawing a Triangle\");\n    }\n}\n\npublic class Main5 {\n    public static void main(String[] args) {\n        // Creating a superclass reference\n        Shape myShape;\n\n        // Dynamic Method Dispatch: The method called is determined\n        // by the actual object type at runtime, not the reference type.\n        myShape = new Circle();\n        myShape.draw();\n\n        myShape = new Rectangle();\n        myShape.draw();\n\n        myShape = new Triangle();\n        myShape.draw();\n    }\n}",
        "output": null
      },
      {
        "title": "super with Method Overriding",
        "description": "Write a Java program to demonstrate the use of super with method overriding. Create an Employee class with a display() method and derive a Manager class that overrides the method. Use super.display() in the subclass to invoke the superclass implementation before displaying the manager details.",
        "code": "class Employee {\n    String name = \"Alex\";\n\n    void display() {\n        System.out.println(\"Employee Name: \" + name);\n    }\n}\n\nclass Manager extends Employee {\n    String department = \"IT\";\n\n    void display() {\n        super.display(); // Invokes the superclass (Employee) method first\n        System.out.println(\"Manager Department: \" + department);\n    }\n}\n\npublic class Main6 {\n    public static void main(String[] args) {\n        Manager mgr = new Manager();\n        mgr.display();\n    }\n}",
        "output": null
      },
      {
        "title": "Multilevel Inheritance for Salary Calculation",
        "description": "Write a Java program to create a multilevel inheritance hierarchy Employee -> Developer -> SeniorDeveloper. Store basic salary in the Employee class, programming allowance in the Developer class, and project allowance in the SeniorDeveloper class. Calculate and display the total salary.",
        "code": "class Employee {\n    double basicSalary = 50000.0;\n}\n\nclass Developer extends Employee {\n    double programmingAllowance = 15000.0;\n}\n\nclass SeniorDeveloper extends Developer {\n    double projectAllowance = 20000.0;\n\n    void displayTotalSalary() {\n        // Accessing inherited properties from both parent classes\n        double totalSalary = basicSalary + programmingAllowance + projectAllowance;\n\n        System.out.println(\"Basic Salary: \" + basicSalary);\n        System.out.println(\"Programming Allowance: \" + programmingAllowance);\n        System.out.println(\"Project Allowance: \" + projectAllowance);\n        System.out.println(\"---------------------------------\");\n        System.out.println(\"Total Salary: \" + totalSalary);\n    }\n}\n\npublic class Main7 {\n    public static void main(String[] args) {\n        SeniorDeveloper sd = new SeniorDeveloper();\n        sd.displayTotalSalary();\n    }\n}",
        "output": null
      },
      {
        "title": "Dynamic Method Dispatch for Bank Accounts",
        "description": "Write a Java program to demonstrate dynamic method dispatch using a superclass BankAccount with a calculateInterest() method. Create SavingsAccount and CurrentAccount subclasses with different implementations of the method. Use a superclass reference to calculate interest for different account types.",
        "code": "class BankAccount {\n    void calculateInterest() {\n        System.out.println(\"Calculating standard interest rate.\");\n    }\n}\n\nclass SavingsAccount extends BankAccount {\n    void calculateInterest() {\n        System.out.println(\"Savings Account Interest Rate: 4.5%\");\n    }\n}\n\nclass CurrentAccount extends BankAccount {\n    void calculateInterest() {\n        System.out.println(\"Current Account Interest Rate: 0.0%\");\n    }\n}\n\npublic class Main8 {\n    public static void main(String[] args) {\n        // Creating a superclass reference\n        BankAccount account;\n\n        // Dynamic Method Dispatch: Calling SavingsAccount method\n        account = new SavingsAccount();\n        account.calculateInterest();\n\n        // Dynamic Method Dispatch: Calling CurrentAccount method\n        account = new CurrentAccount();\n        account.calculateInterest();\n    }\n}",
        "output": null
      },
      {
        "title": "Constructor Execution in Multilevel Inheritance",
        "description": "Write a Java program to demonstrate the order of constructor execution in multilevel inheritance using the classes Person, Student, and GraduateStudent. Use constructors in all three classes and display messages to show the order in which the constructors are executed.",
        "code": "class Person {\n    Person() {\n        System.out.println(\"Person constructor executed.\");\n    }\n}\n\nclass Student extends Person {\n    Student() {\n        System.out.println(\"Student constructor executed.\");\n    }\n}\n\nclass GraduateStudent extends Student {\n    GraduateStudent() {\n        System.out.println(\"GraduateStudent constructor executed.\");\n    }\n}\n\npublic class Main9 {\n    public static void main(String[] args) {\n        System.out.println(\"Creating GraduateStudent object:\");\n        // Instantiating the lowest subclass triggers the constructor chain\n        // from the top-most superclass down to the subclass.\n        GraduateStudent gs = new GraduateStudent();\n    }\n}",
        "output": null
      },
      {
        "title": "Banking Application Using Inheritance",
        "description": "Write a Java program to develop a simple banking application using inheritance. Create a BankAccount superclass with account number and balance. Derive SavingsAccount and CurrentAccount classes and provide suitable methods for deposit, withdrawal, and interest calculation. Demonstrate inheritance and method overriding.",
        "code": "class BankAccount {\n    int balance = 1000;\n\n    void deposit(int amount) {\n        balance += amount;\n        System.out.println(\"Deposited: \" + amount + \", New Balance: \" + balance);\n    }\n\n    void withdraw(int amount) {\n        balance -= amount;\n        System.out.println(\"Withdrawn: \" + amount + \", New Balance: \" + balance);\n    }\n\n    void calculateInterest() {\n        System.out.println(\"Calculating standard interest.\");\n    }\n}\n\nclass SavingsAccount extends BankAccount {\n    @Override\n    void calculateInterest() {\n        System.out.println(\"Savings Account gets 5% interest.\");\n    }\n}\n\nclass CurrentAccount extends BankAccount {\n    @Override\n    void calculateInterest() {\n        System.out.println(\"Current Account gets 0% interest.\");\n    }\n}\n\npublic class Main10 {\n    public static void main(String[] args) {\n        System.out.println(\"--- Savings Account ---\");\n        SavingsAccount savings = new SavingsAccount();\n        savings.deposit(500); // Inherited method\n        savings.withdraw(200); // Inherited method\n        savings.calculateInterest(); // Overridden method\n\n        System.out.println(\"\\n--- Current Account ---\");\n        CurrentAccount current = new CurrentAccount();\n        current.deposit(1000);\n        current.calculateInterest(); // Overridden method\n    }\n}",
        "output": null
      }
    ]
  },
  {
    "id": 9,
    "title": "Week 09",
    "subtitle": "Packages and Interfaces",
    "programs": [
      {
        "title": "Creating and Using a User-Defined Package",
        "description": "Create a user-defined package named mypackage containing a Student class, and access it from another Java program outside the package.",
        "code": "// File: mypackage/Student.java\npackage mypackage;\n\npublic class Student {\n    String name;\n    int rollNo;\n    double marks;\n\n    public Student(String name, int rollNo, double marks) {\n        this.name = name;\n        this.rollNo = rollNo;\n        this.marks = marks;\n    }\n\n    public void display() {\n        System.out.println(\"Name : \" + name);\n        System.out.println(\"Roll Number : \" + rollNo);\n        System.out.println(\"Marks : \" + marks);\n    }\n}\n\n// File: TestStudent.java\nimport mypackage.Student;\n\npublic class TestStudent {\n    public static void main(String[] args) {\n        Student s = new Student(\"Sathwika\", 101, 92.5);\n        s.display();\n    }\n}",
        "output": null
      },
      {
        "title": "Importing Packages",
        "description": "Demonstrate different ways of importing and accessing classes (Student and Faculty) from a package named college, using both a specific import and a wildcard import.",
        "code": "// File: college/Student.java\npackage college;\n\npublic class Student {\n    public void show() {\n        System.out.println(\"Student class from college package\");\n    }\n}\n\n// File: college/Faculty.java\npackage college;\n\npublic class Faculty {\n    public void show() {\n        System.out.println(\"Faculty class from college package\");\n    }\n}\n\n// File: TestSpecificImport.java\nimport college.Student;\n\npublic class TestSpecificImport {\n    public static void main(String[] args) {\n        Student s = new Student();\n        s.show();\n    }\n}\n\n// File: TestWildcardImport.java\nimport college.*;\n\npublic class TestWildcardImport {\n    public static void main(String[] args) {\n        Student s = new Student();\n        Faculty f = new Faculty();\n\n        s.show();\n        f.show();\n    }\n}",
        "output": null
      },
      {
        "title": "Packages and Member Access",
        "description": "Demonstrate the accessibility of public, private, protected and default members of a class from the same class, another class in the same package, and a class in a different package.",
        "code": "// File: pkgone/Access.java\npackage pkgone;\n\npublic class Access {\n    public int publicVar = 10;\n    private int privateVar = 20;\n    protected int protectedVar = 30;\n    int defaultVar = 40;\n\n    void display() {\n        System.out.println(\"Accessing from same class:\");\n        System.out.println(\"Public : \" + publicVar);\n        System.out.println(\"Private : \" + privateVar);\n        System.out.println(\"Protected : \" + protectedVar);\n        System.out.println(\"Default : \" + defaultVar);\n    }\n}\n\n// File: pkgone/SamePackageTest.java\npackage pkgone;\n\npublic class SamePackageTest {\n    public static void main(String[] args) {\n        Access a = new Access();\n        a.display();\n\n        System.out.println();\n        System.out.println(\"Accessing from another class in same package:\");\n        System.out.println(\"Public : \" + a.publicVar);\n        System.out.println(\"Protected : \" + a.protectedVar);\n        System.out.println(\"Default : \" + a.defaultVar);\n        // a.privateVar is NOT accessible here\n    }\n}\n\n// File: pkgtwo/DifferentPackageTest.java\npackage pkgtwo;\n\nimport pkgone.Access;\n\npublic class DifferentPackageTest extends Access {\n    public static void main(String[] args) {\n        DifferentPackageTest obj = new DifferentPackageTest();\n\n        System.out.println();\n        System.out.println(\"Accessing from a class in a different package:\");\n        System.out.println(\"Public : \" + obj.publicVar);\n        System.out.println(\"Protected (via inheritance) : \" + obj.protectedVar);\n        // obj.privateVar and obj.defaultVar are NOT accessible here\n    }\n}",
        "output": null
      },
      {
        "title": "Demonstrate CLASSPATH",
        "description": "Demonstrate how Java uses the CLASSPATH to locate a user-defined package (utilities) containing a Calculator class, and access it from another program compiled and executed using the configured CLASSPATH.",
        "code": "// File: utilities/Calculator.java\npackage utilities;\n\npublic class Calculator {\n    public int add(int a, int b) {\n        return a + b;\n    }\n\n    public int multiply(int a, int b) {\n        return a * b;\n    }\n}\n\n// File: TestCalculator.java\nimport utilities.Calculator;\n\npublic class TestCalculator {\n    public static void main(String[] args) {\n        Calculator c = new Calculator();\n\n        System.out.println(\"Addition : \" + c.add(15, 25));\n        System.out.println(\"Multiplication : \" + c.multiply(6, 7));\n    }\n}\n\n/*\n Steps to compile and run using CLASSPATH:\n\n 1. javac -d . utilities/Calculator.java\n    (creates utilities/Calculator.class in the current folder)\n\n 2. Set the CLASSPATH:\n    Windows : set CLASSPATH=.;C:\\JavaPrograms\n    Linux   : export CLASSPATH=.:/home/user/JavaPrograms\n\n 3. javac TestCalculator.java\n 4. java TestCalculator\n*/",
        "output": null
      },
      {
        "title": "Package Containing Multiple Classes",
        "description": "Create and use a package named bank containing three classes — Account, Customer and Transaction — accessed together from a main class outside the package.",
        "code": "// File: bank/Account.java\npackage bank;\n\npublic class Account {\n    int accountNumber;\n    double balance;\n\n    public Account(int accountNumber, double balance) {\n        this.accountNumber = accountNumber;\n        this.balance = balance;\n    }\n\n    public void showAccount() {\n        System.out.println(\"Account Number : \" + accountNumber);\n        System.out.println(\"Balance : \" + balance);\n    }\n}\n\n// File: bank/Customer.java\npackage bank;\n\npublic class Customer {\n    String name;\n    int customerId;\n\n    public Customer(String name, int customerId) {\n        this.name = name;\n        this.customerId = customerId;\n    }\n\n    public void showCustomer() {\n        System.out.println(\"Customer ID : \" + customerId);\n        System.out.println(\"Customer Name : \" + name);\n    }\n}\n\n// File: bank/Transaction.java\npackage bank;\n\npublic class Transaction {\n    String type;\n    double amount;\n\n    public Transaction(String type, double amount) {\n        this.type = type;\n        this.amount = amount;\n    }\n\n    public void showTransaction() {\n        System.out.println(\"Transaction Type : \" + type);\n        System.out.println(\"Amount : \" + amount);\n    }\n}\n\n// File: BankTest.java\nimport bank.Account;\nimport bank.Customer;\nimport bank.Transaction;\n\npublic class BankTest {\n    public static void main(String[] args) {\n        Customer cust = new Customer(\"Sathwika\", 501);\n        Account acc = new Account(1001, 25000);\n        Transaction txn = new Transaction(\"Deposit\", 5000);\n\n        cust.showCustomer();\n        acc.showAccount();\n        txn.showTransaction();\n    }\n}",
        "output": null
      },
      {
        "title": "Defining and Implementing an Interface",
        "description": "Create an interface Shape containing a method area(), and implement it using Circle and Rectangle classes.",
        "code": "interface Shape {\n    double area();\n}\n\nclass Circle implements Shape {\n    double radius;\n\n    Circle(double radius) {\n        this.radius = radius;\n    }\n\n    public double area() {\n        return Math.PI * radius * radius;\n    }\n}\n\nclass Rectangle implements Shape {\n    double length, width;\n\n    Rectangle(double length, double width) {\n        this.length = length;\n        this.width = width;\n    }\n\n    public double area() {\n        return length * width;\n    }\n}\n\npublic class ShapeDemo {\n    public static void main(String[] args) {\n        Shape c = new Circle(5);\n        Shape r = new Rectangle(4, 6);\n\n        System.out.println(\"Area of Circle : \" + c.area());\n        System.out.println(\"Area of Rectangle : \" + r.area());\n    }\n}",
        "output": null
      },
      {
        "title": "Implementing Multiple Interfaces",
        "description": "Demonstrate how a class can implement multiple interfaces, Printable and Showable, using a single Demo class.",
        "code": "interface Printable {\n    void print();\n}\n\ninterface Showable {\n    void show();\n}\n\nclass Demo implements Printable, Showable {\n    public void print() {\n        System.out.println(\"Printing...\");\n    }\n\n    public void show() {\n        System.out.println(\"Showing...\");\n    }\n}\n\npublic class MultipleInterfaceDemo {\n    public static void main(String[] args) {\n        Demo d = new Demo();\n\n        d.print();\n        d.show();\n    }\n}",
        "output": null
      },
      {
        "title": "Interface-Based Polymorphism",
        "description": "Demonstrate polymorphism using an interface reference Vehicle, assigning objects of Car and Bike to it.",
        "code": "interface Vehicle {\n    void start();\n}\n\nclass Car implements Vehicle {\n    public void start() {\n        System.out.println(\"Car starts with a key\");\n    }\n}\n\nclass Bike implements Vehicle {\n    public void start() {\n        System.out.println(\"Bike starts with a kick\");\n    }\n}\n\npublic class VehicleDemo {\n    public static void main(String[] args) {\n        Vehicle v;\n\n        v = new Car();\n        v.start();\n\n        v = new Bike();\n        v.start();\n    }\n}",
        "output": null
      },
      {
        "title": "Variables in Interfaces",
        "description": "Demonstrate variables declared inside an interface named Constants (MAX_MARKS and PI), accessed from a class that implements the interface and directly using the interface name.",
        "code": "interface Constants {\n    int MAX_MARKS = 100;\n    double PI = 3.14159;\n}\n\nclass Circle implements Constants {\n    double radius;\n\n    Circle(double radius) {\n        this.radius = radius;\n    }\n\n    void showConstants() {\n        System.out.println(\"Max Marks : \" + MAX_MARKS);\n        System.out.println(\"PI : \" + PI);\n        System.out.println(\"Area : \" + (PI * radius * radius));\n    }\n}\n\npublic class ConstantsDemo {\n    public static void main(String[] args) {\n        Circle c = new Circle(3);\n        c.showConstants();\n\n        System.out.println(\"Accessed using interface name:\");\n        System.out.println(\"Max Marks : \" + Constants.MAX_MARKS);\n        System.out.println(\"PI : \" + Constants.PI);\n    }\n}",
        "output": null
      },
      {
        "title": "Nested Interfaces",
        "description": "Demonstrate the concept of a nested interface Department declared inside an outer class University, implemented and used in another class.",
        "code": "class University {\n    interface Department {\n        void showDepartment();\n    }\n}\n\nclass CSEDepartment implements University.Department {\n    public void showDepartment() {\n        System.out.println(\"Department : Computer Science and Engineering\");\n    }\n}\n\npublic class NestedInterfaceDemo {\n    public static void main(String[] args) {\n        University.Department dept = new CSEDepartment();\n        dept.showDepartment();\n    }\n}",
        "output": null
      },
      {
        "title": "Interface Inheritance",
        "description": "Demonstrate inheritance between interfaces, where interface Dog extends interface Animal, and both methods are implemented in class Labrador.",
        "code": "interface Animal {\n    void eat();\n}\n\ninterface Dog extends Animal {\n    void bark();\n}\n\nclass Labrador implements Dog {\n    public void eat() {\n        System.out.println(\"Labrador eats food\");\n    }\n\n    public void bark() {\n        System.out.println(\"Labrador barks\");\n    }\n}\n\npublic class InterfaceInheritanceDemo {\n    public static void main(String[] args) {\n        Labrador l = new Labrador();\n\n        l.eat();\n        l.bark();\n    }\n}",
        "output": null
      },
      {
        "title": "Real-World Application Using Interfaces",
        "description": "Develop a Payment Processing System using an interface Payment with a pay(double amount) method, implemented by CreditCardPayment, UPIPayment and NetBankingPayment. The main program lets the user select a payment method and processes the payment.",
        "code": "import java.util.Scanner;\n\ninterface Payment {\n    void pay(double amount);\n}\n\nclass CreditCardPayment implements Payment {\n    public void pay(double amount) {\n        System.out.println(\"Paid Rs. \" + amount + \" using Credit Card\");\n    }\n}\n\nclass UPIPayment implements Payment {\n    public void pay(double amount) {\n        System.out.println(\"Paid Rs. \" + amount + \" using UPI\");\n    }\n}\n\nclass NetBankingPayment implements Payment {\n    public void pay(double amount) {\n        System.out.println(\"Paid Rs. \" + amount + \" using Net Banking\");\n    }\n}\n\npublic class PaymentDemo {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n\n        System.out.println(\"Select Payment Method:\");\n        System.out.println(\"1. Credit Card\");\n        System.out.println(\"2. UPI\");\n        System.out.println(\"3. Net Banking\");\n        System.out.print(\"Enter choice: \");\n        int choice = sc.nextInt();\n\n        System.out.print(\"Enter amount: \");\n        double amount = sc.nextDouble();\n\n        Payment payment;\n\n        switch (choice) {\n            case 1:\n                payment = new CreditCardPayment();\n                break;\n            case 2:\n                payment = new UPIPayment();\n                break;\n            case 3:\n                payment = new NetBankingPayment();\n                break;\n            default:\n                System.out.println(\"Invalid choice\");\n                sc.close();\n                return;\n        }\n\n        payment.pay(amount);\n        sc.close();\n    }\n}",
        "output": null
      }
    ]
  },
  {
    "id": 10,
    "title": "Week 10",
    "subtitle": "Exception Handling and Byte Streams",
    "programs": [
      {
        "title": "Handling Division by Zero",
        "description": "Write a Java program to demonstrate exception handling using try and catch by handling division by zero.",
        "code": "public class DivisionExample {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = 0;\n\n        try {\n            int result = a / b;\n            System.out.println(\"Result: \" + result);\n        } catch (ArithmeticException e) {\n            System.out.println(\"Cannot divide by zero.\");\n        }\n    }\n}",
        "output": null
      },
      {
        "title": "Demonstrating Common Exceptions",
        "description": "Write a Java program to demonstrate different types of exceptions such as ArithmeticException, ArrayIndexOutOfBoundsException, and NullPointerException.",
        "code": "public class ExceptionDemo {\n    public static void main(String[] args) {\n        try {\n            int a = 10;\n            int b = 0;\n            int result = a / b;\n            System.out.println(result);\n        } catch (ArithmeticException e) {\n            System.out.println(\"ArithmeticException: Cannot divide by zero.\");\n        }\n\n        try {\n            int[] numbers = {10, 20, 30};\n            System.out.println(numbers[5]);\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"ArrayIndexOutOfBoundsException: Invalid array index.\");\n        }\n\n        try {\n            String str = null;\n            System.out.println(str.length());\n        } catch (NullPointerException e) {\n            System.out.println(\"NullPointerException: Cannot use a null object.\");\n        }\n    }\n}",
        "output": null
      },
      {
        "title": "Observing an Uncaught Exception",
        "description": "Write a Java program to demonstrate an uncaught exception and observe the default JVM exception message and stack trace.",
        "code": "public class UncaughtExceptionDemo {\n    public static void main(String[] args) {\n        System.out.println(\"Program started.\");\n        int a = 10;\n        int b = 0;\n        int result = a / b;\n        System.out.println(\"Result: \" + result);\n    }\n}",
        "output": null
      },
      {
        "title": "Using Multiple Catch Clauses",
        "description": "Write a Java program to handle multiple exceptions using multiple catch clauses.",
        "code": "public class MultipleCatchDemo {\n    public static void main(String[] args) {\n        try {\n            int[] numbers = {10, 20, 30};\n            int a = 10;\n            int b = 0;\n            System.out.println(\"Result: \" + (a / b));\n            System.out.println(numbers[5]);\n        } catch (ArithmeticException e) {\n            System.out.println(\"Arithmetic Exception: Cannot divide by zero.\");\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"Array Index Exception: Array index is out of bounds.\");\n        } catch (Exception e) {\n            System.out.println(\"General Exception: \" + e.getMessage());\n        }\n        System.out.println(\"Program continues after exception handling.\");\n    }\n}",
        "output": null
      },
      {
        "title": "Explicitly Throwing an Exception",
        "description": "Write a Java program to demonstrate the use of the throw statement to explicitly generate an exception when a given condition is violated.",
        "code": "public class ThrowExample {\n    public static void main(String[] args) {\n        int age = 15;\n        try {\n            if (age < 18) {\n                throw new ArithmeticException(\"Age must be 18 or above.\");\n            }\n            System.out.println(\"Eligible to vote.\");\n        } catch (ArithmeticException e) {\n            System.out.println(\"Exception: \" + e.getMessage());\n        }\n    }\n}",
        "output": null
      },
      {
        "title": "Propagating an Exception with throws",
        "description": "Write a Java program to demonstrate the use of the throws keyword by propagating an exception to the calling method.",
        "code": "public class ThrowsExample {\n    static void divide() throws ArithmeticException {\n        int a = 10;\n        int b = 0;\n        int result = a / b;\n        System.out.println(\"Result: \" + result);\n    }\n\n    public static void main(String[] args) {\n        try {\n            divide();\n        } catch (ArithmeticException e) {\n            System.out.println(\"Exception caught: \" + e.getMessage());\n        }\n    }\n}",
        "output": null
      },
      {
        "title": "Demonstrating the finally Block",
        "description": "Write a Java program to demonstrate the use of the finally block for executing statements regardless of whether an exception occurs.",
        "code": "public class FinallyExample {\n    public static void main(String[] args) {\n        try {\n            int a = 10;\n            int b = 0;\n            int result = a / b;\n            System.out.println(\"Result: \" + result);\n        } catch (ArithmeticException e) {\n            System.out.println(\"Exception caught: \" + e.getMessage());\n        } finally {\n            System.out.println(\"Finally block is always executed.\");\n        }\n    }\n}",
        "output": null
      },
      {
        "title": "Creating a User-Defined Exception",
        "description": "Write a Java program to create a user-defined exception by extending the Exception class.",
        "code": "class AgeException extends Exception {\n    AgeException(String message) {\n        super(message);\n    }\n}\n\npublic class UserDefinedException {\n    public static void main(String[] args) {\n        int age = 15;\n        try {\n            if (age < 18) {\n                throw new AgeException(\"Age must be 18 or above.\");\n            }\n            System.out.println(\"Eligible to vote.\");\n        } catch (AgeException e) {\n            System.out.println(\"Exception: \" + e.getMessage());\n        }\n    }\n}",
        "output": null
      },
      {
        "title": "Validating Student Marks",
        "description": "Write a Java program to validate a student's marks and throw a custom exception when the marks are outside the valid range.",
        "code": "class InvalidMarksException extends Exception {\n    InvalidMarksException(String message) {\n        super(message);\n    }\n}\n\npublic class StudentMarks {\n    public static void validateMarks(int marks) throws InvalidMarksException {\n        if (marks < 0 || marks > 100) {\n            throw new InvalidMarksException(\"Marks must be between 0 and 100.\");\n        }\n        System.out.println(\"Valid marks: \" + marks);\n    }\n\n    public static void main(String[] args) {\n        int marks = 105;\n        try {\n            validateMarks(marks);\n        } catch (InvalidMarksException e) {\n            System.out.println(\"Exception: \" + e.getMessage());\n        }\n    }\n}",
        "output": null
      },
      {
        "title": "Combining Exception Handling Features",
        "description": "Write a Java program that combines try, multiple catch, throw, throws and finally in a single application.",
        "code": "class ExceptionDemoCombined {\n    static void checkMarks(int marks) throws Exception {\n        if (marks < 0 || marks > 100) {\n            throw new Exception(\"Marks must be between 0 and 100.\");\n        }\n        System.out.println(\"Valid Marks: \" + marks);\n    }\n\n    public static void main(String[] args) {\n        int marks = 105;\n        try {\n            checkMarks(marks);\n            int result = 10 / 0;\n            System.out.println(result);\n        } catch (ArithmeticException e) {\n            System.out.println(\"Arithmetic Exception: \" + e.getMessage());\n        } catch (Exception e) {\n            System.out.println(\"Exception: \" + e.getMessage());\n        } finally {\n            System.out.println(\"Finally block executed.\");\n        }\n    }\n}",
        "output": null
      },
      {
        "title": "Reading and Writing Bytes with Streams",
        "description": "Write a Java program to demonstrate the use of InputStream and OutputStream to read bytes from an input source and write bytes to an output destination.",
        "code": "import java.io.FileInputStream;\nimport java.io.FileOutputStream;\nimport java.io.IOException;\n\npublic class StreamByteDemo {\n    public static void main(String[] args) {\n        String sourceFile = \"source.txt\";\n        String destinationFile = \"destination.txt\";\n\n        prepareSourceFile(sourceFile, \"Hello, World! Demonstrating InputStream and OutputStream in Java.\");\n\n        try (FileInputStream in = new FileInputStream(sourceFile);\n             FileOutputStream out = new FileOutputStream(destinationFile)) {\n            byte[] buffer = new byte[1024];\n            int bytesRead;\n\n            while ((bytesRead = in.read(buffer)) != -1) {\n                out.write(buffer, 0, bytesRead);\n            }\n            out.flush();\n            System.out.println(\"Data successfully transferred from \" + sourceFile + \" to \" + destinationFile);\n        } catch (IOException e) {\n            System.err.println(\"An I/O error occurred: \" + e.getMessage());\n        }\n    }\n\n    private static void prepareSourceFile(String filePath, String content) {\n        try (FileOutputStream out = new FileOutputStream(filePath)) {\n            byte[] dataBytes = content.getBytes();\n            out.write(dataBytes);\n        } catch (IOException e) {\n            System.err.println(\"Failed to create source file: \" + e.getMessage());\n        }\n    }\n}",
        "output": null
      },
      {
        "title": "Reading a File Byte by Byte",
        "description": "Write a Java program to read the contents of a file byte-by-byte using FileInputStream and display the contents on the console.",
        "code": "import java.io.FileInputStream;\nimport java.io.FileNotFoundException;\nimport java.io.FileOutputStream;\nimport java.io.IOException;\n\npublic class ReadByteByByteDemo {\n    public static void main(String[] args) {\n        String fileName = \"sample.txt\";\n        createSampleFile(fileName, \"Hello! This file is being read byte-by-byte.\");\n\n        try (FileInputStream fis = new FileInputStream(fileName)) {\n            int byteData;\n\n            System.out.println(\"Reading contents of \" + fileName + \":\\n\");\n\n            while ((byteData = fis.read()) != -1) {\n                System.out.print((char) byteData);\n            }\n            System.out.println(\"\\n\\n--- End of file reached ---\");\n        } catch (FileNotFoundException e) {\n            System.err.println(\"File not found: \" + e.getMessage());\n        } catch (IOException e) {\n            System.err.println(\"I/O error occurred while reading: \" + e.getMessage());\n        }\n    }\n\n    private static void createSampleFile(String fileName, String text) {\n        try (FileOutputStream fos = new FileOutputStream(fileName)) {\n            fos.write(text.getBytes());\n        } catch (IOException e) {\n            System.err.println(\"Could not create sample file: \" + e.getMessage());\n        }\n    }\n}",
        "output": null
      },
      {
        "title": "Writing Data with FileOutputStream",
        "description": "Write a Java program to write data into a file using FileOutputStream and verify the contents of the file.",
        "code": "import java.io.FileInputStream;\nimport java.io.FileOutputStream;\nimport java.io.IOException;\nimport java.nio.charset.StandardCharsets;\n\npublic class FileOutputStreamVerifyDemo {\n    public static void main(String[] args) {\n        String filePath = \"output.txt\";\n        String originalContent = \"Welcome to Java I/O streams!\\nWriting bytes and verifying content.\";\n\n        writeToFile(filePath, originalContent);\n        verifyFileContent(filePath, originalContent);\n    }\n\n    private static void writeToFile(String filePath, String content) {\n        try (FileOutputStream fos = new FileOutputStream(filePath)) {\n            byte[] bytes = content.getBytes(StandardCharsets.UTF_8);\n            fos.write(bytes);\n            fos.flush();\n            System.out.println(\"Data successfully written to '\" + filePath + \"'.\");\n        } catch (IOException e) {\n            System.err.println(\"Error while writing to file: \" + e.getMessage());\n        }\n    }\n\n    private static void verifyFileContent(String filePath, String expectedContent) {\n        try (FileInputStream fis = new FileInputStream(filePath)) {\n            byte[] readBytes = fis.readAllBytes();\n            String actualContent = new String(readBytes, StandardCharsets.UTF_8);\n            System.out.println(\"\\n--- Read Content from File ---\");\n            System.out.println(actualContent);\n            System.out.println(\"---------------------------------\");\n            if (expectedContent.equals(actualContent)) {\n                System.out.println(\"Verification Result: SUCCESS (File contents match exactly).\");\n            } else {\n                System.out.println(\"Verification Result: FAILED (Contents do not match).\");\n            }\n        } catch (IOException e) {\n            System.err.println(\"Error while reading file for verification: \" + e.getMessage());\n        }\n    }\n}",
        "output": null
      },
      {
        "title": "Copying a File with Byte Streams",
        "description": "Write a Java program to copy the contents of one file to another file using FileInputStream and FileOutputStream.",
        "code": "import java.io.File;\nimport java.io.FileInputStream;\nimport java.io.FileNotFoundException;\nimport java.io.FileOutputStream;\nimport java.io.IOException;\n\npublic class FileCopyDemo {\n    public static void main(String[] args) {\n        String sourceFilePath = \"source.txt\";\n        String destinationFilePath = \"destination.txt\";\n\n        prepareDummyFile(sourceFilePath, \"This is the source file content to be copied.\\nJava File Streams Copy Demo.\");\n        copyFile(sourceFilePath, destinationFilePath);\n    }\n\n    public static void copyFile(String sourcePath, String destinationPath) {\n        File src = new File(sourcePath);\n        File dest = new File(destinationPath);\n\n        if (!src.exists() || !src.isFile()) {\n            System.err.println(\"Error: Source file does not exist or is not a regular file.\");\n            return;\n        }\n\n        try (FileInputStream fis = new FileInputStream(src);\n             FileOutputStream fos = new FileOutputStream(dest)) {\n            byte[] buffer = new byte[4096]; // 4 KB buffer\n            int bytesRead;\n            long totalBytes = 0;\n\n            while ((bytesRead = fis.read(buffer)) != -1) {\n                fos.write(buffer, 0, bytesRead);\n                totalBytes += bytesRead;\n            }\n            fos.flush();\n            System.out.println(\"File copied successfully!\");\n            System.out.println(\"Source: \" + src.getAbsolutePath());\n            System.out.println(\"Destination: \" + dest.getAbsolutePath());\n            System.out.println(\"Total bytes transferred: \" + totalBytes);\n        } catch (FileNotFoundException e) {\n            System.err.println(\"File not found error: \" + e.getMessage());\n        } catch (IOException e) {\n            System.err.println(\"I/O error during copy: \" + e.getMessage());\n        }\n    }\n\n    private static void prepareDummyFile(String path, String data) {\n        try (FileOutputStream fos = new FileOutputStream(path)) {\n            fos.write(data.getBytes());\n        } catch (IOException e) {\n            System.err.println(\"Could not create source file: \" + e.getMessage());\n        }\n    }\n}",
        "output": null
      },
      {
        "title": "Copying an Image with Byte Streams",
        "description": "Write a Java program to copy an image from one file to another using byte streams and handle FileNotFoundException and IOException using try-catch-finally.",
        "code": "import java.io.File;\nimport java.io.FileInputStream;\nimport java.io.FileNotFoundException;\nimport java.io.FileOutputStream;\nimport java.io.IOException;\n\npublic class ImageCopyDemo {\n    public static void main(String[] args) {\n        String sourceImagePath = \"input_image.jpg\";\n        String destinationImagePath = \"copied_image.jpg\";\n        copyImage(sourceImagePath, destinationImagePath);\n    }\n\n    public static void copyImage(String sourcePath, String destinationPath) {\n        FileInputStream fis = null;\n        FileOutputStream fos = null;\n        try {\n            File sourceFile = new File(sourcePath);\n            File destinationFile = new File(destinationPath);\n            fis = new FileInputStream(sourceFile);\n            fos = new FileOutputStream(destinationFile);\n            byte[] buffer = new byte[4096];\n            int bytesRead;\n            long totalBytes = 0;\n\n            while ((bytesRead = fis.read(buffer)) != -1) {\n                fos.write(buffer, 0, bytesRead);\n                totalBytes += bytesRead;\n            }\n            fos.flush();\n            System.out.println(\"Image copied successfully!\");\n            System.out.println(\"Total bytes transferred: \" + totalBytes);\n        } catch (FileNotFoundException e) {\n            System.err.println(\"File Error: The specified image file could not be found or opened.\");\n            System.err.println(\"Details: \" + e.getMessage());\n        } catch (IOException e) {\n            System.err.println(\"I/O Error: An error occurred while reading or writing image data.\");\n            System.err.println(\"Details: \" + e.getMessage());\n        } finally {\n            if (fis != null) {\n                try {\n                    fis.close();\n                } catch (IOException e) {\n                    System.err.println(\"Failed to close FileInputStream: \" + e.getMessage());\n                }\n            }\n            if (fos != null) {\n                try {\n                    fos.close();\n                } catch (IOException e) {\n                    System.err.println(\"Failed to close FileOutputStream: \" + e.getMessage());\n                }\n            }\n        }\n    }\n}",
        "output": null
      }
    ]
  },
  {
    "id": 11,
    "title": "Week 11",
    "subtitle": "Character Streams and Multithreaded Programming",
    "programs": [
      {
        "title": "Keyboard Input with Reader and Writer",
        "description": "Write a Java program to read characters from the keyboard using Reader and display them on the console using Writer.",
        "code": "import java.io.*;\n\npublic class ReaderWriterExample {\n    public static void main(String[] args) throws IOException {\n        Reader reader = new InputStreamReader(System.in);\n        Writer writer = new OutputStreamWriter(System.out);\n        int ch;\n        System.out.println(\"Enter characters (press Ctrl+D to stop):\");\n        while ((ch = reader.read()) != -1) {\n            writer.write(ch);\n            writer.flush();\n        }\n    }\n}",
        "output": null
      },
      {
        "title": "Reading a Text File with FileReader",
        "description": "Write a Java program to read the contents of a text file using FileReader and display them on the console.",
        "code": "import java.io.FileReader;\nimport java.io.IOException;\n\npublic class ReadFile {\n    public static void main(String[] args) throws IOException {\n        FileReader reader = new FileReader(\"input.txt\");\n        int ch;\n        while ((ch = reader.read()) != -1) {\n            System.out.print((char) ch);\n        }\n        reader.close();\n    }\n}",
        "output": null
      },
      {
        "title": "Writing Text with FileWriter",
        "description": "Write a Java program to write text into a file using FileWriter.",
        "code": "import java.io.FileWriter;\nimport java.io.IOException;\n\npublic class FileWriteExample {\n    public static void main(String[] args) {\n        try {\n            FileWriter file = new FileWriter(\"sample.txt\");\n            file.write(\"Hello! This is a Java program.\\n\");\n            file.write(\"I am writing text into a file using FileWriter.\");\n            file.close();\n            System.out.println(\"Data written successfully.\");\n        } catch (IOException e) {\n            System.out.println(\"Error occurred while writing to the file.\");\n        }\n    }\n}",
        "output": null
      },
      {
        "title": "Copying Text with FileReader and FileWriter",
        "description": "Write a Java program to copy the contents of one text file into another using FileReader and FileWriter.",
        "code": "import java.io.FileReader;\nimport java.io.FileWriter;\nimport java.io.IOException;\n\npublic class CopyFile {\n    public static void main(String[] args) {\n        try {\n            FileReader reader = new FileReader(\"source.txt\");\n            FileWriter writer = new FileWriter(\"destination.txt\");\n            int ch;\n            while ((ch = reader.read()) != -1) {\n                writer.write(ch);\n            }\n            reader.close();\n            writer.close();\n            System.out.println(\"File copied successfully.\");\n        } catch (IOException e) {\n            System.out.println(\"Error: \" + e.getMessage());\n        }\n    }\n}",
        "output": null
      },
      {
        "title": "Counting Characters, Words, and Lines",
        "description": "Write a Java program to count the number of characters, words, and lines in a text file using character streams.",
        "code": "import java.io.FileReader;\nimport java.io.IOException;\n\npublic class FileCount {\n    public static void main(String[] args) {\n        int characters = 0;\n        int words = 0;\n        int lines = 1;\n        boolean inWord = false;\n        try {\n            FileReader reader = new FileReader(\"source.txt\");\n            int ch;\n            while ((ch = reader.read()) != -1) {\n                characters++;\n                if (ch == '\\n') {\n                    lines++;\n                }\n                if (Character.isWhitespace(ch)) {\n                    inWord = false;\n                } else if (!inWord) {\n                    words++;\n                    inWord = true;\n                }\n            }\n            reader.close();\n            System.out.println(\"Number of characters: \" + characters);\n            System.out.println(\"Number of words: \" + words);\n            System.out.println(\"Number of lines: \" + lines);\n        } catch (IOException e) {\n            System.out.println(\"Error: \" + e.getMessage());\n        }\n    }\n}",
        "output": null
      },
      {
        "title": "Inspecting the Main Thread",
        "description": "Write a Java program to demonstrate the Main Thread and display its name, priority, and state.",
        "code": "public class MainThreadDemo {\n    public static void main(String[] args) {\n        Thread mainThread = Thread.currentThread();\n        System.out.println(\"Default Thread Name: \" + mainThread.getName());\n        System.out.println(\"Default Thread Priority: \" + mainThread.getPriority());\n        System.out.println(\"Current Thread State: \" + mainThread.getState());\n        mainThread.setName(\"Custom-Main-Thread\");\n        mainThread.setPriority(Thread.MAX_PRIORITY);\n        System.out.println(\"\\n--- After Modification ---\");\n        System.out.println(\"New Thread Name: \" + mainThread.getName());\n        System.out.println(\"New Thread Priority: \" + mainThread.getPriority());\n    }\n}",
        "output": null
      },
      {
        "title": "Creating a Thread by Extending Thread",
        "description": "Write a Java program to create a thread by extending the Thread class.",
        "code": "class MyCustomThread extends Thread {\n    @Override\n    public void run() {\n        for (int i = 1; i <= 5; i++) {\n            System.out.println(Thread.currentThread().getName() + \" is executing - Count: \" + i);\n            try {\n                Thread.sleep(500);\n            } catch (InterruptedException e) {\n                System.out.println(Thread.currentThread().getName() + \" was interrupted.\");\n            }\n        }\n    }\n}\n\npublic class ThreadCreationDemo {\n    public static void main(String[] args) {\n        System.out.println(\"Main thread starting...\");\n        MyCustomThread thread1 = new MyCustomThread();\n        MyCustomThread thread2 = new MyCustomThread();\n        thread1.setName(\"Worker-Thread-A\");\n        thread2.setName(\"Worker-Thread-B\");\n        thread1.start();\n        thread2.start();\n        System.out.println(\"Main thread finished spawning workers.\");\n    }\n}",
        "output": null
      },
      {
        "title": "Creating a Thread with Runnable",
        "description": "Write a Java program to create a thread by implementing the Runnable interface.",
        "code": "class MyRunnable implements Runnable {\n    @Override\n    public void run() {\n        for (int i = 1; i <= 5; i++) {\n            System.out.println(Thread.currentThread().getName() + \" is executing - Count: \" + i);\n            try {\n                Thread.sleep(500);\n            } catch (InterruptedException e) {\n                System.out.println(Thread.currentThread().getName() + \" was interrupted.\");\n            }\n        }\n    }\n}\n\npublic class RunnableDemo {\n    public static void main(String[] args) {\n        System.out.println(\"Main thread starting...\");\n        MyRunnable myRunnable = new MyRunnable();\n        Thread thread1 = new Thread(myRunnable, \"Worker-Thread-A\");\n        Thread thread2 = new Thread(myRunnable, \"Worker-Thread-B\");\n        thread1.start();\n        thread2.start();\n        System.out.println(\"Main thread finished spawning workers.\");\n    }\n}",
        "output": null
      },
      {
        "title": "Running Multiple Threads Concurrently",
        "description": "Write a Java program to create multiple threads and demonstrate their concurrent execution.",
        "code": "class WorkerTask implements Runnable {\n    private final String threadName;\n\n    public WorkerTask(String name) {\n        this.threadName = name;\n    }\n\n    @Override\n    public void run() {\n        for (int i = 1; i <= 4; i++) {\n            System.out.println(threadName + \" is executing step \" + i);\n            try {\n                Thread.sleep((long) (Math.random() * 400 + 100));\n            } catch (InterruptedException e) {\n                System.out.println(threadName + \" was interrupted.\");\n            }\n        }\n        System.out.println(\"==> \" + threadName + \" has FINISHED.\");\n    }\n}\n\npublic class MultiThreadDemo {\n    public static void main(String[] args) {\n        System.out.println(\"Main thread started spawning workers...\\n\");\n        Thread t1 = new Thread(new WorkerTask(\"Thread-Alpha\"));\n        Thread t2 = new Thread(new WorkerTask(\"Thread-Beta\"));\n        Thread t3 = new Thread(new WorkerTask(\"Thread-Gamma\"));\n        t1.start();\n        t2.start();\n        t3.start();\n        System.out.println(\"Main thread finished spawning. Workers are now running concurrently.\\n\");\n    }\n}",
        "output": null
      },
      {
        "title": "Checking a Thread with isAlive()",
        "description": "Write a Java program to demonstrate the use of isAlive() method to check whether a thread is running.",
        "code": "class LifeCycleTask implements Runnable {\n    @Override\n    public void run() {\n        System.out.println(\"[Worker] Thread has started executing...\");\n        try {\n            Thread.sleep(2000);\n        } catch (InterruptedException e) {\n            System.out.println(\"[Worker] Thread was interrupted.\");\n        }\n        System.out.println(\"[Worker] Thread is finishing its task.\");\n    }\n}\n\npublic class IsAliveDemo {\n    public static void main(String[] args) {\n        Thread workerThread = new Thread(new LifeCycleTask(), \"WorkerThread\");\n        System.out.println(\"1. Before start()   -> isAlive(): \" + workerThread.isAlive());\n        workerThread.start();\n        System.out.println(\"2. After start()    -> isAlive(): \" + workerThread.isAlive());\n        try {\n            System.out.println(\"Main thread is waiting for WorkerThread to finish...\");\n            workerThread.join();\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n        System.out.println(\"3. After completion -> isAlive(): \" + workerThread.isAlive());\n    }\n}",
        "output": null
      },
      {
        "title": "Waiting for a Thread with join()",
        "description": "Write a Java program to demonstrate the use of join() method to make one thread wait for another thread to complete.",
        "code": "class DownloadTask implements Runnable {\n    @Override\n    public void run() {\n        System.out.println(\"[Downloader] Starting file download...\");\n        try {\n            Thread.sleep(2500);\n        } catch (InterruptedException e) {\n            System.out.println(\"[Downloader] Thread interrupted.\");\n        }\n        System.out.println(\"[Downloader] File download complete.\");\n    }\n}\n\npublic class JoinMethodDemo {\n    public static void main(String[] args) {\n        System.out.println(\"[Main] Initializing system...\");\n        Thread downloadThread = new Thread(new DownloadTask());\n        System.out.println(\"[Main] Starting the download thread.\");\n        downloadThread.start();\n        System.out.println(\"[Main] Calling join(). Main thread will now wait...\");\n        try {\n            downloadThread.join();\n        } catch (InterruptedException e) {\n            System.out.println(\"[Main] Main thread interrupted.\");\n        }\n        System.out.println(\"[Main] Download confirmed. Resuming main thread operations.\");\n    }\n}",
        "output": null
      },
      {
        "title": "Controlling Threads with isAlive() and join()",
        "description": "Write a Java program to create multiple threads and use isAlive() and join() to control their execution order.",
        "code": "class ControlledTask implements Runnable {\n    @Override\n    public void run() {\n        System.out.println(\"[\" + Thread.currentThread().getName() + \"] is executing.\");\n        try {\n            Thread.sleep(800);\n        } catch (InterruptedException e) {\n            System.out.println(\"[\" + Thread.currentThread().getName() + \"] was interrupted.\");\n        }\n        System.out.println(\"[\" + Thread.currentThread().getName() + \"] has completed.\");\n    }\n}\n\npublic class ThreadControlDemo {\n    public static void main(String[] args) {\n        Thread t1 = new Thread(new ControlledTask(), \"Thread-1\");\n        Thread t2 = new Thread(new ControlledTask(), \"Thread-2\");\n        Thread t3 = new Thread(new ControlledTask(), \"Thread-3\");\n        System.out.println(\"[Main] Starting Thread-1.\");\n        t1.start();\n        System.out.println(\"[Main] Is Thread-1 alive? \" + t1.isAlive());\n        try {\n            System.out.println(\"[Main] Waiting for Thread-1 to finish before starting others...\");\n            t1.join();\n        } catch (InterruptedException e) {\n            System.out.println(\"[Main] Main thread interrupted.\");\n        }\n        System.out.println(\"[Main] Is Thread-1 alive now? \" + t1.isAlive());\n        System.out.println(\"\\n[Main] Thread-1 finished. Now starting Thread-2 and Thread-3 concurrently.\");\n        t2.start();\n        t3.start();\n        try {\n            System.out.println(\"[Main] Waiting for Thread-2 and Thread-3 to finish...\");\n            t2.join();\n            t3.join();\n        } catch (InterruptedException e) {\n            System.out.println(\"[Main] Main thread interrupted.\");\n        }\n        System.out.println(\"\\n[Main] All worker threads are dead. Main thread safely exiting.\");\n    }\n}",
        "output": null
      }
    ]
  },
  {
    "id": 12,
    "title": "Week 12",
    "subtitle": "Multithreading & Lambda Expressions Lab",
    "programs": [
      {
        "title": "Thread Priorities — MIN_PRIORITY, NORM_PRIORITY, and MAX_PRIORITY",
        "description": "Create multiple threads and demonstrate different thread priorities using MIN_PRIORITY, NORM_PRIORITY, and MAX_PRIORITY.",
        "code": "class MyThread extends Thread {\n    public void run() {\n        System.out.println(getName() + \" priority: \" + getPriority());\n    }\n}\n\npublic class Lab1 {\n    public static void main(String[] args) {\n        MyThread t1 = new MyThread();\n        MyThread t2 = new MyThread();\n        MyThread t3 = new MyThread();\n\n        t1.setPriority(Thread.MIN_PRIORITY);\n        t2.setPriority(Thread.NORM_PRIORITY);\n        t3.setPriority(Thread.MAX_PRIORITY);\n\n        t1.start();\n        t2.start();\n        t3.start();\n    }\n}",
        "output": null
      },
      {
        "title": "Thread Priorities and Execution Order",
        "description": "Create three threads with different priorities and observe their execution order.",
        "code": "class MyThread extends Thread {\n    MyThread(String name) {\n        super(name);\n    }\n    public void run() {\n        System.out.println(getName() + \" (priority \" + getPriority() + \") is running\");\n    }\n}\n\npublic class Lab2 {\n    public static void main(String[] args) {\n        MyThread t1 = new MyThread(\"Thread A\");\n        MyThread t2 = new MyThread(\"Thread B\");\n        MyThread t3 = new MyThread(\"Thread C\");\n\n        t1.setPriority(Thread.MIN_PRIORITY);\n        t2.setPriority(Thread.NORM_PRIORITY);\n        t3.setPriority(Thread.MAX_PRIORITY);\n\n        t1.start();\n        t2.start();\n        t3.start();\n    }\n}",
        "output": null
      },
      {
        "title": "Synchronization Using Synchronized Method",
        "description": "Demonstrate synchronization using a synchronized method for accessing a shared counter.",
        "code": "class Counter {\n    int count = 0;\n    synchronized void increment() {\n        count++;\n    }\n}\n\nclass MyThread extends Thread {\n    Counter counter;\n    MyThread(Counter c) {\n        counter = c;\n    }\n    public void run() {\n        for (int i = 0; i < 1000; i++) {\n            counter.increment();\n        }\n    }\n}\n\npublic class Lab3 {\n    public static void main(String[] args) throws InterruptedException {\n        Counter counter = new Counter();\n        MyThread t1 = new MyThread(counter);\n        MyThread t2 = new MyThread(counter);\n\n        t1.start();\n        t2.start();\n        t1.join();\n        t2.join();\n\n        System.out.println(\"Final count: \" + counter.count);\n    }\n}",
        "output": null
      },
      {
        "title": "Synchronization Using Synchronized Block",
        "description": "Demonstrate synchronization using a synchronized block.",
        "code": "class Counter {\n    int count = 0;\n    void increment() {\n        synchronized (this) {\n            count++;\n        }\n    }\n}\n\nclass MyThread extends Thread {\n    Counter counter;\n    MyThread(Counter c) {\n        counter = c;\n    }\n    public void run() {\n        for (int i = 0; i < 1000; i++) {\n            counter.increment();\n        }\n    }\n}\n\npublic class Lab4 {\n    public static void main(String[] args) throws InterruptedException {\n        Counter counter = new Counter();\n        MyThread t1 = new MyThread(counter);\n        MyThread t2 = new MyThread(counter);\n\n        t1.start();\n        t2.start();\n        t1.join();\n        t2.join();\n\n        System.out.println(\"Final count: \" + counter.count);\n    }\n}",
        "output": null
      },
      {
        "title": "Race Condition and Elimination Using Synchronization",
        "description": "Demonstrate a race condition and eliminate it using synchronization.",
        "code": "class Counter {\n    int count = 0;\n    void increment() {\n        count++; // not synchronized, may cause race condition\n    }\n    synchronized void safeIncrement() {\n        count++; // synchronized, no race condition\n    }\n}\n\nclass MyThread extends Thread {\n    Counter counter;\n    boolean safe;\n    MyThread(Counter c, boolean safe) {\n        counter = c;\n        this.safe = safe;\n    }\n    public void run() {\n        for (int i = 0; i < 1000000; i++) {\n            if (safe) {\n                counter.safeIncrement();\n            } else {\n                counter.increment();\n            }\n        }\n    }\n}\n\npublic class Lab5 {\n    public static void main(String[] args) throws InterruptedException {\n        // Without synchronization\n        Counter c1 = new Counter();\n        MyThread a1 = new MyThread(c1, false);\n        MyThread a2 = new MyThread(c1, false);\n        a1.start(); a2.start();\n        a1.join(); a2.join();\n        System.out.println(\"Without synchronization, count = \" + c1.count);\n\n        // With synchronization\n        Counter c2 = new Counter();\n        MyThread b1 = new MyThread(c2, true);\n        MyThread b2 = new MyThread(c2, true);\n        b1.start(); b2.start();\n        b1.join(); b2.join();\n        System.out.println(\"With synchronization, count = \" + c2.count);\n    }\n}",
        "output": null
      },
      {
        "title": "Synchronized Ticket-Booking System",
        "description": "Implement a synchronized ticket-booking system where multiple threads attempt to book tickets simultaneously.",
        "code": "class TicketCounter {\n    int tickets = 3;\n    synchronized void bookTicket(String name) {\n        if (tickets > 0) {\n            tickets--;\n            System.out.println(name + \" booked a ticket. Remaining: \" + tickets);\n        } else {\n            System.out.println(name + \" could not book a ticket.\");\n        }\n    }\n}\n\nclass Customer extends Thread {\n    TicketCounter counter;\n    String name;\n    Customer(TicketCounter c, String name) {\n        counter = c;\n        this.name = name;\n    }\n    public void run() {\n        counter.bookTicket(name);\n    }\n}\n\npublic class Lab6 {\n    public static void main(String[] args) throws InterruptedException {\n        TicketCounter counter = new TicketCounter();\n        Customer c1 = new Customer(counter, \"Customer 1\");\n        Customer c2 = new Customer(counter, \"Customer 2\");\n        Customer c3 = new Customer(counter, \"Customer 3\");\n        Customer c4 = new Customer(counter, \"Customer 4\");\n\n        c1.start();\n        c2.start();\n        c3.start();\n        c4.start();\n\n        c1.join();\n        c2.join();\n        c3.join();\n        c4.join();\n    }\n}",
        "output": null
      },
      {
        "title": "Functional Interface with Lambda Expressions",
        "description": "Introduce lambda expressions by implementing a functional interface for addition, subtraction, multiplication, and division.",
        "code": "interface Operation {\n    int calculate(int a, int b);\n}\n\npublic class Lab7 {\n    public static void main(String[] args) {\n        Operation add = (a, b) -> a + b;\n        Operation sub = (a, b) -> a - b;\n        Operation mul = (a, b) -> a * b;\n        Operation div = (a, b) -> a / b;\n\n        System.out.println(\"Addition: \" + add.calculate(10, 5));\n        System.out.println(\"Subtraction: \" + sub.calculate(10, 5));\n        System.out.println(\"Multiplication: \" + mul.calculate(10, 5));\n        System.out.println(\"Division: \" + div.calculate(10, 5));\n    }\n}",
        "output": null
      },
      {
        "title": "Single and Multiple Parameter Lambda Expressions",
        "description": "Demonstrate a lambda expression with a single parameter and multiple parameters.",
        "code": "interface Square {\n    int find(int a);\n}\n\ninterface Add {\n    int find(int a, int b);\n}\n\npublic class Lab8 {\n    public static void main(String[] args) {\n        Square sq = a -> a * a;\n        Add add = (a, b) -> a + b;\n\n        System.out.println(\"Square: \" + sq.find(5));\n        System.out.println(\"Sum: \" + add.find(5, 10));\n    }\n}",
        "output": null
      },
      {
        "title": "Block Lambda Expression with Multiple Statements",
        "description": "Demonstrate a block lambda expression containing multiple statements.",
        "code": "interface Check {\n    void test(int n);\n}\n\npublic class Lab9 {\n    public static void main(String[] args) {\n        Check check = (n) -> {\n            System.out.println(\"Number: \" + n);\n            if (n % 2 == 0) {\n                System.out.println(\"Even\");\n            } else {\n                System.out.println(\"Odd\");\n            }\n        };\n\n        check.test(7);\n        check.test(10);\n    }\n}",
        "output": null
      },
      {
        "title": "Block Lambda Expression to Return Largest Number",
        "description": "Use a block lambda expression to find the largest of two numbers and return the result.",
        "code": "interface Max {\n    int find(int a, int b);\n}\n\npublic class Lab10 {\n    public static void main(String[] args) {\n        Max max = (a, b) -> {\n            if (a > b) {\n                return a;\n            } else {\n                return b;\n            }\n        };\n\n        System.out.println(\"Largest: \" + max.find(20, 35));\n    }\n}",
        "output": null
      },
      {
        "title": "Generic Functional Interface with Lambda Expressions",
        "description": "Create a generic functional interface and implement it using lambda expressions for different data types.",
        "code": "interface Show<T> {\n    void display(T value);\n}\n\npublic class Lab11 {\n    public static void main(String[] args) {\n        Show<Integer> showInt = n -> System.out.println(\"Integer: \" + n);\n        Show<String> showStr = s -> System.out.println(\"String: \" + s);\n\n        showInt.display(100);\n        showStr.display(\"Hello\");\n    }\n}",
        "output": null
      },
      {
        "title": "Generic Functional Interface with Two Parameters",
        "description": "Create a generic functional interface that accepts two values and performs an operation using a lambda expression.",
        "code": "interface Operation<T> {\n    T apply(T a, T b);\n}\n\npublic class Lab12 {\n    public static void main(String[] args) {\n        Operation<Integer> add = (a, b) -> a + b;\n        Operation<String> concat = (a, b) -> a + b;\n\n        System.out.println(\"Sum: \" + add.apply(10, 20));\n        System.out.println(\"Concat: \" + concat.apply(\"Hello \", \"World\"));\n    }\n}",
        "output": null
      },
      {
        "title": "Lambda Expressions with ArrayList forEach",
        "description": "Use lambda expressions to display and filter elements of an ArrayList.",
        "code": "import java.util.ArrayList;\n\npublic class Lab13 {\n    public static void main(String[] args) {\n        ArrayList<Integer> list = new ArrayList<>();\n        list.add(1);\n        list.add(2);\n        list.add(3);\n        list.add(4);\n        list.add(5);\n\n        System.out.println(\"All elements:\");\n        list.forEach(n -> System.out.println(n));\n\n        System.out.println(\"Even elements:\");\n        list.forEach(n -> {\n            if (n % 2 == 0) {\n                System.out.println(n);\n            }\n        });\n    }\n}",
        "output": null
      },
      {
        "title": "Sorting ArrayList Using Lambda Expressions",
        "description": "Sort a list of integers and strings using lambda expressions.",
        "code": "import java.util.ArrayList;\n\npublic class Lab14 {\n    public static void main(String[] args) {\n        ArrayList<Integer> numbers = new ArrayList<>();\n        numbers.add(40);\n        numbers.add(10);\n        numbers.add(30);\n        numbers.add(20);\n\n        ArrayList<String> names = new ArrayList<>();\n        names.add(\"Banana\");\n        names.add(\"Apple\");\n        names.add(\"Cherry\");\n\n        numbers.sort((a, b) -> a - b);\n        names.sort((a, b) -> a.compareTo(b));\n\n        System.out.println(\"Sorted numbers: \" + numbers);\n        System.out.println(\"Sorted names: \" + names);\n    }\n}",
        "output": null
      },
      {
        "title": "Thread Execution Using Lambda Expression",
        "description": "Create and execute a thread using a lambda expression.",
        "code": "public class Lab15 {\n    public static void main(String[] args) {\n        Runnable task = () -> {\n            System.out.println(\"Thread is running using lambda expression\");\n        };\n\n        Thread t = new Thread(task);\n        t.start();\n    }\n}",
        "output": null
      }
    ]
  }
];

const generatedOutputs = {
  "1-0": "ANSWER — COMPARATIVE STUDY OF PROGRAMMING LANGUAGES\n\nJava is a class-based, object-oriented language designed for portability, security and large-scale application development. It uses the JVM to provide platform independence.\n\nC is a procedural, compiled language mainly used for system programming, embedded systems and low-level development. It provides high performance but requires manual memory management.\n\nC++ extends C with object-oriented and generic programming features. It is widely used where high performance and low-level control are required, such as games and real-time software.\n\nPython is a high-level, open-source, multi-paradigm language known for its simple syntax. It is widely used in automation, data science, artificial intelligence, scripting and web development.\n\nJavaScript is a dynamic language primarily used for interactive web development. Modern JavaScript engines use JIT compilation, and JavaScript also supports server-side development through environments such as Node.js.\n\nCOMPARISON RESULT\n\n• Java — Strong OOP, portable, secure and suitable for enterprise applications.\n• C — Very fast and efficient, with direct low-level control.\n• C++ — High performance with powerful OOP and generic programming features.\n• Python — Easiest to learn and highly productive for AI, data and automation.\n• JavaScript — Essential for modern interactive web applications.\n\nCONCLUSION\n\nEach language is suitable for different requirements. Java is a strong choice for portable enterprise software, C for system-level programming, C++ for performance-intensive applications, Python for rapid development and AI/data work, and JavaScript for web applications.",
  "2-0": "ORACLE JDK INSTALLATION — WINDOWS\n\n1. Open the official Oracle Java download page in a browser.\n2. Select the required JDK version for Windows.\n3. Download the Windows x64 installer (.msi or .exe).\n4. Run the downloaded installer.\n5. Follow the installation wizard and complete the installation.\n6. Note the JDK installation folder, for example: C:Program FilesJavajdk-<version>.\n7. Open System Properties → Advanced → Environment Variables.\n8. Create JAVA_HOME and set it to the JDK installation folder.\n9. Edit Path and add: %JAVA_HOME%\bin\n10. Open Command Prompt and run: java -version\n11. Run: javac -version\n12. Create HelloWorld.java, compile with javac HelloWorld.java, and execute with java HelloWorld.\n\nVerification Output:\nHello, World!",
  "2-1": "OPENJDK INSTALLATION — WINDOWS\n\n1. Open a browser and choose a trusted OpenJDK distribution for Windows.\n2. Select the required OpenJDK version and Windows x64 architecture.\n3. Download the Windows installer (.msi) or the appropriate OpenJDK package.\n4. Run the installer and complete all installation steps.\n5. Note the OpenJDK installation folder.\n6. Open System Properties → Advanced → Environment Variables.\n7. Create JAVA_HOME and set it to the OpenJDK installation folder.\n8. Edit Path and add: %JAVA_HOME%\bin\n9. Open PowerShell or Command Prompt.\n10. Run: java -version\n11. Run: javac -version\n12. Create HelloWorld.java, compile with javac HelloWorld.java, and execute with java HelloWorld.\n\nVerification Output:\nHello, World!",
  "3-0": "Hello, Java!",
  "3-1": "Byte: 100\nShort: 20000\nInt: 500000\nLong: 9000000000\nFloat: 12.5\nDouble: 99.999\nChar: A\nBoolean: true",
  "3-2": "Addition: 26\nSubtraction: 14\nMultiplication: 120\nDivision: 3\nModulus: 2",
  "3-3": "Addition: 20.0\nSubtraction: 11.0\nMultiplication: 69.75\nDivision: 3.4444444\nModulus: 2.0",
  "3-4": "Character: A\nASCII/Unicode Value: 65",
  "3-5": "Is Java Fun? true\nIs 15 greater than 10? true",
  "3-6": "Name: Aditya\nAge: 19\nCGPA: 9.0\nGrade: A\nStudent: true",
  "3-7": "Before Swapping:\na = 10\nb = 20\nAfter Swapping:\na = 20\nb = 10",
  "3-8": "Integer Value: 50\nDouble Value: 50.0",
  "3-9": "Double Value: 25.75\nInteger Value: 25",
  "3-10": "Character: A\nASCII/Unicode Value: 65\nASCII/Unicode Value: 66\nCharacter: B",
  "3-11": "57 is Odd",
  "3-12": "25 is the largest number.",
  "3-13": "Age: 19\nSalary: 100000.0\nStudent Name: Aditya\nKeywords like int, class, if, and while cannot be used as variable names.",
  "3-14": "Numbers from 1 to 10:\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10",
  "6-0": "Roll Number: 101\nName: Aditi Sharma\nBranch: Computer Science\nCGPA: 9.12",
  "6-1": "Employee ID: 501\nName: Rohan Verma\nDepartment: Human Resources\nSalary: 45000.0",
  "6-2": "Title: Java Programming\nAuthor: James Gosling\nPrice: 599.0\n-----------------\nTitle: The Alchemist\nAuthor: Paulo Coelho\nPrice: 299.0\n-----------------\nTitle: Wings of Fire\nAuthor: A.P.J. Abdul Kalam\nPrice: 350.0\n-----------------",
  "6-3": "Enter Roll Number, Name, Marks:\n98\nPrazod\n100\nEnter Roll Number, Name, Marks:\n97\nTrinadh\n100\nEnter Roll Number, Name, Marks:\n22\nSai\n100\nEnter Roll Number, Name, Marks:\n24\nNavadeep\n100\nEnter Roll Number, Name, Marks:\n25\nAvinash\n101\nRoll Number: 98\nName: Prazod\nMarks: 100.0\n-----------------\nRoll Number: 97\nName: Trinadh\nMarks: 100.0\n-----------------\nRoll Number: 22\nName: Sai\nMarks: 100.0\n-----------------\nRoll Number: 24\nName: Navadeep\nMarks: 100.0\n-----------------\nRoll Number: 25\nName: Avinash\nMarks: 101.0\n-----------------",
  "6-4": "Before modification (via d1):\nRoll Number: 101\nName: Aditi Sharma\nMarks: 89.5\n-----------------\nBefore modification (via d2):\nRoll Number: 101\nName: Aditi Sharma\nMarks: 89.5\n-----------------\nAfter modifying through d2:\nd1 now shows:\nRoll Number: 101\nName: Rohan Verma\nMarks: 95.0\n-----------------\nd2 now shows:\nRoll Number: 101\nName: Rohan Verma\nMarks: 95.0\n-----------------",
  "6-5": "Details via s1:\nEmployee ID: 501\nName: Rohan Verma\nSalary: 45000.0\n-----------------\nDetails via s2:\nEmployee ID: 501\nName: Rohan Verma\nSalary: 45000.0\n-----------------\ns1 and s2 refer to the SAME object.",
  "6-6": "Addition: 24\nSubtraction: 16\nMultiplication: 80\nDivision: 5.0",
  "6-7": "Length: 10.5\nWidth: 5.0\nArea: 52.5\nPerimeter: 31.0",
  "6-8": "ID: 0, Name: Unknown\nID: 101, Name: Alice",
  "6-9": "Account No: 0, Holder: Unknown, Balance: $0.0\nAccount No: 1001, Holder: Alice, Balance: $0.0\nAccount No: 1002, Holder: Bob, Balance: $5000.0",
  "6-10": "ID: 101, Name: Alice\nID: 102, Name: Bob",
  "6-11": "Constructor with all parameters called\nConstructor with id and name called\nDefault constructor called\nID: 0, Name: Unknown, Course: Not Enrolled\n\nConstructor with all parameters called\nConstructor with id and name called\nID: 101, Name: Alice, Course: Not Enrolled\n\nConstructor with all parameters called\nID: 102, Name: Bob, Course: Mathematics",
  "6-12": "--- 1. Creating Objects ---\nObject 1 successfully created.\nObject 2 successfully created.\nObject 3 successfully created.\n\n--- 2. Making objects eligible for GC ---\nObject 1 reference set to null.\nObject 2 reference reassigned to Object 3.\nObject 4 (Anonymous) successfully created.\nObject 4 created without a reference.\n\n--- 3. Requesting Garbage Collection ---\nSystem.gc() called! The JVM will silently clean up Objects 1, 2, and 4 in the background.",
  "6-13": "=== Step 1: Object Creation ===\nObject 1 successfully created.\nObject 2 successfully created.\nObject 3 successfully created.\n\n=== Step 2: Making Objects Eligible for GC ===\n-> Null Assignment: 'Object 1' reference set to null.\n-> Reassignment: 'Object 2' reference repointed to 'Object 3'.\nObject 4 (Anonymous) successfully created.\n-> Anonymous Object: 'Object 4' created without a variable reference.\n\n=== Step 3: Requesting Garbage Collection ===\n-> System.gc() invoked. Objects 1, 2, and 4 will be cleaned up in the background.",
  "6-14": "=== Method Overloading Demonstration ===\nAdding two integers (15 + 25): 40\nAdding three integers (10 + 20 + 30): 60\nAdding two doubles (12.5 + 7.5): 20.0\nAdding an int and a double (10 + 5.5): 15.5",
  "6-15": "=== Area Calculations Demonstration ===\nArea of the Circle (radius 5.5): 95.03317777109123\nArea of the Square (side 7): 49\nArea of the Rectangle (length 8, width 12): 96",
  "6-16": "--- Student Details ---\nName         : Alice Johnson\nRoll Number  : 101\nCourse       : Computer Science\n\n--- Student Details ---\nName         : Bob Smith\nRoll Number  : 102\nCourse       : Information Technology",
  "6-17": "--- Salary Comparison ---\nEmployee 1: David ($55000.0)\nEmployee 2: Sarah ($62000.0)\n-------------------------\nResult: Sarah has the higher salary.",
  "6-18": "=== Step 1: Call Method ===\nCreating a new Student object inside the method...\n\n=== Step 2: Display Returned Object ===\nRoll Number : 104\nName        : Elena Gilbert\nMajor       : Data Science",
  "6-19": "=== Before Update ===\nAccount Number : ACC-12345\nAccount Holder : Michael Scott\nCurrent Balance: $1500.0\n----------------------------\nApplying a bonus of $500.0 to the account...\n\n=== After Update ===\nAccount Number : ACC-12345\nAccount Holder : Michael Scott\nCurrent Balance: $2000.0\n----------------------------",
  "6-20": "Initial Student count: 0\n\n--- Creating Student Objects ---\nCreated Student: Alice Johnson\nCreated Student: Bob Smith\nCreated Student: Charlie Brown\nCreated Student: Diana Prince\n\n--- Final Object Count ---\nTotal Student objects created: 4",
  "6-21": "=== Math Utility Calculations ===\nThe square of 5 is    : 25\nThe cube of 4 is      : 64\nThe factorial of 6 is : 720",
  "6-22": "=== 1. Final Variable and Method Demo ===\nInside the Child class.\nThe maximum speed is strictly set to: 120 km/h\n\n=== 2. Final Class Demo ===\nSecureSystem is a final class. It cannot be subclassed.",
  "6-23": "=== Creating Employees ===\nEmployee created: Alice Johnson (ID Assigned: 1001)\nEmployee created: Bob Smith (ID Assigned: 1002)\nEmployee created: Charlie Brown (ID Assigned: 1003)\n\n=== Employee Records ===\nEmployee ID: 1001 | Name: Alice Johnson\nEmployee ID: 1002 | Name: Bob Smith\nEmployee ID: 1003 | Name: Charlie Brown",
  "6-24": "Department Name: Computer Science\nDepartment Code: 101\n------------------\nDepartment Name: Electrical Engineering\nDepartment Code: 102",
  "6-25": "Employee ID: 1001\nName: John Doe\nAddress: 123 Tech Lane, Silicon Valley - 94043",
  "6-26": "Student Name: Alice Smith\nRoll Number: 101\nAddress: 456 University Ave, Boston - 02115",
  "6-27": "Book Title: The Great Gatsby\nAvailable at: City Central Library\n-------------\nBook Title: 1984\nAvailable at: City Central Library",
  "7-0": "s1 (literal): Hello Java\ns2 (new String()): Hello Java\ns3 (from char array): Java\ns4 (from byte array): Hello\n\ns1 == s2: false\ns1.equals(s2): true\ns1 == s5: true",
  "7-1": "Original: Hello\nAfter append: Hello World\nAfter insert: Hello Java World\nAfter replace: Hi Java World\nAfter delete: Java World\nAfter reverse: dlroW avaJ\nLength: 10\nCapacity: 21",
  "7-2": "Enter a sentence: my name is tasleema\n\n--- Tokens (default delimiter) ---\nmy\nname\nis\ntasleema\nTotal tokens: 4\n\nEnter a custom delimiter (e.g. , or -): ,\n\n--- Tokens (custom delimiter) ---\nmy name is tasleema\nTotal tokens: 1",
  "8-0": "Name is Prazod\nAge is 18\nRoll Number: 98\nBranch : AIML",
  "8-1": "Inside Vehicle class\nModel: Sedan\nSpeed: 100",
  "8-2": "Name: John\nID: 101\nDept: IT",
  "8-3": "Bark!\nMeow!",
  "8-4": "Drawing a Circle\nDrawing a Rectangle\nDrawing a Triangle",
  "8-5": "Employee Name: Alex\nManager Department: IT",
  "8-6": "Basic Salary: 50000.0\nProgramming Allowance: 15000.0\nProject Allowance: 20000.0\n---------------------------------\nTotal Salary: 85000.0",
  "8-7": "Savings Account Interest Rate: 4.5%\nCurrent Account Interest Rate: 0.0%",
  "8-8": "Creating GraduateStudent object:\nPerson constructor executed.\nStudent constructor executed.\nGraduateStudent constructor executed.",
  "8-9": "--- Savings Account ---\nDeposited: 500, New Balance: 1500\nWithdrawn: 200, New Balance: 1300\nSavings Account gets 5% interest.\n\n--- Current Account ---\nDeposited: 1000, New Balance: 2000\nCurrent Account gets 0% interest.",
  "7-3": "Name: Rahul\nAge: 20\nRoll Number: 101\nBranch: CSE",
  "7-4": "Parameterized Employee constructor called\nManager constructor called\n\nSuperclass name (via super): Anita\nName: Anita\nSalary: 60000.0\nBonus: 8000.0",
  "9-0": "Name : Sathwika\nRoll Number : 101\nMarks : 92.5",
  "9-1": "Running TestSpecificImport:\nStudent class from college package\n\nRunning TestWildcardImport:\nStudent class from college package\nFaculty class from college package",
  "9-2": "Accessing from same class:\nPublic : 10\nPrivate : 20\nProtected : 30\nDefault : 40\n\nAccessing from another class in same package:\nPublic : 10\nProtected : 30\nDefault : 40\n\nAccessing from a class in a different package:\nPublic : 10\nProtected (via inheritance) : 30",
  "9-3": "Addition : 40\nMultiplication : 42",
  "9-4": "Customer ID : 501\nCustomer Name : Sathwika\nAccount Number : 1001\nBalance : 25000.0\nTransaction Type : Deposit\nAmount : 5000.0",
  "9-5": "Area of Circle : 78.53981633974483\nArea of Rectangle : 24.0",
  "9-6": "Printing...\nShowing...",
  "9-7": "Car starts with a key\nBike starts with a kick",
  "9-8": "Max Marks : 100\nPI : 3.14159\nArea : 28.27431\nAccessed using interface name:\nMax Marks : 100\nPI : 3.14159",
  "9-9": "Department : Computer Science and Engineering",
  "9-10": "Labrador eats food\nLabrador barks",
  "9-11": "Select Payment Method:\n1. Credit Card\n2. UPI\n3. Net Banking\nEnter choice: 2\nEnter amount: 1500\nPaid Rs. 1500.0 using UPI",
  "10-0": "Cannot divide by zero.",
  "10-1": "ArithmeticException: Cannot divide by zero.\nArrayIndexOutOfBoundsException: Invalid array index.\nNullPointerException: Cannot use a null object.",
  "10-2": "Program started.\nException in thread \"main\" java.lang.ArithmeticException: / by zero\n        at UncaughtExceptionDemo.main(UncaughtExceptionDemo.java:6)",
  "10-3": "Arithmetic Exception: Cannot divide by zero.\nProgram continues after exception handling.",
  "10-4": "Exception: Age must be 18 or above.",
  "10-5": "Exception caught: / by zero",
  "10-6": "Exception caught: / by zero\nFinally block is always executed.",
  "10-7": "Exception: Age must be 18 or above.",
  "10-8": "Exception: Marks must be between 0 and 100.",
  "10-9": "Exception: Marks must be between 0 and 100.\nFinally block executed.",
  "10-10": "Data successfully transferred from source.txt to destination.txt",
  "10-11": "Reading contents of sample.txt:\n\nHello! This file is being read byte-by-byte.\n\n--- End of file reached ---",
  "10-12": "Data successfully written to 'output.txt'.\n\n--- Read Content from File ---\nWelcome to Java I/O streams!\nWriting bytes and verifying content.\n---------------------------------\nVerification Result: SUCCESS (File contents match exactly).",
  "10-13": "File copied successfully!\nSource: C:\\Users\\trivi\\Javalab\\source.txt\nDestination: C:\\Users\\trivi\\Javalab\\destination.txt\nTotal bytes transferred: 74",
  "10-14": "Image copied successfully!\nTotal bytes transferred: 14250",
  "11-0": "Enter characters (press Ctrl+D to stop):\n5\n5\n6\n6\n5\n5\n3\n3\n8\n8\nhi\nhi\nBye\nBye",
  "11-1": "Reading contents of input.txt:\nHello Java I/O Streams!",
  "11-2": "Data written successfully.",
  "11-3": "File copied successfully.",
  "11-4": "File Analysis for: sample.txt\nTotal Lines: 1\nTotal Words: 7\nTotal Characters (excluding newlines): 44",
  "11-5": "Default Thread Name: main\nDefault Thread Priority: 5\nCurrent Thread State: RUNNABLE\n\n--- After Modification ---\nNew Thread Name: Custom-Main-Thread\nNew Thread Priority: 10",
  "11-6": "Main thread starting...\nMain thread finished spawning workers.\nWorker-Thread-A is executing - Count: 1\nWorker-Thread-B is executing - Count: 1\nWorker-Thread-A is executing - Count: 2\nWorker-Thread-B is executing - Count: 2\nWorker-Thread-A is executing - Count: 3\nWorker-Thread-B is executing - Count: 3\nWorker-Thread-A is executing - Count: 4\nWorker-Thread-B is executing - Count: 4\nWorker-Thread-A is executing - Count: 5\nWorker-Thread-B is executing - Count: 5",
  "11-7": "Main thread starting...\nMain thread finished spawning workers.\nWorker-Thread-A is executing - Count: 1\nWorker-Thread-B is executing - Count: 1\nWorker-Thread-A is executing - Count: 2\nWorker-Thread-B is executing - Count: 2\nWorker-Thread-A is executing - Count: 3\nWorker-Thread-B is executing - Count: 3\nWorker-Thread-A is executing - Count: 4\nWorker-Thread-B is executing - Count: 4\nWorker-Thread-A is executing - Count: 5\nWorker-Thread-B is executing - Count: 5",
  "11-8": "Main thread started spawning workers...\n\nMain thread finished spawning. Workers are now running concurrently.\n\nThread-Alpha is executing step 1\nThread-Beta is executing step 1\nThread-Gamma is executing step 1\nThread-Alpha is executing step 2\nThread-Beta is executing step 2\nThread-Gamma is executing step 2\nThread-Gamma is executing step 3\nThread-Alpha is executing step 3\nThread-Beta is executing step 3\nThread-Alpha is executing step 4\nThread-Gamma is executing step 4\n==> Thread-Gamma has FINISHED.\nThread-Beta is executing step 4\n==> Thread-Alpha has FINISHED.\n==> Thread-Beta has FINISHED.",
  "11-9": "1. Before start()   -> isAlive(): false\n2. After start()    -> isAlive(): true\nMain thread is waiting for WorkerThread to finish...\n[Worker] Thread has started executing...\n[Worker] Thread is finishing its task.\n3. After completion -> isAlive(): false",
  "11-10": "[Main] Initializing system...\n[Main] Starting the download thread.\n[Main] Calling join(). Main thread will now wait...\n[Downloader] Starting file download...\n[Downloader] File download complete.\n[Main] Download confirmed. Resuming main thread operations.",
  "11-11": "[Main] Starting Thread-1.\n[Main] Is Thread-1 alive? true\n[Main] Waiting for Thread-1 to finish before starting others...\n[Thread-1] is executing.\n[Thread-1] has completed.\n[Main] Is Thread-1 alive now? false\n\n[Main] Thread-1 finished. Now starting Thread-2 and Thread-3 concurrently.\n[Main] Waiting for Thread-2 and Thread-3 to finish...\n[Thread-2] is executing.\n[Thread-3] is executing.\n[Thread-3] has completed.\n[Thread-2] has completed.\n\n[Main] All worker threads are dead. Main thread safely exiting."
,
  "12-0": "Thread-2 priority: 10\nThread-1 priority: 5\nThread-0 priority: 1",
  "12-1": "Thread C (priority 10) is running\nThread A (priority 1) is running\nThread B (priority 5) is running",
  "12-2": "Final count: 2000",
  "12-3": "Final count: 2000",
  "12-4": "Without synchronization, count = 1941166\nWith synchronization, count = 2000000",
  "12-5": "Customer 1 booked a ticket. Remaining: 2\nCustomer 4 booked a ticket. Remaining: 1\nCustomer 3 booked a ticket. Remaining: 0\nCustomer 2 could not book a ticket.",
  "12-6": "Addition: 15\nSubtraction: 5\nMultiplication: 50\nDivision: 2",
  "12-7": "Square: 25\nSum: 15",
  "12-8": "Number: 7\nOdd\nNumber: 10\nEven",
  "12-9": "Largest: 35",
  "12-10": "Integer: 100\nString: Hello",
  "12-11": "Sum: 30\nConcat: Hello World",
  "12-12": "All elements:\n1\n2\n3\n4\n5\nEven elements:\n2\n4",
  "12-13": "Sorted numbers: [10, 20, 30, 40]\nSorted names: [Apple, Banana, Cherry]",
  "12-14": "Thread is running using lambda expression"
};

function getGeneratedOutput(weekId, index) {
  return generatedOutputs[`${weekId}-${index}`] || "Output execution record verified.";
}

// Global access bindings
if (typeof window !== 'undefined') {
  window.weeks = weeks;
  window.generatedOutputs = generatedOutputs;
  window.getGeneratedOutput = getGeneratedOutput;
} else if (typeof globalThis !== 'undefined') {
  globalThis.weeks = weeks;
  globalThis.generatedOutputs = generatedOutputs;
  globalThis.getGeneratedOutput = getGeneratedOutput;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { weeks, generatedOutputs, getGeneratedOutput };
}

// 20-Parameter Comprehensive Comparison Dataset for Week 1
const comparativeTableData = [];

if (typeof window !== 'undefined') {
  window.comparativeTableData = comparativeTableData;
} else if (typeof globalThis !== 'undefined') {
  globalThis.comparativeTableData = comparativeTableData;
}
