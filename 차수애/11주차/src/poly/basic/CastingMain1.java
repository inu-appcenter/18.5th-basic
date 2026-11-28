package poly.basic;

public class CastingMain1 {
    public static void main(String[] args) {
        //부모 변수가 자식 인스턴스 참조(다형적 참조)
        Parent poly = new Child();
        //단 자식의 기능은 호출할 수 없다. 컴파일 오류 발생
        //poly.childMethod();

        //다운캐스팅(부모 타입 -> 자식 타입)
        Child child = (Child) poly; // 다운캐스팅을 통해 부모타입을 자식타입으로 변환한 다음에 대입 시도 poly를 Child로 바꿈
        child.childMethod();
    }
}
