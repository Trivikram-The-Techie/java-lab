class SafeCounter {
    private int value = 0;
    public synchronized void increment() {
        value++;
    }
    public int getValue() {
        return value;
    }
}
public class RaceConditionDemo {
    public static void main(String[] args) throws InterruptedException {
        SafeCounter counter = new SafeCounter();
        Runnable task = () -> {
            for (int i = 1; i <= 1000; i++) {
                counter.increment();
            }
        };
        Thread t1 = new Thread(task);
        Thread t2 = new Thread(task);
        t1.start();
        t2.start();
        t1.join();
        t2.join();
        System.out.println("Expected value: 2000");
        System.out.println("Actual value: " + counter.getValue());
        System.out.println("Synchronization prevents lost updates.");
    }
}