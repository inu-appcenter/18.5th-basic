package section11.poly.basic;

public class CastingMain1 {
    static void main(String[] args) {
        // 다형적 참조
        Parent poly = new Child();
        // 자식의 기능은 호출 불가
        // poly.childMethod(); 컴파일 에러

        // 다운캐스팅
        Child child = (Child) poly;
        child.childMethod();
    }
}
