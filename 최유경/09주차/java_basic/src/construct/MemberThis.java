package construct;

import javax.lang.model.element.NestingKind;

public class MemberThis {
    String nameField;

    void initMember(String nameParameter){
        nameField = nameParameter; //this 생략
    }
}
