package construct;

public class MethodInitMain3 {

    public static void main(String[] args) {
        MemberInit member1 = new MemberInit();
        member1.initMember("user1",15,90); //초기값 넣기

        MemberInit member2 = new MemberInit();
        member2.initMember("user2",16,80);

        MemberInit[] menbers = {member1, member2};

        for(MemberInit s : menbers){
            System.out.println("이름:"+ s.name+"나이:"+s.age +"성적: "+ s.grade);
        }
    }

}
