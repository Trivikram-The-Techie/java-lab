class MyThread extends Thread {
    MyThread(String name) {
        super(name);
    }
    public void run() {
        System.out.println(getName() + " (priority " + getPriority() + ") is running");
    }
}

public class Lab2 {
    public static void main(String[] args) {
        MyThread t1 = new MyThread("Thread A");
        MyThread t2 = new MyThread("Thread B");
        MyThread t3 = new MyThread("Thread C");

        t1.setPriority(Thread.MIN_PRIORITY);
        t2.setPriority(Thread.NORM_PRIORITY);
        t3.setPriority(Thread.MAX_PRIORITY);

        t1.start();
        t2.start();
        t3.start();
    }
}
