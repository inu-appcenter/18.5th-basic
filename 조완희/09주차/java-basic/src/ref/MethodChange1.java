package ref;

public class MethodChange1 {
    public static void main(String[] args) {
        int a = 10;
        System.out.println("메서드 호출 전: a = " + a);
        changePrimitive(a);
        System.out.println("메서드 호출 후: a = " + a);
    }
    // 자바는 항상 변수의 값을 그대로 복사한다. 즉 이말은 아래의 changePrimitive 함수 작동 방식
    // a 의 값을 -> x의 값으로 저장한다는 뜻!!! 그래서 a -> x 복사하고 그 이훙 20 -> x에 덮어씌운다.
    public static void changePrimitive(int x) {
        x = 20;
    }
}
