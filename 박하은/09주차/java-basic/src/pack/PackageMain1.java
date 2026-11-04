package pack;

public class PackageMain1 {
    public static void main(String[] args) {
        Data data = new Data(); //같은 패키지면 경로 생략 가능
        pack.a.User user = new pack.a.User(); //다른 패키지면 풀 경로를 포함하여 적어야 함.
    }
}
