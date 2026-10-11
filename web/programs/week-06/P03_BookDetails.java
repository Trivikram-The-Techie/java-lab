class BookDetails {

    int bookId;
    String title;
    String author;

    BookDetails(int id, String t, String a) {
        bookId = id;
        title = t;
        author = a;
    }

    void display() {
        System.out.println("Book ID : " + bookId);
        System.out.println("Title : " + title);
        System.out.println("Author : " + author);
        System.out.println();
    }

    public static void main(String[] args) {

        BookDetails b1 =
            new BookDetails(1, "Java", "James");

        BookDetails b2 =
            new BookDetails(2, "Python", "Guido");

        BookDetails b3 =
            new BookDetails(3, "C Programming", "Dennis");

        b1.display();
        b2.display();
        b3.display();
    }
}