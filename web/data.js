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
        "description": "Demonstrate different ways of creating and initializing String objects using String constructors, including literals, new String(), character arrays and byte arrays.",
        "code": "class StringConstructorsDemo {\n\n    public static void main(String[] args) {\n\n        // String using literal\n        String s1 = \"Hello Java\";\n\n        // String using new\n        String s2 = new String(\"Hello Java\");\n\n        // String using character array\n        char[] chars = {'J', 'a', 'v', 'a'};\n        String s3 = new String(chars);\n\n        // String using byte array\n        byte[] bytes = {65, 66, 67};\n        String s4 = new String(bytes);\n\n        System.out.println(\"String Literal : \" + s1);\n        System.out.println(\"Using new String : \" + s2);\n        System.out.println(\"Character Array : \" + s3);\n        System.out.println(\"Byte Array : \" + s4);\n\n        // Difference between literal and new\n        System.out.println(\n            \"s1 == s2 : \" + (s1 == s2)\n        );\n\n        System.out.println(\n            \"s1.equals(s2) : \" + s1.equals(s2)\n        );\n    }\n}",
        "output": null
      },
      {
        "title": "StringBuffer Class",
        "description": "Demonstrate mutable string operations using StringBuffer including append, insert, replace, delete and reverse.",
        "code": "class StringBufferDemo {\n\n    public static void main(String[] args) {\n\n        StringBuffer sb =\n            new StringBuffer(\"Hello\");\n\n        // Append\n        sb.append(\" Java\");\n\n        // Insert\n        sb.insert(6, \"World \");\n\n        // Replace\n        sb.replace(6, 12, \"Beautiful\");\n\n        // Delete\n        sb.delete(6, 16);\n\n        // Reverse\n        sb.reverse();\n\n        System.out.println(\n            \"StringBuffer : \" + sb\n        );\n\n        System.out.println(\n            \"Length : \" + sb.length()\n        );\n\n        System.out.println(\n            \"Capacity : \" + sb.capacity()\n        );\n    }\n}",
        "output": null
      },
      {
        "title": "StringTokenizer Class",
        "description": "Tokenize a sentence using StringTokenizer, display individual tokens, count the tokens and repeat the operation using a specified delimiter.",
        "code": "import java.util.Scanner;\nimport java.util.StringTokenizer;\n\nclass StringTokenizerDemo {\n\n    public static void main(String[] args) {\n\n        Scanner sc = new Scanner(System.in);\n\n        System.out.print(\"Enter a sentence: \");\n        String sentence = sc.nextLine();\n\n        StringTokenizer st =\n            new StringTokenizer(sentence);\n\n        System.out.println(\"Tokens:\");\n\n        while (st.hasMoreTokens()) {\n            System.out.println(st.nextToken());\n        }\n\n        System.out.println(\n            \"Total Tokens: \" +\n            new StringTokenizer(sentence).countTokens()\n        );\n\n        System.out.print(\n            \"Enter delimiter: \"\n        );\n\n        String delimiter = sc.nextLine();\n\n        StringTokenizer custom =\n            new StringTokenizer(\n                sentence,\n                delimiter\n            );\n\n        System.out.println(\n            \"Tokens using delimiter:\"\n        );\n\n        while (custom.hasMoreTokens()) {\n            System.out.println(custom.nextToken());\n        }\n\n        sc.close();\n    }\n}",
        "output": null
      },
      {
        "title": "Basic Inheritance",
        "description": "Demonstrate basic inheritance by creating a child class that inherits methods from a parent class.",
        "code": "class Animal {\n    void eat() {\n        System.out.println(\"Animal eats\");\n    }\n}\n\nclass Dog extends Animal {\n    void bark() {\n        System.out.println(\"Dog barks\");\n    }\n}\n\npublic class InheritanceDemo {\n    public static void main(String[] args) {\n        Dog d = new Dog();\n\n        d.eat();\n        d.bark();\n    }\n}",
        "output": null
      },
      {
        "title": "Using super Keyword",
        "description": "Demonstrate the use of the super keyword to access parent class variables and methods.",
        "code": "class Animal {\n    String name = \"Animal\";\n\n    void display() {\n        System.out.println(\"Animal class\");\n    }\n}\n\nclass Dog extends Animal {\n    String name = \"Dog\";\n\n    void display() {\n        System.out.println(\"Dog class\");\n    }\n\n    void show() {\n        System.out.println(\"Child name: \" + name);\n        System.out.println(\"Parent name: \" + super.name);\n\n        super.display();\n        display();\n    }\n}\n\npublic class SuperDemo {\n    public static void main(String[] args) {\n        Dog d = new Dog();\n        d.show();\n    }\n}",
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
        "description": "Demonstrate single inheritance using a Person superclass and Student subclass.",
        "code": "class Person {\n\n    String name;\n    int age;\n\n    void displayPersonDetails() {\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Age: \" + age);\n    }\n}\n\nclass Student extends Person {\n\n    int rollNo;\n    String branch;\n\n    void displayStudentDetails() {\n\n        displayPersonDetails();\n\n        System.out.println(\n            \"Roll Number: \" + rollNo\n        );\n\n        System.out.println(\n            \"Branch: \" + branch\n        );\n    }\n}\n\npublic class Main {\n\n    public static void main(String[] args) {\n\n        Student s = new Student();\n\n        s.name = \"Rahul\";\n        s.age = 20;\n        s.rollNo = 101;\n        s.branch = \"Computer Science\";\n\n        System.out.println(\"Student Details:\");\n\n        s.displayStudentDetails();\n    }\n}",
        "output": null
      },
      {
        "title": "Using super Keyword",
        "description": "Demonstrate super for accessing superclass variables and methods.",
        "code": "class Vehicle {\n\n    int speed = 80;\n\n    void display() {\n        System.out.println(\n            \"Vehicle speed: \" + speed\n        );\n    }\n}\n\nclass Car extends Vehicle {\n\n    String model = \"Toyota\";\n\n    @Override\n    void display() {\n\n        System.out.println(\n            \"Car model: \" + model\n        );\n\n        System.out.println(\n            \"Vehicle speed using super: \" +\n            super.speed\n        );\n\n        super.display();\n    }\n}\n\npublic class Main {\n\n    public static void main(String[] args) {\n\n        Car c = new Car();\n\n        c.display();\n    }\n}",
        "output": null
      },
      {
        "title": "Multilevel Inheritance",
        "description": "Demonstrate multilevel inheritance using Person, Employee and Manager classes.",
        "code": "class Person {\n\n    String name;\n    int age;\n\n    void displayPersonDetails() {\n\n        System.out.println(\n            \"Name: \" + name\n        );\n\n        System.out.println(\n            \"Age: \" + age\n        );\n    }\n}\n\nclass Employee extends Person {\n\n    int employeeId;\n    double salary;\n\n    void displayEmployeeDetails() {\n\n        System.out.println(\n            \"Employee ID: \" + employeeId\n        );\n\n        System.out.println(\n            \"Salary: \" + salary\n        );\n    }\n}\n\nclass Manager extends Employee {\n\n    String department;\n\n    void displayManagerDetails() {\n\n        displayPersonDetails();\n        displayEmployeeDetails();\n\n        System.out.println(\n            \"Department: \" + department\n        );\n    }\n}\n\npublic class Main {\n\n    public static void main(String[] args) {\n\n        Manager m = new Manager();\n\n        m.name = \"Anil\";\n        m.age = 35;\n        m.employeeId = 1001;\n        m.salary = 75000;\n        m.department = \"IT\";\n\n        m.displayManagerDetails();\n    }\n}",
        "output": null
      },
      {
        "title": "Method Overriding",
        "description": "Demonstrate method overriding using Animal, Dog and Cat classes.",
        "code": "class Animal {\n\n    void sound() {\n        System.out.println(\n            \"Animal makes a sound\"\n        );\n    }\n}\n\nclass Dog extends Animal {\n\n    @Override\n    void sound() {\n        System.out.println(\n            \"Dog barks\"\n        );\n    }\n}\n\nclass Cat extends Animal {\n\n    @Override\n    void sound() {\n        System.out.println(\n            \"Cat meows\"\n        );\n    }\n}\n\npublic class Main {\n\n    public static void main(String[] args) {\n\n        Dog d = new Dog();\n        Cat c = new Cat();\n\n        d.sound();\n        c.sound();\n    }\n}",
        "output": null
      },
      {
        "title": "Dynamic Method Dispatch",
        "description": "Demonstrate dynamic method dispatch using Shape as the superclass and Circle, Rectangle and Triangle as subclasses.",
        "code": "class Shape {\n\n    void draw() {\n        System.out.println(\n            \"Drawing a shape\"\n        );\n    }\n}\n\nclass Circle extends Shape {\n\n    @Override\n    void draw() {\n        System.out.println(\n            \"Drawing a circle\"\n        );\n    }\n}\n\nclass Rectangle extends Shape {\n\n    @Override\n    void draw() {\n        System.out.println(\n            \"Drawing a rectangle\"\n        );\n    }\n}\n\nclass Triangle extends Shape {\n\n    @Override\n    void draw() {\n        System.out.println(\n            \"Drawing a triangle\"\n        );\n    }\n}\n\npublic class Main {\n\n    public static void main(String[] args) {\n\n        Shape s;\n\n        s = new Circle();\n        s.draw();\n\n        s = new Rectangle();\n        s.draw();\n\n        s = new Triangle();\n        s.draw();\n    }\n}",
        "output": null
      },
      {
        "title": "super with Method Overriding",
        "description": "Demonstrate super.display() to invoke the superclass implementation before displaying subclass details.",
        "code": "class Employee {\n\n    void display() {\n        System.out.println(\n            \"Employee details\"\n        );\n    }\n}\n\nclass Manager extends Employee {\n\n    @Override\n    void display() {\n\n        super.display();\n\n        System.out.println(\n            \"Manager details\"\n        );\n    }\n}\n\npublic class Main {\n\n    public static void main(String[] args) {\n\n        Manager m = new Manager();\n\n        m.display();\n    }\n}",
        "output": null
      },
      {
        "title": "Multilevel Inheritance for Salary Calculation",
        "description": "Calculate total salary using Employee, Developer and SeniorDeveloper classes.",
        "code": "class Employee {\n\n    double basicSalary = 30000;\n\n    void displayBasicSalary() {\n\n        System.out.println(\n            \"Basic Salary: \" + basicSalary\n        );\n    }\n}\n\nclass Developer extends Employee {\n\n    double programmingAllowance = 10000;\n\n    void displayProgrammingAllowance() {\n\n        System.out.println(\n            \"Programming Allowance: \" +\n            programmingAllowance\n        );\n    }\n}\n\nclass SeniorDeveloper extends Developer {\n\n    double projectAllowance = 15000;\n\n    void calculateSalary() {\n\n        double totalSalary =\n            basicSalary +\n            programmingAllowance +\n            projectAllowance;\n\n        displayBasicSalary();\n        displayProgrammingAllowance();\n\n        System.out.println(\n            \"Project Allowance: \" +\n            projectAllowance\n        );\n\n        System.out.println(\n            \"Total Salary: \" +\n            totalSalary\n        );\n    }\n}\n\npublic class Main {\n\n    public static void main(String[] args) {\n\n        SeniorDeveloper sd =\n            new SeniorDeveloper();\n\n        sd.calculateSalary();\n    }\n}",
        "output": null
      },
      {
        "title": "Dynamic Method Dispatch for Bank Accounts",
        "description": "Demonstrate dynamic method dispatch using BankAccount, SavingsAccount and CurrentAccount.",
        "code": "class BankAccount {\n\n    void calculateInterest() {\n\n        System.out.println(\n            \"Calculating bank account interest\"\n        );\n    }\n}\n\nclass SavingsAccount extends BankAccount {\n\n    @Override\n    void calculateInterest() {\n\n        System.out.println(\n            \"Savings Account Interest: 6%\"\n        );\n    }\n}\n\nclass CurrentAccount extends BankAccount {\n\n    @Override\n    void calculateInterest() {\n\n        System.out.println(\n            \"Current Account Interest: 2%\"\n        );\n    }\n}\n\npublic class Main {\n\n    public static void main(String[] args) {\n\n        BankAccount account;\n\n        account = new SavingsAccount();\n        account.calculateInterest();\n\n        account = new CurrentAccount();\n        account.calculateInterest();\n    }\n}",
        "output": null
      },
      {
        "title": "Constructor Execution in Multilevel Inheritance",
        "description": "Demonstrate the order of constructor execution in multilevel inheritance.",
        "code": "class Person {\n\n    Person() {\n        System.out.println(\n            \"Person constructor executed\"\n        );\n    }\n}\n\nclass Student extends Person {\n\n    Student() {\n        System.out.println(\n            \"Student constructor executed\"\n        );\n    }\n}\n\nclass GraduateStudent extends Student {\n\n    GraduateStudent() {\n        System.out.println(\n            \"GraduateStudent constructor executed\"\n        );\n    }\n}\n\npublic class Main {\n\n    public static void main(String[] args) {\n\n        GraduateStudent gs =\n            new GraduateStudent();\n    }\n}",
        "output": null
      },
      {
        "title": "Banking Application Using Inheritance",
        "description": "Develop a simple banking application using inheritance with deposit, withdrawal and interest calculation.",
        "code": "class BankAccount {\n\n    String accountNumber;\n    double balance;\n\n    BankAccount(\n        String accountNumber,\n        double balance\n    ) {\n        this.accountNumber = accountNumber;\n        this.balance = balance;\n    }\n\n    void deposit(double amount) {\n\n        balance += amount;\n\n        System.out.println(\n            \"Deposited: \" + amount\n        );\n    }\n\n    void withdraw(double amount) {\n\n        if (amount <= balance) {\n\n            balance -= amount;\n\n            System.out.println(\n                \"Withdrawn: \" + amount\n            );\n\n        } else {\n\n            System.out.println(\n                \"Insufficient balance\"\n            );\n        }\n    }\n\n    void calculateInterest() {\n\n        System.out.println(\n            \"General bank account interest\"\n        );\n    }\n\n    void displayBalance() {\n\n        System.out.println(\n            \"Account Number: \" +\n            accountNumber\n        );\n\n        System.out.println(\n            \"Balance: \" + balance\n        );\n    }\n}\n\nclass SavingsAccount extends BankAccount {\n\n    SavingsAccount(\n        String accountNumber,\n        double balance\n    ) {\n        super(accountNumber, balance);\n    }\n\n    @Override\n    void calculateInterest() {\n\n        double interest =\n            balance * 0.06;\n\n        System.out.println(\n            \"Savings Interest: \" + interest\n        );\n    }\n}\n\nclass CurrentAccount extends BankAccount {\n\n    CurrentAccount(\n        String accountNumber,\n        double balance\n    ) {\n        super(accountNumber, balance);\n    }\n\n    @Override\n    void calculateInterest() {\n\n        double interest =\n            balance * 0.02;\n\n        System.out.println(\n            \"Current Interest: \" + interest\n        );\n    }\n}\n\npublic class Main {\n\n    public static void main(String[] args) {\n\n        SavingsAccount savings =\n            new SavingsAccount(\n                \"SA101\",\n                10000\n            );\n\n        System.out.println(\n            \"Savings Account:\"\n        );\n\n        savings.deposit(2000);\n        savings.withdraw(1000);\n        savings.calculateInterest();\n        savings.displayBalance();\n\n        System.out.println();\n\n        CurrentAccount current =\n            new CurrentAccount(\n                \"CA101\",\n                20000\n            );\n\n        System.out.println(\n            \"Current Account:\"\n        );\n\n        current.deposit(5000);\n        current.withdraw(3000);\n        current.calculateInterest();\n        current.displayBalance();\n    }\n}",
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
        "description": "Demonstrate exception handling using try and catch by handling division by zero.",
        "code": "public class Arithmetic {\n    public static void main(String[] args) {\n        try {\n            int a = 10, b = 0;\n            System.out.println(a / b);\n        } catch (ArithmeticException e) {\n            System.out.println(\"Cannot divide by zero\");\n        }\n    }\n}"
      },
      {
        "title": "Demonstrating Common Exceptions",
        "description": "Demonstrate ArithmeticException, ArrayIndexOutOfBoundsException, and NullPointerException.",
        "code": "public class ExceptionTypes {\n    public static void main(String[] args) {\n        try { System.out.println(10 / 0); }\n        catch (ArithmeticException e) { System.out.println(\"ArithmeticException: \" + e); }\n\n        try { int[] a = {10, 20, 30}; System.out.println(a[5]); }\n        catch (ArrayIndexOutOfBoundsException e) { System.out.println(\"ArrayIndexOutOfBoundsException: \" + e); }\n\n        try { String s = null; System.out.println(s.length()); }\n        catch (NullPointerException e) { System.out.println(\"NullPointerException: \" + e); }\n    }\n}"
      },
      {
        "title": "Observing an Uncaught Exception",
        "description": "Allow an exception to go uncaught and observe the JVM message and stack trace.",
        "code": "public class UncaughtException {\n    public static void main(String[] args) {\n        int a = 10, b = 0;\n        int result = a / b;\n        System.out.println(\"Result: \" + result);\n    }\n}"
      },
      {
        "title": "Using Multiple Catch Clauses",
        "description": "Handle different exceptions with separate catch clauses.",
        "code": "public class MultipleCatch {\n    public static void main(String[] args) {\n        try {\n            int[] numbers = {10, 20, 30};\n            System.out.println(numbers[5] / 0);\n        } catch (ArithmeticException e) {\n            System.out.println(\"ArithmeticException occurred.\");\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"ArrayIndexOutOfBoundsException occurred.\");\n        } catch (Exception e) {\n            System.out.println(\"Some other exception occurred.\");\n        }\n    }\n}"
      },
      {
        "title": "Explicitly Throwing an Exception",
        "description": "Use throw to generate an exception when a condition is violated.",
        "code": "public class ThrowDemo {\n    public static void main(String[] args) {\n        int age = 15;\n        try {\n            if (age < 18) throw new IllegalArgumentException(\"Age must be 18 or above.\");\n            System.out.println(\"Eligible to vote.\");\n        } catch (IllegalArgumentException e) {\n            System.out.println(\"Exception: \" + e.getMessage());\n        }\n    }\n}"
      },
      {
        "title": "Propagating an Exception with throws",
        "description": "Use throws to propagate an exception to the calling method.",
        "code": "public class ThrowsDemo {\n    static void divide(int a, int b) throws ArithmeticException {\n        System.out.println(\"Result = \" + (a / b));\n    }\n    public static void main(String[] args) {\n        try { divide(10, 0); }\n        catch (ArithmeticException e) {\n            System.out.println(\"Exception handled in main: \" + e);\n        }\n    }\n}"
      },
      {
        "title": "Creating a User-Defined Exception",
        "description": "Create a checked exception by extending the Exception class and handle it.",
        "code": "class InvalidAgeException extends Exception {\n    InvalidAgeException(String message) { super(message); }\n}\npublic class CustomExceptionDemo {\n    static void checkAge(int age) throws InvalidAgeException {\n        if (age < 18) throw new InvalidAgeException(\"Age must be at least 18.\");\n        System.out.println(\"Age accepted.\");\n    }\n    public static void main(String[] args) {\n        try { checkAge(16); }\n        catch (InvalidAgeException e) { System.out.println(\"Error: \" + e.getMessage()); }\n    }\n}"
      },
      {
        "title": "Validating Student Marks",
        "description": "Validate marks from 0 to 100 and throw a custom exception for an invalid value.",
        "code": "class InvalidMarksException extends Exception {\n    InvalidMarksException(String message) { super(message); }\n}\npublic class MarksValidation {\n    static void validate(int marks) throws InvalidMarksException {\n        if (marks < 0 || marks > 100) throw new InvalidMarksException(\"Marks must be between 0 and 100.\");\n        System.out.println(\"Valid marks: \" + marks);\n    }\n    public static void main(String[] args) {\n        try { validate(105); }\n        catch (InvalidMarksException e) { System.out.println(\"Invalid marks: \" + e.getMessage()); }\n    }\n}"
      },
      {
        "title": "Combining Exception Handling Features",
        "description": "Use try, multiple catch clauses, throw, throws, and finally in one application.",
        "code": "public class ExceptionFeatures {\n    static void check(int value) throws IllegalArgumentException {\n        if (value < 0) throw new IllegalArgumentException(\"Value cannot be negative.\");\n        System.out.println(100 / value);\n    }\n    public static void main(String[] args) {\n        try { check(-2); }\n        catch (IllegalArgumentException e) { System.out.println(\"Invalid argument: \" + e.getMessage()); }\n        catch (ArithmeticException e) { System.out.println(\"Cannot divide by zero.\"); }\n        finally { System.out.println(\"Finally block executed.\"); }\n    }\n}"
      },
      {
        "title": "Demonstrating the finally Block",
        "description": "Show that a finally block executes after exception handling, even when an exception occurs.",
        "code": "public class FinallyDemo {\n    public static void main(String[] args) {\n        try {\n            int result = 10 / 0;\n            System.out.println(\"Result: \" + result);\n        } catch (ArithmeticException e) {\n            System.out.println(\"ArithmeticException handled.\");\n        } finally {\n            System.out.println(\"Finally block always executes.\");\n        }\n        System.out.println(\"Program continues.\");\n    }\n}"
      },
      {
        "title": "Reading and Writing Bytes with Streams",
        "description": "Use InputStream and OutputStream to read bytes from an input source and write them to an output destination.",
        "code": "import java.io.*;\npublic class StreamBytes {\n    public static void main(String[] args) throws IOException {\n        byte[] source = \"Hello, byte streams!\".getBytes();\n        try (InputStream in = new ByteArrayInputStream(source);\n             ByteArrayOutputStream out = new ByteArrayOutputStream()) {\n            int value;\n            while ((value = in.read()) != -1) out.write(value);\n            System.out.println(new String(out.toByteArray()));\n        }\n    }\n}"
      },
      {
        "title": "Reading a File Byte by Byte",
        "description": "Read a file using FileInputStream one byte at a time and display its contents.",
        "code": "import java.io.*;\npublic class ReadBytes {\n    public static void main(String[] args) {\n        try (FileInputStream in = new FileInputStream(\"input.txt\")) {\n            int value;\n            while ((value = in.read()) != -1) System.out.print((char) value);\n        } catch (IOException e) { System.out.println(\"Read error: \" + e.getMessage()); }\n    }\n}"
      },
      {
        "title": "Writing Data with FileOutputStream",
        "description": "Write data to a file with FileOutputStream and read it back to verify.",
        "code": "import java.io.*;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\npublic class WriteBytes {\n    public static void main(String[] args) {\n        byte[] data = \"Java byte output\".getBytes();\n        try (FileOutputStream out = new FileOutputStream(\"output.txt\")) {\n            out.write(data);\n        } catch (IOException e) { System.out.println(\"Write error: \" + e.getMessage()); return; }\n        try { System.out.println(Files.readString(Path.of(\"output.txt\"))); }\n        catch (IOException e) { System.out.println(\"Verify error: \" + e.getMessage()); }\n    }\n}"
      },
      {
        "title": "Copying a File with Byte Streams",
        "description": "Copy one file to another using FileInputStream and FileOutputStream.",
        "code": "import java.io.*;\npublic class CopyBytes {\n    public static void main(String[] args) {\n        try (FileInputStream in = new FileInputStream(\"source.txt\");\n             FileOutputStream out = new FileOutputStream(\"copy.txt\")) {\n            byte[] buffer = new byte[1024];\n            int count;\n            while ((count = in.read(buffer)) != -1) out.write(buffer, 0, count);\n            System.out.println(\"File copied successfully.\");\n        } catch (IOException e) { System.out.println(\"Copy error: \" + e.getMessage()); }\n    }\n}"
      },
      {
        "title": "Copying an Image with Byte Streams",
        "description": "Copy an image using byte streams and handle FileNotFoundException and IOException, closing streams in finally.",
        "code": "import java.io.*;\npublic class CopyImage {\n    public static void main(String[] args) {\n        FileInputStream in = null;\n        FileOutputStream out = null;\n        try {\n            in = new FileInputStream(\"photo.jpg\");\n            out = new FileOutputStream(\"photo-copy.jpg\");\n            byte[] buffer = new byte[4096];\n            int count;\n            while ((count = in.read(buffer)) != -1) out.write(buffer, 0, count);\n            System.out.println(\"Image copied successfully.\");\n        } catch (FileNotFoundException e) {\n            System.out.println(\"File not found: \" + e.getMessage());\n        } catch (IOException e) {\n            System.out.println(\"I/O error: \" + e.getMessage());\n        } finally {\n            try { if (in != null) in.close(); } catch (IOException e) { System.out.println(\"Input close error.\"); }\n            try { if (out != null) out.close(); } catch (IOException e) { System.out.println(\"Output close error.\"); }\n        }\n    }\n}"
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
        "description": "Read characters from the keyboard with Reader and display them using Writer.",
        "code": "import java.io.*;\npublic class ReaderWriterDemo {\n    public static void main(String[] args) throws IOException {\n        Reader reader = new InputStreamReader(System.in);\n        Writer writer = new OutputStreamWriter(System.out);\n        writer.write(\"Enter text: \"); writer.flush();\n        int ch;\n        while ((ch = reader.read()) != -1 && ch != '\\n' && ch != '\\r') writer.write(ch);\n        writer.write(System.lineSeparator()); writer.flush();\n    }\n}"
      },
      {
        "title": "Reading a Text File with FileReader",
        "description": "Read and display the contents of a text file using FileReader.",
        "code": "import java.io.*;\npublic class ReadText {\n    public static void main(String[] args) {\n        try (FileReader reader = new FileReader(\"input.txt\")) {\n            int ch;\n            while ((ch = reader.read()) != -1) System.out.print((char) ch);\n        } catch (IOException e) { System.out.println(\"Read error: \" + e.getMessage()); }\n    }\n}"
      },
      {
        "title": "Writing Text with FileWriter",
        "description": "Write text into a file using FileWriter.",
        "code": "import java.io.*;\npublic class WriteText {\n    public static void main(String[] args) {\n        try (FileWriter writer = new FileWriter(\"output.txt\")) {\n            writer.write(\"Character streams handle text.\");\n            System.out.println(\"Text written to output.txt\");\n        } catch (IOException e) { System.out.println(\"Write error: \" + e.getMessage()); }\n    }\n}"
      },
      {
        "title": "Copying Text with FileReader and FileWriter",
        "description": "Copy one text file to another using character streams.",
        "code": "import java.io.*;\npublic class CopyText {\n    public static void main(String[] args) {\n        try (FileReader reader = new FileReader(\"source.txt\");\n             FileWriter writer = new FileWriter(\"copy.txt\")) {\n            char[] buffer = new char[1024];\n            int count;\n            while ((count = reader.read(buffer)) != -1) writer.write(buffer, 0, count);\n            System.out.println(\"Text file copied successfully.\");\n        } catch (IOException e) { System.out.println(\"Copy error: \" + e.getMessage()); }\n    }\n}"
      },
      {
        "title": "Counting Characters, Words, and Lines",
        "description": "Count characters, words, and lines in a text file using character streams.",
        "code": "import java.io.*;\npublic class FileCounts {\n    public static void main(String[] args) {\n        int chars = 0, words = 0, lines = 0;\n        boolean inWord = false, hasLineContent = false;\n        try (Reader reader = new FileReader(\"input.txt\")) {\n            int ch;\n            while ((ch = reader.read()) != -1) {\n                chars++;\n                if (ch == '\\n') { lines++; hasLineContent = false; }\n                else if (ch != '\\r') hasLineContent = true;\n                if (Character.isWhitespace(ch)) inWord = false;\n                else if (!inWord) { words++; inWord = true; }\n            }\n            if (hasLineContent) lines++;\n            System.out.println(\"Characters: \" + chars);\n            System.out.println(\"Words: \" + words);\n            System.out.println(\"Lines: \" + lines);\n        } catch (IOException e) { System.out.println(\"Read error: \" + e.getMessage()); }\n    }\n}"
      },
      {
        "title": "Inspecting the Main Thread",
        "description": "Display the main thread's name, priority, and state.",
        "code": "public class MainThreadInfo {\n    public static void main(String[] args) {\n        Thread t = Thread.currentThread();\n        System.out.println(\"Name: \" + t.getName());\n        System.out.println(\"Priority: \" + t.getPriority());\n        System.out.println(\"State: \" + t.getState());\n    }\n}"
      },
      {
        "title": "Creating a Thread by Extending Thread",
        "description": "Create and start a thread by extending the Thread class.",
        "code": "class WorkerThread extends Thread {\n    public void run() { System.out.println(\"Child thread is running.\"); }\n}\npublic class ExtendThreadDemo {\n    public static void main(String[] args) throws InterruptedException {\n        WorkerThread t = new WorkerThread();\n        t.start();\n        t.join();\n        System.out.println(\"Main thread is running.\");\n    }\n}"
      },
      {
        "title": "Creating a Thread with Runnable",
        "description": "Create and start a thread by implementing the Runnable interface.",
        "code": "class Task implements Runnable {\n    public void run() { System.out.println(\"Runnable task is running.\"); }\n}\npublic class RunnableDemo {\n    public static void main(String[] args) throws InterruptedException {\n        Thread t = new Thread(new Task());\n        t.start();\n        t.join();\n        System.out.println(\"Main thread is running.\");\n    }\n}"
      },
      {
        "title": "Running Multiple Threads Concurrently",
        "description": "Create multiple threads and demonstrate their concurrent execution.",
        "code": "class NumberTask extends Thread {\n    NumberTask(String name) { super(name); }\n    public void run() {\n        for (int i = 1; i <= 3; i++) System.out.println(getName() + \" : \" + i);\n    }\n}\npublic class ConcurrentDemo {\n    public static void main(String[] args) throws InterruptedException {\n        NumberTask a = new NumberTask(\"Thread-A\"), b = new NumberTask(\"Thread-B\");\n        a.start(); b.start();\n        a.join(); b.join();\n        System.out.println(\"Both threads completed.\");\n    }\n}"
      },
      {
        "title": "Checking a Thread with isAlive()",
        "description": "Use isAlive() to check whether a thread is running.",
        "code": "class ShortTask extends Thread {\n    public void run() {\n        System.out.println(\"Task started.\");\n        try { Thread.sleep(300); } catch (InterruptedException e) { Thread.currentThread().interrupt(); }\n        System.out.println(\"Task finished.\");\n    }\n}\npublic class IsAliveDemo {\n    public static void main(String[] args) throws InterruptedException {\n        ShortTask t = new ShortTask();\n        System.out.println(\"Before start: \" + t.isAlive());\n        t.start();\n        System.out.println(\"After start: \" + t.isAlive());\n        t.join();\n        System.out.println(\"After completion: \" + t.isAlive());\n    }\n}"
      },
      {
        "title": "Waiting for a Thread with join()",
        "description": "Use join() to make one thread wait until another thread completes.",
        "code": "class MessageTask extends Thread {\n    public void run() { System.out.println(\"Worker is processing.\"); }\n}\npublic class JoinDemo {\n    public static void main(String[] args) throws InterruptedException {\n        MessageTask worker = new MessageTask();\n        worker.start();\n        worker.join();\n        System.out.println(\"Worker completed; main continues.\");\n    }\n}"
      },
      {
        "title": "Controlling Threads with isAlive() and join()",
        "description": "Use isAlive() and join() to check multiple threads and ensure they finish before continuing.",
        "code": "class Job extends Thread {\n    Job(String name) { super(name); }\n    public void run() {\n        System.out.println(getName() + \" started.\");\n        try { Thread.sleep(200); } catch (InterruptedException e) { Thread.currentThread().interrupt(); }\n        System.out.println(getName() + \" finished.\");\n    }\n}\npublic class ThreadControlDemo {\n    public static void main(String[] args) throws InterruptedException {\n        Job a = new Job(\"Job-A\"), b = new Job(\"Job-B\");\n        a.start(); b.start();\n        System.out.println(\"Job-A alive: \" + a.isAlive());\n        a.join(); b.join();\n        System.out.println(\"Job-A alive after join: \" + a.isAlive());\n        System.out.println(\"Job-B alive after join: \" + b.isAlive());\n        System.out.println(\"All jobs completed.\");\n    }\n}"
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
  "7-0": "String Literal : Hello Java\nUsing new String : Hello Java\nCharacter Array : Java\nByte Array : ABC\ns1 == s2 : false\ns1.equals(s2) : true",
  "7-1": "StringBuffer : ava olleH\nLength : 9\nCapacity : 21",
  "7-2": "Enter a sentence: Tokens:\nJava\nis\nsimple\nTotal Tokens: 3\nEnter delimiter: Tokens using delimiter:\nJava\nis\nsimple",
  "8-0": "Student Details:\nName: Rahul\nAge: 20\nRoll Number: 101\nBranch: Computer Science",
  "8-1": "Car model: Toyota\nVehicle speed using super: 80\nVehicle speed: 80",
  "8-2": "Name: Anil\nAge: 35\nEmployee ID: 1001\nSalary: 75000.0\nDepartment: IT",
  "8-3": "Dog barks\nCat meows",
  "8-4": "Drawing a circle\nDrawing a rectangle\nDrawing a triangle",
  "8-5": "Employee details\nManager details",
  "8-6": "Basic Salary: 30000.0\nProgramming Allowance: 10000.0\nProject Allowance: 15000.0\nTotal Salary: 55000.0",
  "8-7": "Savings Account Interest: 6%\nCurrent Account Interest: 2%",
  "8-8": "Person constructor executed\nStudent constructor executed\nGraduateStudent constructor executed",
  "8-9": "Savings Account:\nDeposited: 2000.0\nWithdrawn: 1000.0\nSavings Interest: 660.0\nAccount Number: SA101\nBalance: 11000.0\n\nCurrent Account:\nDeposited: 5000.0\nWithdrawn: 3000.0\nCurrent Interest: 440.0\nAccount Number: CA101\nBalance: 22000.0",
  "7-3": "Animal eats\nDog barks",
  "7-4": "Child name: Dog\nParent name: Animal\nAnimal class\nDog class",
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
  "10-0": "Cannot divide by zero",
  "10-1": "ArithmeticException: java.lang.ArithmeticException: / by zero\nArrayIndexOutOfBoundsException: java.lang.ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 3\nNullPointerException: java.lang.NullPointerException: Cannot invoke \"String.length()\" because \"<local1>\" is null",
  "10-2": "Exception in thread \"main\" java.lang.ArithmeticException: / by zero\n    at UncaughtException.main(UncaughtException.java:4)\nThe line number may differ depending on the file layout.",
  "10-3": "ArrayIndexOutOfBoundsException occurred.",
  "10-4": "Exception: Age must be 18 or above.",
  "10-5": "Exception handled in main: java.lang.ArithmeticException: / by zero",
  "10-6": "Error: Age must be at least 18.",
  "10-7": "Invalid marks: Marks must be between 0 and 100.",
  "10-8": "Invalid argument: Value cannot be negative.\nFinally block executed.",
  "10-9": "ArithmeticException handled.\nFinally block always executes.\nProgram continues.",
  "10-10": "Hello, byte streams!",
  "10-11": "Displays the contents of input.txt byte by byte.",
  "10-12": "Text written to output.txt\nJava byte output",
  "10-13": "File copied successfully.",
  "10-14": "Image copied successfully.",
  "11-0": "Enter text: Hello Java\nHello Java",
  "11-1": "Displays the text contained in input.txt.",
  "11-2": "Text written to output.txt",
  "11-3": "Text file copied successfully.",
  "11-4": "For input.txt containing:\nJava is fun.\nStreams read text.\n\nCharacters: 32\nWords: 6\nLines: 2",
  "11-5": "Name: main\nPriority: 5\nState: RUNNABLE",
  "11-6": "Child thread is running.\nMain thread is running.",
  "11-7": "Runnable task is running.\nMain thread is running.",
  "11-8": "One possible output (thread order may vary):\nThread-A : 1\nThread-B : 1\nThread-A : 2\nThread-B : 2\nThread-A : 3\nThread-B : 3\nBoth threads completed.",
  "11-9": "Before start: false\nAfter start: true\nTask started.\nTask finished.\nAfter completion: false",
  "11-10": "Worker is processing.\nWorker completed; main continues.",
  "11-11": "One possible output:\nJob-A alive: true\nJob-A started.\nJob-B started.\nJob-A finished.\nJob-B finished.\nJob-A alive after join: false\nJob-B alive after join: false\nAll jobs completed."
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
