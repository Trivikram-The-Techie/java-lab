// File: bank/Account.java
package bank;

public class Account {
    int accountNumber;
    double balance;

    public Account(int accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    public void showAccount() {
        System.out.println("Account Number : " + accountNumber);
        System.out.println("Balance : " + balance);
    }
}

// File: bank/Customer.java
package bank;

public class Customer {
    String name;
    int customerId;

    public Customer(String name, int customerId) {
        this.name = name;
        this.customerId = customerId;
    }

    public void showCustomer() {
        System.out.println("Customer ID : " + customerId);
        System.out.println("Customer Name : " + name);
    }
}

// File: bank/Transaction.java
package bank;

public class Transaction {
    String type;
    double amount;

    public Transaction(String type, double amount) {
        this.type = type;
        this.amount = amount;
    }

    public void showTransaction() {
        System.out.println("Transaction Type : " + type);
        System.out.println("Amount : " + amount);
    }
}

// File: BankTest.java
import bank.Account;
import bank.Customer;
import bank.Transaction;

public class BankTest {
    public static void main(String[] args) {
        Customer cust = new Customer("Sathwika", 501);
        Account acc = new Account(1001, 25000);
        Transaction txn = new Transaction("Deposit", 5000);

        cust.showCustomer();
        acc.showAccount();
        txn.showTransaction();
    }
}
