class BankAccount {

    String accountNumber;
    double balance;

    BankAccount(
        String accountNumber,
        double balance
    ) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    void deposit(double amount) {

        balance += amount;

        System.out.println(
            "Deposited: " + amount
        );
    }

    void withdraw(double amount) {

        if (amount <= balance) {

            balance -= amount;

            System.out.println(
                "Withdrawn: " + amount
            );

        } else {

            System.out.println(
                "Insufficient balance"
            );
        }
    }

    void calculateInterest() {

        System.out.println(
            "General bank account interest"
        );
    }

    void displayBalance() {

        System.out.println(
            "Account Number: " +
            accountNumber
        );

        System.out.println(
            "Balance: " + balance
        );
    }
}

class SavingsAccount extends BankAccount {

    SavingsAccount(
        String accountNumber,
        double balance
    ) {
        super(accountNumber, balance);
    }

    @Override
    void calculateInterest() {

        double interest =
            balance * 0.06;

        System.out.println(
            "Savings Interest: " + interest
        );
    }
}

class CurrentAccount extends BankAccount {

    CurrentAccount(
        String accountNumber,
        double balance
    ) {
        super(accountNumber, balance);
    }

    @Override
    void calculateInterest() {

        double interest =
            balance * 0.02;

        System.out.println(
            "Current Interest: " + interest
        );
    }
}

public class Main {

    public static void main(String[] args) {

        SavingsAccount savings =
            new SavingsAccount(
                "SA101",
                10000
            );

        System.out.println(
            "Savings Account:"
        );

        savings.deposit(2000);
        savings.withdraw(1000);
        savings.calculateInterest();
        savings.displayBalance();

        System.out.println();

        CurrentAccount current =
            new CurrentAccount(
                "CA101",
                20000
            );

        System.out.println(
            "Current Account:"
        );

        current.deposit(5000);
        current.withdraw(3000);
        current.calculateInterest();
        current.displayBalance();
    }
}
