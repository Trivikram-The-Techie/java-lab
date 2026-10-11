class Task implements Runnable {
    public void run() { System.out.println("Runnable task is running."); }
}
public class RunnableDemo {
    public static void main(String[] args) throws InterruptedException {
        Thread t = new Thread(new Task());
        t.start();
        t.join();
        System.out.println("Main thread is running.");
    }
}