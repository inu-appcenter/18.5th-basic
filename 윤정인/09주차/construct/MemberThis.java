package construct;

public class MemberThis {
    String nameField;

    void initMember(String nameParameter){
        this.nameField = nameParameter; //이 경우 this가 생략되어 있다.
    }
}
