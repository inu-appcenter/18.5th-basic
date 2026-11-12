package final1;

public class ConstMain2 {
    public static void main(String[] args) {
        // 상수 사용 static이라 클래스명.상수명으로 접근
        System.out.println("프로그램 최대 참여자 수 " + Constant.MAX_USERS);
        int currentUserCount = 999;
        process(currentUserCount++);
        process(currentUserCount++);
        process(currentUserCount++);
    }
    private static void process(int currentUserCount) {
        System.out.println("참여자 수:" + currentUserCount);
        //최대 참여자수 라는 의미가 바로 보인다
        if (currentUserCount > Constant.MAX_USERS) {
            System.out.println("대기자로 등록합니다.");
        } else {
            System.out.println("게임에 참가합니다.");
        }
    }

}
