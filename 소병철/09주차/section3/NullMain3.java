package section3;

public class NullMain3 {
    static void main(String[] args) {
        BigData bigData = new BigData();
        System.out.println("bigData.count = " + bigData.count); // 0
        System.out.println("bigData.data = " + bigData.data); // null
        System.out.println("bigData.data.value = " + bigData.data.value); // 펑
    }
}
