class ConstructorOverload {

    int accountNumber;
    String accountHolder;
    double balance;

    ConstructorOverload() {
        accountNumber = 1001;
        accountHolder = "Sathwika";
        balance = 0;
    }

    ConstructorOverload(int accNo, String holder) {
        accountNumber = accNo;
        accountHolder = holder;
        balance = 0;
    }

    ConstructorOverload(
        int accNo,
        String holder,
        double bal
    ) {
        accountNumber = accNo;
        accountHolder = holder;
        balance = bal;
    }

    void display() {
        System.out.println("Account Number : " + accountNumber);
        System.out.println("Account Holder : " + accountHolder);
        System.out.println("Balance : " + balance);
        System.out.println();
    }

    public static void main(String[] args) {

        ConstructorOverload b1 =
            new ConstructorOverload();

        ConstructorOverload b2 =
            new ConstructorOverload(1002, "Rahul");

        ConstructorOverload b3 =
            new ConstructorOverload(1003, "Anil", 5000);

        b1.display();
        b2.display();
        b3.display();
    }
}