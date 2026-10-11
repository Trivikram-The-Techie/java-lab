class BankAccount {
    int accountNumber;
    String accountHolder;
    double balance;

    // Constructor 1: No arguments (default)
    BankAccount() {
        accountNumber = 0;
        accountHolder = "Unknown";
        balance = 0.0;
    }

    // Constructor 2: With account number and holder name
    BankAccount(int accountNumber, String accountHolder) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        balance = 0.0;
    }

    // Constructor 3: With all details
    BankAccount(int accountNumber, String accountHolder, double balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    void show() {
        System.out.println("Account No: " + accountNumber + ", Holder: " + accountHolder + ", Balance: $" + balance);
    }

    public static void main(String[] args) {
        // Using default constructor
        BankAccount acc1 = new BankAccount();

        // Using constructor with 2 parameters
        BankAccount acc2 = new BankAccount(1001, "Alice");

        // Using constructor with 3 parameters
        BankAccount acc3 = new BankAccount(1002, "Bob", 5000.0);

        acc1.show();
        acc2.show();
        acc3.show();
    }
}
