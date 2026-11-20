package study;

import org.w3c.dom.ls.LSOutput;

public class EBook implements Book{
    private String title;

    public EBook(String title) {
        this.title = title;
    }

    //TODO : PaperBook.java을 작성한 후 복사하여 출력 결과에 맞게 수정
    //TODO : 다운로드 완료를 알려주는 메서드 작성 (간단히, sout만 해도 ok)
    @Override
    public void showTitle(){
        System.out.println("도서 제목: " + title);
    }
    @Override
    public void borrow(){
        System.out.println("전자책을 대여했습니다.");
    }
    public void download(){
        System.out.println("전자책을 다운로드했습니다.");
    }
}
