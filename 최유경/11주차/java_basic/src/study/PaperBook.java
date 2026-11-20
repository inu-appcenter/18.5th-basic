package study;

public class PaperBook implements Book {
    private String title;

    public PaperBook(String title) {
        this.title = title;
    }

    //TODO : 인터페이스를 보고, Override를 이용해 System.out.println("도서 제목: " + title); 을 실행하는 메서드 작성
    @Override
    public void showTitle(){
        System.out.println("도서 제목: " + title);
    }
    //TODO : 인터페이스를 보고, Override를 이용해 System.out.println("종이책을 대여했습니다."); 을 실행하는 메서드 작성
    @Override
    public void borrow(){
        System.out.println("종이책을 대여했습니다.");
    }
}

