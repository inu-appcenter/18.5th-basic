package poly.basic;

public class CastingMain2 {
  public static void main(String[] args) {
    Parent poly = new Child();
    //poly.childMethod(); //자식의 기능을 호출 할 수 없다.

    //다운캐스팅(부모 타입 -> 자식 타입)
    Child child = (Child) poly;
    child.childMethod();

    //일시적 다운캐스팅
    ((Child) poly).childMethod();
  }
}
