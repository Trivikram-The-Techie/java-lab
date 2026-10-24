public class Lab15 {
    public static void main(String[] args) {
        Runnable task = () -> {
            System.out.println("Thread is running using lambda expression");
        };

        Thread t = new Thread(task);
        t.start();
    }
}
