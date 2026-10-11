class BankAccount {
    void calculateInterest() {
        System.out.println("Calculating standard interest rate.");
    }
}

class SavingsAccount extends BankAccount {
    void calculateInterest() {
        System.out.println("Savings Account Interest Rate: 4.5%");
    }
}

class CurrentAccount extends BankAccount {
    void calculateInterest() {
        System.out.println("Current Account Interest Rate: 0.0%");
    }
}

public class Main8 {
    public static void main(String[] args) {
        // Creating a superclass reference
        BankAccount account;

        // Dynamic Method Dispatch: Calling SavingsAccount method
        account = new SavingsAccount();
        account.calculateInterest();

        // Dynamic Method Dispatch: Calling CurrentAccount method
        account = new CurrentAccount();
        account.calculateInterest();
    }
}
