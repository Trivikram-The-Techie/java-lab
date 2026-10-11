class BankAccount {
    int balance = 1000;

    void deposit(int amount) {
        balance += amount;
        System.out.println("Deposited: " + amount + ", New Balance: " + balance);
    }

    void withdraw(int amount) {
        balance -= amount;
        System.out.println("Withdrawn: " + amount + ", New Balance: " + balance);
    }

    void calculateInterest() {
        System.out.println("Calculating standard interest.");
    }
}

class SavingsAccount extends BankAccount {
    @Override
    void calculateInterest() {
        System.out.println("Savings Account gets 5% interest.");
    }
}

class CurrentAccount extends BankAccount {
    @Override
    void calculateInterest() {
        System.out.println("Current Account gets 0% interest.");
    }
}

public class Main10 {
    public static void main(String[] args) {
        System.out.println("--- Savings Account ---");
        SavingsAccount savings = new SavingsAccount();
        savings.deposit(500); // Inherited method
        savings.withdraw(200); // Inherited method
        savings.calculateInterest(); // Overridden method

        System.out.println("\n--- Current Account ---");
        CurrentAccount current = new CurrentAccount();
        current.deposit(1000);
        current.calculateInterest(); // Overridden method
    }
}
