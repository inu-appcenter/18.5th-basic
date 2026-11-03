package section6.pack;

// import문 사용
import section6.pack.a.User;

public class PackageMain2 {
    static void main(String[] args) {
        Data d = new Data();
        User u = new User(); // 풀네임을 안 써도 된다
    }
}
