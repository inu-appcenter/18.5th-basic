package class1;

public class ClassStart2 {
    public static void main(String[] args) {
        String[] studentNames = {"학생1", "학생2", "학생3"};
        int[] studentAges = {15,16, 19};
        int[] studentGrade = {90, 80, 76};

        for (int i = 0; i < studentNames.length; i++) {
            System.out.println("이름:" + studentNames[i] + " 나이" + studentNames[i] + " 성적:" + studentNames[i]);
        }

// 인덱스 수정이 굉장히 어렵고 버그가 나기도 쉽다./ 왜냐 인덱스에 맞춰서 해야하기 때문에
// class의 프로퍼티 별로 묶어서 사용 -> 수정 easy

   }
}
