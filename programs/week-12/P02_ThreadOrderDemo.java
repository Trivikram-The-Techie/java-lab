class OrderThread extends Thread {
    public OrderThread(String name) {
        super(name);
    }
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(getName() + " - step " + i +
                    " - priority " + getPriority());
        }
    }
}
public class ThreadOrderDemo {
    public static void main(String[] args) throws InterruptedException {
        OrderThread low = new OrderThread("Low");
        OrderThread normal = new OrderThread("Normal");
        OrderThread high = new OrderThread("High");
        low.setPriority(Thread.MIN_PRIORITY);
        normal.setPriority(Thread.NORM_PRIORITY);
        high.setPriority(Thread.MAX_PRIORITY);
        low.start();
        normal.start();
        high.start();
        low.join();
        normal.join();
        high.join();
        System.out.println("All threads completed.");
    }
}