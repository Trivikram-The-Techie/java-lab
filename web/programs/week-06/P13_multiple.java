public class multiple {
    String objectName;

    // Constructor
    public multiple(String name) {
        this.objectName = name;
        System.out.println(this.objectName + " successfully created.");
    }

    public static void main(String[] args) {
        System.out.println("--- 1. Creating Objects ---");
        multiple obj1 = new multiple("Object 1");
        multiple obj2 = new multiple("Object 2");
        multiple obj3 = new multiple("Object 3");

        System.out.println("\n--- 2. Making objects eligible for GC ---");

        // Method A: Nullifying the reference
        obj1 = null;
        System.out.println("Object 1 reference set to null.");

        // Method B: Reassigning the reference
        obj2 = obj3;
        System.out.println("Object 2 reference reassigned to Object 3.");

        // Method C: Creating an anonymous object
        new multiple("Object 4 (Anonymous)");
        System.out.println("Object 4 created without a reference.");

        System.out.println("\n--- 3. Requesting Garbage Collection ---");

        // Calling System.gc() suggests the JVM run the Garbage Collector
        System.gc();

        System.out.println("System.gc() called! The JVM will silently clean up Objects 1, 2, and 4 in the background.");
    }
}
