package section3;

public class Method2 {
    static void main(String[] args) {
        Student student1 = createStudent("학생1", 15, 90);
        Student student2 = createStudent("학생2", 16, 80);

        printStudent(student1);
        printStudent(student2);
    }

    static Student createStudent(String name, int age, int grade) {
        Student student = new Student();
        student.name = name;
        student.age = age;
        student.grade = grade;
        return student;
    }

    static void printStudent(Student student) {
        System.out.printf("이름: %s 나이: %d 성적: %d%n", student.name, student.age, student.grade);
    }
}
