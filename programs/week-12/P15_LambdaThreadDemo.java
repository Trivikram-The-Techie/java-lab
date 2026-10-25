public class LambdaThreadDemo {
    public static void main(String[] args) throws InterruptedException {
        Runnable task = () -> {
            for (int i = 1; i <= 5; i++) {
                System.out.println("Lambda thread: " + i);
            }
        };
        Thread thread = new Thread(task, "LambdaThread");
        thread.start();
        thread.join();
        System.out.println("Main thread completed.");
    }
}