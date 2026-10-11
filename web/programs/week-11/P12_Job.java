class Job extends Thread {
    Job(String name) { super(name); }
    public void run() {
        System.out.println(getName() + " started.");
        try { Thread.sleep(200); } catch (InterruptedException e) { Thread.currentThread().interrupt(); }
        System.out.println(getName() + " finished.");
    }
}
public class ThreadControlDemo {
    public static void main(String[] args) throws InterruptedException {
        Job a = new Job("Job-A"), b = new Job("Job-B");
        a.start(); b.start();
        System.out.println("Job-A alive: " + a.isAlive());
        a.join(); b.join();
        System.out.println("Job-A alive after join: " + a.isAlive());
        System.out.println("Job-B alive after join: " + b.isAlive());
        System.out.println("All jobs completed.");
    }
}