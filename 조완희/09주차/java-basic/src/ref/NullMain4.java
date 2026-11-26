package ref;

public class NullMain4 {
    public static void main(String[] args) {
        BigData bigData = new BigData(); //x001
        bigData.data = new Data();
        System.out.println("bigData.count = " + bigData.count);
        System.out.println("bigData.data = " + bigData.data);
        //data 객체는 참조형 -> 기본 Null 할당

        //NullPointException

        //bigData.data.value == x001.null.value?????
        System.out.println("bigData.data.value = " + bigData.data.value);
    }
}
