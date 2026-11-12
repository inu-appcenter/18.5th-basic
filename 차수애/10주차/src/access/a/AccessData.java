package access.a;

public class AccessData {

    public int publicField;    // public: 어디서든 접근 가능
    int defaultField;          // default 같은 패키지(access.a)에서만 접근 가능
    private int privateField;  // private: 이 클래스(AccessData) 안에서만 접근 가능

    // public 메서드: 어디서든 호출 가능
    public void publicMethod() {
        System.out.println("publicMethod 호출 " + publicField);
    }

    // default 메서드: 같은 패키지에서만 호출 가능
    void defaultMethod() {
        System.out.println("defaultMethod 호출 " + defaultField);
    }

    // private 메서드: 이 클래스 안에서만 호출 가능
    private void privateMethod() {
        System.out.println("privateMethod 호출 " + privateField);
    }

    // 내부 호출: 같은 클래스 안이므로 private을 포함한 모든 필드와 메서드에 접근 가능
    // 이 메서드는 public이라서 외부에서도 호출할 수 있음
    // → 외부에서는 private에 직접 접근할 수 없지만 이 메서드를 통해서 간접적으로 사용할 수 있음
    public void innerAccess() {
        System.out.println("내부 호출");


        publicField = 100;
        defaultField = 200;
        privateField = 300;


        publicMethod();
        defaultMethod();
        privateMethod();
    }
}
