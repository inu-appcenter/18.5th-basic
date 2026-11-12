package section8.static2;

public class DecoData {
    private int instanceValue;
    private static int staticValue;
    public static void staticCall() {
        // instanceValue++; // 인스턴스 변수 접근, 컴파일 에러
        // instanceMethod(); // 인스턴스 메서드 접근, 컴파일 에러

        staticValue++; // 정적 변수 접근
        staticCall(); // 정적 메서드 접근
    }
    
    public void instanceCall() {
        instanceValue++; // 본인의 인스턴스 변수 접근
        instanceMethod(); // 본인의 인스턴스 메서드 접근

        staticValue++; // 정적 변수 접근
        staticCall(); // 정적 메서드 접근
        
        // 전부 가능
    }

    private void instanceMethod() {
        System.out.println("instanceValue: " + instanceValue);
    }
    private static void staticMethod() {
        System.out.println("staticValue: " + staticValue);
    }

    public static void staticCall(DecoData data) {
        data.instanceValue++;
        data.instanceMethod();
    }
}
