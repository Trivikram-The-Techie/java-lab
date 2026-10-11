class GarbageEligibility {

    public static void main(String[] args) {

        GarbageEligibility obj1 =
            new GarbageEligibility();

        GarbageEligibility obj2 =
            new GarbageEligibility();

        // obj1 becomes eligible
        obj1 = null;

        // Old object referenced by obj2
        // becomes eligible
        obj2 = new GarbageEligibility();

        // Anonymous object becomes eligible
        new GarbageEligibility();

        System.gc();

        System.out.println(
            "Objects are eligible for Garbage Collection"
        );
    }
}