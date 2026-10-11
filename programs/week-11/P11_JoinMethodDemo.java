class DownloadTask implements Runnable {
    @Override
    public void run() {
        System.out.println("[Downloader] Starting file download...");
        try {
            Thread.sleep(2500);
        } catch (InterruptedException e) {
            System.out.println("[Downloader] Thread interrupted.");
        }
        System.out.println("[Downloader] File download complete.");
    }
}

public class JoinMethodDemo {
    public static void main(String[] args) {
        System.out.println("[Main] Initializing system...");
        Thread downloadThread = new Thread(new DownloadTask());
        System.out.println("[Main] Starting the download thread.");
        downloadThread.start();
        System.out.println("[Main] Calling join(). Main thread will now wait...");
        try {
            downloadThread.join();
        } catch (InterruptedException e) {
            System.out.println("[Main] Main thread interrupted.");
        }
        System.out.println("[Main] Download confirmed. Resuming main thread operations.");
    }
}
