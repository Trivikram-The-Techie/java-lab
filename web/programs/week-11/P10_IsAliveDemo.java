class LifeCycleTask implements Runnable {
    @Override
    public void run() {
        System.out.println("[Worker] Thread has started executing...");
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            System.out.println("[Worker] Thread was interrupted.");
        }
        System.out.println("[Worker] Thread is finishing its task.");
    }
}

public class IsAliveDemo {
    public static void main(String[] args) {
        Thread workerThread = new Thread(new LifeCycleTask(), "WorkerThread");
        System.out.println("1. Before start()   -> isAlive(): " + workerThread.isAlive());
        workerThread.start();
        System.out.println("2. After start()    -> isAlive(): " + workerThread.isAlive());
        try {
            System.out.println("Main thread is waiting for WorkerThread to finish...");
            workerThread.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("3. After completion -> isAlive(): " + workerThread.isAlive());
    }
}
