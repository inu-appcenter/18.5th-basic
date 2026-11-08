package oop1;

public class MusicPlayerMain1 {
  public static void main(String[] args) {
    int volumn = 0;
    boolean isOn  = false;
    isOn = true;
    System.out.println("음악 플레이어를 시작합니다");

    volumn++;
    System.out.println("음악 플레이어 볼륨:" + volumn);
    volumn++;
    System.out.println("음악 플레이어 볼륨:" + volumn);
    volumn--;
    System.out.println("음악 플레이어 볼륨:" + volumn);

    System.out.println("음악 플레이어 상태 확인");
    if(isOn){
      System.out.println("음악 플레이어 ON, 볼륨:" + volumn);
    }else{
      System.out.println("음악 플레이어 OFF");
    }
    isOn = false;
    System.out.println("음악 플레이어를 종료합니다.");
  }
  
}
