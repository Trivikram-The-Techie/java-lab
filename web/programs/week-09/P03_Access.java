// File: pkgone/Access.java
package pkgone;

public class Access {
    public int publicVar = 10;
    private int privateVar = 20;
    protected int protectedVar = 30;
    int defaultVar = 40;

    void display() {
        System.out.println("Accessing from same class:");
        System.out.println("Public : " + publicVar);
        System.out.println("Private : " + privateVar);
        System.out.println("Protected : " + protectedVar);
        System.out.println("Default : " + defaultVar);
    }
}

// File: pkgone/SamePackageTest.java
package pkgone;

public class SamePackageTest {
    public static void main(String[] args) {
        Access a = new Access();
        a.display();

        System.out.println();
        System.out.println("Accessing from another class in same package:");
        System.out.println("Public : " + a.publicVar);
        System.out.println("Protected : " + a.protectedVar);
        System.out.println("Default : " + a.defaultVar);
        // a.privateVar is NOT accessible here
    }
}

// File: pkgtwo/DifferentPackageTest.java
package pkgtwo;

import pkgone.Access;

public class DifferentPackageTest extends Access {
    public static void main(String[] args) {
        DifferentPackageTest obj = new DifferentPackageTest();

        System.out.println();
        System.out.println("Accessing from a class in a different package:");
        System.out.println("Public : " + obj.publicVar);
        System.out.println("Protected (via inheritance) : " + obj.protectedVar);
        // obj.privateVar and obj.defaultVar are NOT accessible here
    }
}