package section4;

public class MusicPlayerMain1 {
    static void main(String[] args) {
        // 절차 지향 프로그래밍
        int volume = 0;
        boolean isOn = false;

        // 켜기
        isOn = true;
        System.out.println("음악 플레이어를 시작합니다.");

        // 볼륨 업
        volume++;
        System.out.println("음악 플레이어 볼륨: " + volume);

        // 볼륨 업
        volume++;
        System.out.println("음악 플레이어 볼륨: " + volume);

        // 볼륨 감소
        volume--;
        System.out.println("음악 플레이어 볼륨: " + volume);

        // 음악 플레이어 상태
        System.out.println("음악 플레이어 상태 확인");
        if (isOn) {
            System.out.println("음악 플레이어 On, 볼륨: " + volume);
        } else {
            System.out.println("음악 플레이어 Off");
        }

        // 끄기
        isOn = false;
        System.out.println("음악 플레이어를 종료합니다.");
    }
}
