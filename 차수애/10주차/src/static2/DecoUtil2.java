package static2;

public class DecoUtil2 {
    // static을 통해 인스턴스 생성없이 클래스명을 통해 바로 호출 가능
    public static String deco(String str) {
        String result = "*" + str + "*";
        return result;
    }

}
