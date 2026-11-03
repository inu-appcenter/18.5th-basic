package section5.ex;

public class Book {
    String title;
    String author;
    int pages;

    Book() {
        this("", "", 0);
    }

    Book(String title, String author) {
        this(title, author, 0);
    }
    Book(String title, String author, int pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    void displayInfo() {
        System.out.println("제목: " + this.title + " 저자: " + this.author + " 페이지: " + this.pages);
    }
}
