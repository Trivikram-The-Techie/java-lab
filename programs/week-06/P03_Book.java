public class Book {
    String title;
    String author;
    double price;

    void display() {
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
        System.out.println("Price: " + price);
        System.out.println("-----------------");
    }

    public static void main(String[] args) {
        Book b1 = new Book();
        b1.title = "Java Programming";
        b1.author = "James Gosling";
        b1.price = 599.0;

        Book b2 = new Book();
        b2.title = "The Alchemist";
        b2.author = "Paulo Coelho";
        b2.price = 299.0;

        Book b3 = new Book();
        b3.title = "Wings of Fire";
        b3.author = "A.P.J. Abdul Kalam";
        b3.price = 350.0;

        b1.display();
        b2.display();
        b3.display();
    }
}
