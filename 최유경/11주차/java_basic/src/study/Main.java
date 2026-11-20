package study;

public class Main {
    static void main(String[] args) {
        Book[] books = {
                new PaperBook("자바의 정석"),
                new EBook("스프링 입문"),
                new PaperBook("클린 코드")
        };

        for (Book book : books) {
            //TODO : 각 도서의 제목(showTitle)과 대여 성공(borrow) 출력
            book.showTitle();
            book.borrow();
            //TODO : (instanceof 사용) 전자책일 경우 EBook.java의 다운로드 메서드 출력
            if (book instanceof EBook ebook){
                ebook.download();
            }
            System.out.println();
        }
    }
}
