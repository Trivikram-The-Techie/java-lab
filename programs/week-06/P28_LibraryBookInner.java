class LibraryBookInner {

    String libraryName =
        "Central Library";

    class Book {

        int bookId;
        String title;
        String author;

        Book(
            int bookId,
            String title,
            String author
        ) {
            this.bookId = bookId;
            this.title = title;
            this.author = author;
        }

        void display() {

            System.out.println(
                "Library : " + libraryName
            );

            System.out.println(
                "Book ID : " + bookId
            );

            System.out.println(
                "Title : " + title
            );

            System.out.println(
                "Author : " + author
            );
        }
    }

    public static void main(String[] args) {

        LibraryBookInner library =
            new LibraryBookInner();

        LibraryBookInner.Book book =
            library.new Book(
                101,
                "Java Programming",
                "James Gosling"
            );

        book.display();
    }
}