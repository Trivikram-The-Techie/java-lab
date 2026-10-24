class TicketCounter {
    int tickets = 3;
    synchronized void bookTicket(String name) {
        if (tickets > 0) {
            tickets--;
            System.out.println(name + " booked a ticket. Remaining: " + tickets);
        } else {
            System.out.println(name + " could not book a ticket.");
        }
    }
}

class Customer extends Thread {
    TicketCounter counter;
    String name;
    Customer(TicketCounter c, String name) {
        counter = c;
        this.name = name;
    }
    public void run() {
        counter.bookTicket(name);
    }
}

public class Lab6 {
    public static void main(String[] args) throws InterruptedException {
        TicketCounter counter = new TicketCounter();
        Customer c1 = new Customer(counter, "Customer 1");
        Customer c2 = new Customer(counter, "Customer 2");
        Customer c3 = new Customer(counter, "Customer 3");
        Customer c4 = new Customer(counter, "Customer 4");

        c1.start();
        c2.start();
        c3.start();
        c4.start();

        c1.join();
        c2.join();
        c3.join();
        c4.join();
    }
}
