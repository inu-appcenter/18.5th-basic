package class1;
// 이전 문제에 배열을 적용해 학생이 추가되어도 코드 변경 최소화
public class ClassStart2 {

    public static void main(String[] args) {
        String[] studentNames = {"학생1", "학생2", "학생3", "학생4"};
        int[] studentAges = {15, 16, 17, 20};
        int[] studentGrade = {90, 80, 70, 60};

        // 배열 사용의 한계
        // 데이터 변경할 때 매우 조심해서 작업
        // 학생 2의 데이터를 제거하려면 각각의 배열마다 학생2의 요소를 정확히 제거
//        String[] studentNames = {"학생1", "학생3", "학생4"};
//        int[] studentAges = {15, 17, 20};
//        int[] studentGrade = {90, 70, 60};

        for (int i = 0; i < studentNames.length; i++) {
            System.out.println("이름:" + studentNames[i] + " 나이:" + studentAges[i] + " 성적:" + studentGrade[i]);
        }
    }
}