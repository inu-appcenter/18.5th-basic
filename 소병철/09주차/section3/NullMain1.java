package section3;

public class NullMain1 {
    static void main(String[] args) {
        Data data = null;
        System.out.println("1. data = " + data); // null
        data = new Data();
        System.out.println("2. data = " + data); // 해시코드 출력
        data = null;
        System.out.println("3. data = " + data); // null
    }
}
