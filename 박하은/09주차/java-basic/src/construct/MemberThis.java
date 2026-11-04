package construct;

public class MemberThis {
    String nameField;

    void initMember(String nameParameter){
        nameField = nameParameter; //nameField가 지역변수에 없으니 자신의 멤버 변수를 가져다 씀
        //앞에 this 생략되어있음.
    }
}
