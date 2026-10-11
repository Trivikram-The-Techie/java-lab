class ShortTask extends Thread {
    public void run() {
        System.out.println("Task started.");
        try { Thread.sleep(300); } catch (InterruptedException e) { Thread.currentThread().interrupt(); }
        System.out.println("Task finished.");
    }
}
public class IsAliveDemo {
    public static void main(String[] args) throws InterruptedException {
        ShortTask t = new ShortTask();
        System.out.println("Before start: " + t.isAlive());
        t.start();
        System.out.println("After start: " + t.isAlive());
        t.join();
        System.out.println("After completion: " + t.isAlive());
    }
}
