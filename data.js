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
  
];
const generatedOutputs = {};

// Verified type conversion, character ASCII, and control flow programs
