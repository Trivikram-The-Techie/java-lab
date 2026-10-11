public class MainThreadDemo {
    public static void main(String[] args) {
        Thread mainThread = Thread.currentThread();
        System.out.println("Default Thread Name: " + mainThread.getName());
        System.out.println("Default Thread Priority: " + mainThread.getPriority());
        System.out.println("Current Thread State: " + mainThread.getState());
        mainThread.setName("Custom-Main-Thread");
        mainThread.setPriority(Thread.MAX_PRIORITY);
        System.out.println("\n--- After Modification ---");
        System.out.println("New Thread Name: " + mainThread.getName());
        System.out.println("New Thread Priority: " + mainThread.getPriority());
    }
}
