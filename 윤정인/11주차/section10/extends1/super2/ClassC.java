package extends1.super2;

public class ClassC extends ClassB {
    public ClassC(){
        super(10,20); //이 경우 super생략 불가
        System.out.println("ClassC 생성자");
    }

}
