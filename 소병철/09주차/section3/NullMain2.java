package section3;

public class NullMain2 {
    static void main(String[] args) {
        Data data = null;
        data.value = 10; // 펑
        System.out.println("data = " + data.value); // 도달할 수 없는 라인.
    }
}
