package pack;

import pack.a.User;
//import pack.a.* // pack.a 안에 있는 클래스들을 불러다가 사용 가능.

public class PackageMain2 {
    public static void main(String[] args) {
        Data data = new Data();
        User user = new User(); // import 사용으로 패키지 명 생략 가능
    }
}
