package class1;

public class ClassStart1 {
    public static void main(String[] args) {
        String student1Name = "학생1";
        int student1Age = 15;
        int student1Gradge = 90;

        String student2Name = "학생2";
        int student2Age = 16;
        int student2Gradge = 80;

        // 새 학생 추가시 마다 항상 코드를 새로 짜야함 -> 배열을 쓰자!
        System.out.println("이름:" + student1Name + " 나이" + student1Age + " 성적:" + student1Gradge);
        System.out.println("이름:" + student2Name + " 나이" + student2Age + " 성적:" + student2Gradge);
    }
}
