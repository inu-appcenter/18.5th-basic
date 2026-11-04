package construct;

public class MemberInit {
    String name;
    int age;
    int grade;

    //추가
    void initMember(String name, int age, int grade){
        this.name = name; //여기서 this는 자기자신의 인스턴스의 참조를 뜻함.
        this.age = age;
        this.grade = grade;

    }
}
