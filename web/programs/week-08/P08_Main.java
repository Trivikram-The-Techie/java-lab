class BankAccount {

    void calculateInterest() {

        System.out.println(
            "Calculating bank account interest"
        );
    }
}

class SavingsAccount extends BankAccount {

    @Override
    void calculateInterest() {

        System.out.println(
            "Savings Account Interest: 6%"
        );
    }
}

class CurrentAccount extends BankAccount {

    @Override
    void calculateInterest() {

        System.out.println(
            "Current Account Interest: 2%"
        );
    }
}

public class Main {

    public static void main(String[] args) {

        BankAccount account;

        account = new SavingsAccount();
        account.calculateInterest();

        account = new CurrentAccount();
        account.calculateInterest();
    }
}
