package ref;

public class NullMain1 {
    public static void main(String[] args) {
        Data data = null;
        System.out.println("1. data = " + data);
        data = new Data();
        System.out.println("2. data = " + data);
        // 이 순간 Date() 객체의 주소를 잃어 버림...
        // 참조하는 곳이 사라지면 Garbage Collection의 판단하에 할당을 없애버림
        data = null;
        System.out.println("3. data = " + data);

    }
}
