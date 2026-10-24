class Counter {
    int count = 0;
    void increment() {
        count++; // not synchronized, may cause race condition
    }
    synchronized void safeIncrement() {
        count++; // synchronized, no race condition
    }
}

class MyThread extends Thread {
    Counter counter;
    boolean safe;
    MyThread(Counter c, boolean safe) {
        counter = c;
        this.safe = safe;
    }
    public void run() {
        for (int i = 0; i < 1000000; i++) {
            if (safe) {
                counter.safeIncrement();
            } else {
                counter.increment();
            }
        }
    }
}

public class Lab5 {
    public static void main(String[] args) throws InterruptedException {
        // Without synchronization
        Counter c1 = new Counter();
        MyThread a1 = new MyThread(c1, false);
        MyThread a2 = new MyThread(c1, false);
        a1.start(); a2.start();
        a1.join(); a2.join();
        System.out.println("Without synchronization, count = " + c1.count);

        // With synchronization
        Counter c2 = new Counter();
        MyThread b1 = new MyThread(c2, true);
        MyThread b2 = new MyThread(c2, true);
        b1.start(); b2.start();
        b1.join(); b2.join();
        System.out.println("With synchronization, count = " + c2.count);
    }
}
