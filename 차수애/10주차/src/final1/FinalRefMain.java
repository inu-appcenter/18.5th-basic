package final1;

public class FinalRefMain {
    public static void main(String[] args) {
        final Data data = new Data();
        //data = new Data(); //final 변경 불가 컴파일 오류
        //참조형 변수 data에 fianl이 붙어 더이상 참조값을 변경할수없다.

        //참조 대상의 값은 변경 가능함
        data.value = 10;
        System.out.println(data.value);

        data.value = 20;
        System.out.println(data.value);
    }
}
