package class1;

public class ClassStart5 {
  public static class Student {
  String name;
  int age;
  int grade;

  public Student(String name, int age, int grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}

  public static void main(String[] args) {
    Student student1 = new Student("학생1", 15, 90);
    Student student2 = new Student("학생2", 16, 80);

    Student[] students = new Student[]{student1, student2};

    for (int i=0; i < students.length; i++) {
      System.out.println("이름: " + students[i].name + ", 나이: " + students[i].age + ", 성적: " + students[i].grade);
    }
    for (int i=0; i < students.length; i++) {
      Student s = students[i];
      System.out.println("이름: " + s.name + ", 나이: " + s.age + ", 성적: " + s.grade);
    }
    for (Student s : students) {
      System.out.println("이름: " + s.name + ", 나이: " + s.age + ", 성적: " + s.grade);
    }
  }
}
