class ControlledTask implements Runnable {
    @Override
    public void run() {
        System.out.println("[" + Thread.currentThread().getName() + "] is executing.");
        try {
            Thread.sleep(800);
        } catch (InterruptedException e) {
            System.out.println("[" + Thread.currentThread().getName() + "] was interrupted.");
        }
        System.out.println("[" + Thread.currentThread().getName() + "] has completed.");
    }
}

public class ThreadControlDemo {
    public static void main(String[] args) {
        Thread t1 = new Thread(new ControlledTask(), "Thread-1");
        Thread t2 = new Thread(new ControlledTask(), "Thread-2");
        Thread t3 = new Thread(new ControlledTask(), "Thread-3");
        System.out.println("[Main] Starting Thread-1.");
        t1.start();
        System.out.println("[Main] Is Thread-1 alive? " + t1.isAlive());
        try {
            System.out.println("[Main] Waiting for Thread-1 to finish before starting others...");
            t1.join();
        } catch (InterruptedException e) {
            System.out.println("[Main] Main thread interrupted.");
        }
        System.out.println("[Main] Is Thread-1 alive now? " + t1.isAlive());
        System.out.println("\n[Main] Thread-1 finished. Now starting Thread-2 and Thread-3 concurrently.");
        t2.start();
        t3.start();
        try {
            System.out.println("[Main] Waiting for Thread-2 and Thread-3 to finish...");
            t2.join();
            t3.join();
        } catch (InterruptedException e) {
            System.out.println("[Main] Main thread interrupted.");
        }
        System.out.println("\n[Main] All worker threads are dead. Main thread safely exiting.");
    }
}
