class NumberTask extends Thread {
    NumberTask(String name) { super(name); }
    public void run() {
        for (int i = 1; i <= 3; i++) System.out.println(getName() + " : " + i);
    }
}
public class ConcurrentDemo {
    public static void main(String[] args) throws InterruptedException {
        NumberTask a = new NumberTask("Thread-A"), b = new NumberTask("Thread-B");
        a.start(); b.start();
        a.join(); b.join();
        System.out.println("Both threads completed.");
    }
}
