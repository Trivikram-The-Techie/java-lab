class ReturnBankObj {

    int accountNumber;
    String accountHolder;
    double balance;

    ReturnBankObj(
        int accountNumber,
        String accountHolder,
        double balance
    ) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    static ReturnBankObj updateBalance(
        ReturnBankObj account,
        double amount
    ) {
        account.balance =
            account.balance + amount;

        return account;
    }

    void display() {
        System.out.println(
            "Account Number : " + accountNumber
        );

        System.out.println(
            "Account Holder : " + accountHolder
        );

        System.out.println(
            "Balance : " + balance
        );
    }

    public static void main(String[] args) {

        ReturnBankObj account =
            new ReturnBankObj(
                1001,
                "Sathwika",
                5000
            );

        account =
            updateBalance(account, 2000);

        account.display();
    }
}