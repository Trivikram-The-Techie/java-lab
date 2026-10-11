class Library {
    private String libraryName;

    public Library(String libraryName) {
        this.libraryName = libraryName;
    }

    class Book {
        private String title;

        public Book(String title) {
            this.title = title;
        }

        public void displayBookDetails() {
            System.out.println("Book Title: " + title);
            System.out.println("Available at: " + libraryName);
        }
    }
}

public class LibraryDemo {
    public static void main(String[] args) {
        Library library = new Library("City Central Library");

        Library.Book book1 = library.new Book("The Great Gatsby");
        Library.Book book2 = library.new Book("1984");

        book1.displayBookDetails();
        System.out.println("-------------");
        book2.displayBookDetails();
    }
}
