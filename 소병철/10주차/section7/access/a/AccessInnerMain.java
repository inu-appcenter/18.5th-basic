package section7.access.a;

public class AccessInnerMain {
    static void main(String[] args) {
        AccessData data = new AccessData();

        // public 호출 가능
        data.publicField = 1;
        data.publicMethod();

        // 같은 패키지이므로 default 호출 가능
        data.defaultField = 2;
        data.defaultMethod();

        // private는 불가.
        // data.privateField = 3;
        // data.privateMethod();

        // 클래스 내부에서 호출하는 함수, 전부 수행됨.
        data.innerAccess();
    }
}
