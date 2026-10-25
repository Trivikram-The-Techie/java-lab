class TicketBooking {
    private int availableTickets = 5;
    public synchronized void bookTicket(String passenger, int numberOfTickets) {
        if (numberOfTickets <= availableTickets) {
            System.out.println(passenger + " booked " + numberOfTickets + " ticket(s).");
            availableTickets -= numberOfTickets;
            System.out.println("Tickets remaining: " + availableTickets);
        } else {
            System.out.println(passenger + " could not book " + numberOfTickets
                    + " ticket(s). Not enough tickets.");
        }
    }
}
public class TicketBookingDemo {
    public static void main(String[] args) throws InterruptedException {
        TicketBooking booking = new TicketBooking();
        Thread t1 = new Thread(() -> booking.bookTicket("Alice", 2));
        Thread t2 = new Thread(() -> booking.bookTicket("Bob", 2));
        Thread t3 = new Thread(() -> booking.bookTicket("Charlie", 2));
        t1.start();
        t2.start();
        t3.start();
        t1.join();
        t2.join();
        t3.join();
    }
}