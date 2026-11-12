package ref;

// import class1.student; // 이게 선언되어 잇으면 안됨
//class 패키지에서 선언한 Student를 사용하게 됨

public class Method2 {

    public static void main(String[] args) {
        // student=ref.Student@8efb846
        Student student1 = createStudent("학생1", 15, 90);
        System.out.println("student1="+student1); // student1=ref.Student@8efb846
        // student=ref.Student@2a84aee7
        Student student2 = createStudent("학생2", 16, 80);
        System.out.println("student2="+student2); // student2=ref.Student@2a84aee7

        printStudent(student1);
        printStudent(student2);
    }

    static Student createStudent(String name, int age, int grade) {
        Student student = new Student(); // x001
        System.out.println("student="+student);
        student.name = name;
        student.age = age;
        student.grade = grade;
        return student; // x001
    }

    static void printStudent(Student student) {
        System.out.println("이름:" + student.name + " 나이:" + student.age + " 성적:" + student.grade);
    }
}