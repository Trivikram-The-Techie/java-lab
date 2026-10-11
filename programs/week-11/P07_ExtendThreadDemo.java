class WorkerThread extends Thread {
    public void run() { System.out.println("Child thread is running."); }
}
public class ExtendThreadDemo {
    public static void main(String[] args) throws InterruptedException {
        WorkerThread t = new WorkerThread();
        t.start();
        t.join();
        System.out.println("Main thread is running.");
    }
}
