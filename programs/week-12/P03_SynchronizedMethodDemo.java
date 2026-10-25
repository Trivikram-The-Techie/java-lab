class SharedCounter {
    private int count = 0;
    public synchronized void increment() {
        count++;
        System.out.println(Thread.currentThread().getName()
                + " incremented counter to " + count);
    }
    public int getCount() {
        return count;
    }
}
public class SynchronizedMethodDemo {
    public static void main(String[] args) throws InterruptedException {
        SharedCounter counter = new SharedCounter();
        Runnable task = () -> {
            for (int i = 1; i <= 5; i++) {
                counter.increment();
            }
        };
        Thread t1 = new Thread(task, "Thread-1");
        Thread t2 = new Thread(task, "Thread-2");
        t1.start();
        t2.start();
        t1.join();
        t2.join();
        System.out.println("Final counter value: " + counter.getCount());
    }
}