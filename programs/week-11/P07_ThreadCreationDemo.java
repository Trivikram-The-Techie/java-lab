class MyCustomThread extends Thread {
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

public class ThreadCreationDemo {
    public static void main(String[] args) {
        System.out.println("Main thread starting...");
        MyCustomThread thread1 = new MyCustomThread();
        MyCustomThread thread2 = new MyCustomThread();
        thread1.setName("Worker-Thread-A");
        thread2.setName("Worker-Thread-B");
        thread1.start();
        thread2.start();
        System.out.println("Main thread finished spawning workers.");
    }
}
