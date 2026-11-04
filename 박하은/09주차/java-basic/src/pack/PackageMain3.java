package pack;

import pack.a.User;

public class PackageMain3 {
    public static void main(String[] args) {
        User userA = new User();
        pack.b.User userB = new pack.b.User(); //둘다 전체 경로 생략 불가능. 둘중 하나는 다 적어야 됨.
    }
}
