// File: utilities/Calculator.java
package utilities;

public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public int multiply(int a, int b) {
        return a * b;
    }
}

// File: TestCalculator.java
import utilities.Calculator;

public class TestCalculator {
    public static void main(String[] args) {
        Calculator c = new Calculator();

        System.out.println("Addition : " + c.add(15, 25));
        System.out.println("Multiplication : " + c.multiply(6, 7));
    }
}

/*
 Steps to compile and run using CLASSPATH:

 1. javac -d . utilities/Calculator.java
    (creates utilities/Calculator.class in the current folder)

 2. Set the CLASSPATH:
    Windows : set CLASSPATH=.;C:\JavaPrograms
    Linux   : export CLASSPATH=.:/home/user/JavaPrograms

 3. javac TestCalculator.java
 4. java TestCalculator
*/
