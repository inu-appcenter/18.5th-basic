package section2_2;

public class ClassStart2 {
    static void main(String[] args) {
        // 배열을 사용하는 방법도 있다.
        String[] studentNames = {"학생1", "학생2", "학생3"};
        int[] studentAges = {15, 16, 17};
        int[] studentGrades = {90, 80, 70};

        for (int i = 0; i < studentNames.length; i++) {
            System.out.printf("이름: %s 나이: %d 성적: %d%n",  studentNames[i], studentAges[i], studentGrades[i]);
        }
    }
}
