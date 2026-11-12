package ref;

public class NullMain3 {
    static void main(String[] args) {
        BigData bigData = new BigData();
        System.out.println("bigData.cunt= "+bigData.count);
        System.out.println("bigData.data="+bigData.data);

        //NullPointerException
        System.out.println("bigData.value="+bigData.data.value);
    }
}
