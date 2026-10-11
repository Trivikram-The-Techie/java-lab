class WorkerTask implements Runnable {
    private final String threadName;

    public WorkerTask(String name) {
        this.threadName = name;
    }

    @Override
    public void run() {
        for (int i = 1; i <= 4; i++) {
            System.out.println(threadName + " is executing step " + i);
            try {
                Thread.sleep((long) (Math.random() * 400 + 100));
            } catch (InterruptedException e) {
                System.out.println(threadName + " was interrupted.");
            }
        }
        System.out.println("==> " + threadName + " has FINISHED.");
    }
}

public class MultiThreadDemo {
    public static void main(String[] args) {
        System.out.println("Main thread started spawning workers...\n");
        Thread t1 = new Thread(new WorkerTask("Thread-Alpha"));
        Thread t2 = new Thread(new WorkerTask("Thread-Beta"));
        Thread t3 = new Thread(new WorkerTask("Thread-Gamma"));
        t1.start();
        t2.start();
        t3.start();
        System.out.println("Main thread finished spawning. Workers are now running concurrently.\n");
    }
}
