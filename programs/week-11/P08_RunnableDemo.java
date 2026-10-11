class MyRunnable implements Runnable {
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(Thread.currentThread().getName() + " is executing - Count: " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println(Thread.currentThread().getName() + " was interrupted.");
            }
        }
    }
}

public class RunnableDemo {
    public static void main(String[] args) {
        System.out.println("Main thread starting...");
        MyRunnable myRunnable = new MyRunnable();
        Thread thread1 = new Thread(myRunnable, "Worker-Thread-A");
        Thread thread2 = new Thread(myRunnable, "Worker-Thread-B");
        thread1.start();
        thread2.start();
        System.out.println("Main thread finished spawning workers.");
    }
}
