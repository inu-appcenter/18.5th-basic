package section2_2;

public class ClassStart5 {
    static void main(String[] args) {
        Student student1 = new Student();
        student1.name = "학생1";
        student1.age = 15;
        student1.grade = 90;

        Student student2 = new Student();
        student2.name = "학생2";
        student2.age = 16;
        student2.grade = 80;

        Student[] students = new Student[]{student1, student2};

        for (int i = 0; i<students.length;i++) {
            System.out.printf("이름: %s 나이: %d 성적: %d%n", students[i].name, students[i].age, students[i].grade);
        }
        
        // 향상된 for문
        for (Student s : students) {
            System.out.printf("이름: %s 나이: %d 성적: %d%n", s.name, s.age, s.grade);
        }
    }
}
