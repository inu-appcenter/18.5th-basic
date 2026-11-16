package section11.poly.basic;

public class CastingMain2 {
    static void main(String[] args) {
        // 다형적 참조
        Parent poly = new Child();
        // 자식의 기능은 호출 불가
        // poly.childMethod(); 컴파일 에러

        // 다운캐스팅
        Child child = (Child) poly;
        child.childMethod();

        // 일시적 다운캐스팅 - 메서드 호출하는 순간만 다운캐스팅
        ((Child) poly).childMethod();
    }
}
