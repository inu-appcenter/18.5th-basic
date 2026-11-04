package ref;

public class NullMain4 {
    static void main(String[] args) {
        BigData bigData = new BigData();
        bigData.data=new Data();
        System.out.println("bigData.count= "+bigData.count);
        System.out.println("bigData.data="+bigData.data);

        System.out.println("bigData.value="+bigData.data.value);
    }
}
