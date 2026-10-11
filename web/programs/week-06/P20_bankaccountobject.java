// Define the BankAccount class
class BankAccount {
    private String accountNumber;
    private String accountHolder;
    private double balance;

    // Constructor to initialize the bank account
    public BankAccount(String accountNumber, String accountHolder, double balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    // Method to add money to the balance
    public void deposit(double amount) {
        this.balance += amount;
    }

    // Method to display account details
    public void displayAccountInfo() {
        System.out.println("Account Number : " + accountNumber);
        System.out.println("Account Holder : " + accountHolder);
        System.out.println("Current Balance: $" + balance);
        System.out.println("----------------------------");
    }
}

// Main class renamed to 'bankaccountobject'
public class bankaccountobject {
    // Method that takes a BankAccount object, updates its balance, and returns it
    public static BankAccount addBonusAndReturn(BankAccount account, double bonusAmount) {
        System.out.println("Applying a bonus of $" + bonusAmount + " to the account...");

        // Update the state of the passed object
        account.deposit(bonusAmount);

        // Return the updated object
        return account;
    }

    public static void main(String[] args) {
        // 1. Create a BankAccount object
        BankAccount myAccount = new BankAccount("ACC-12345", "Michael Scott", 1500.00);

        System.out.println("=== Before Update ===");
        myAccount.displayAccountInfo();

        // 2. Pass the object to the method and catch the returned object reference
        BankAccount updatedAccount = addBonusAndReturn(myAccount, 500.00);

        System.out.println("\n=== After Update ===");
        // 3. Display details using the returned object reference
        updatedAccount.displayAccountInfo();
    }
}
