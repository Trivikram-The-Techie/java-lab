public class GarbageCollectionDemo {
    String objectName;

    // Constructor to assign a name upon creation
    public GarbageCollectionDemo(String name) {
        this.objectName = name;
        System.out.println(this.objectName + " successfully created.");
    }

    public static void main(String[] args) {
        System.out.println("=== Step 1: Object Creation ===");
        GarbageCollectionDemo obj1 = new GarbageCollectionDemo("Object 1");
        GarbageCollectionDemo obj2 = new GarbageCollectionDemo("Object 2");
        GarbageCollectionDemo obj3 = new GarbageCollectionDemo("Object 3");

        System.out.println("\n=== Step 2: Making Objects Eligible for GC ===");

        // Method 1: Null Assignment
        // By setting the reference to null, "Object 1" is left without an active reference.
        obj1 = null;
        System.out.println("-> Null Assignment: 'Object 1' reference set to null.");

        // Method 2: Reassignment
        // By pointing obj2 to obj3, the original "Object 2" is orphaned and loses its reference.
        obj2 = obj3;
        System.out.println("-> Reassignment: 'Object 2' reference repointed to 'Object 3'.");

        // Method 3: Anonymous Object
        // Created without assigning it to a variable, meaning it is eligible the moment it finishes initializing.
        new GarbageCollectionDemo("Object 4 (Anonymous)");
        System.out.println("-> Anonymous Object: 'Object 4' created without a variable reference.");

        System.out.println("\n=== Step 3: Requesting Garbage Collection ===");

        // Suggests that the JVM run the Garbage Collector
        System.gc();
        System.out.println("-> System.gc() invoked. Objects 1, 2, and 4 will be cleaned up in the background.");
    }
}
