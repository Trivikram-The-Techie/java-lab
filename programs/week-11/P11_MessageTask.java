class MessageTask extends Thread {
    public void run() { System.out.println("Worker is processing."); }
}
public class JoinDemo {
    public static void main(String[] args) throws InterruptedException {
        MessageTask worker = new MessageTask();
        worker.start();
        worker.join();
        System.out.println("Worker completed; main continues.");
    }
}