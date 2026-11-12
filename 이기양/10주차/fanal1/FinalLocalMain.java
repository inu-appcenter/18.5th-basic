package fanal1;

public class FinalLocalMain {
  public static void main(String[] args) {
    //final 지역 변수
    final int data1;
    data1 = 10; // 최초 한번만 할당 가능
    // data1 = 20; // 컴파일 에러

    //final 지역 변수2
    final int data2 = 10;
    // data2 = 20; //컴파일 에러

  }

  static void method(final int parameter) {
    //parmeter = 20; // 컴파일 에러
  }
}
