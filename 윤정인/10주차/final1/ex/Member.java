package final1.ex;

public class Member {
    private final String id; //final 키워드 사용
    private String name;

    public Member(String id, String name){
        this.id = id;      // 주석 해제: final은 생성자에서 한 번 초기화
        this.name = name;
    }

    public void changeData(String name){   // id 매개변수 제거
        //this.id = id;  //컴파일 오류 (final은 다시 대입 불가)
        this.name = name;
    }

    public void print(){
        System.out.println("id: "+id+",name:"+name);
    }
}