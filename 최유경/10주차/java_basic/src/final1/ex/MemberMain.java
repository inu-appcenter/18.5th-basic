package final1.ex;

public class MemberMain {
    static void main(String[] args) {
        Member member = new Member("myId", "kim");
        member.print();
        member.changeData("myId2","seo");
        member.print();
    }
}
