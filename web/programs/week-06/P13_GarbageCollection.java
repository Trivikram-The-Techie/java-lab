class GarbageCollection {

    public static void main(String[] args) {

        GarbageCollection obj1 =
            new GarbageCollection();

        GarbageCollection obj2 =
            new GarbageCollection();

        obj1 = null;
        obj2 = null;

        System.gc();

        System.out.println(
            "Garbage Collection Requested"
        );
    }
}