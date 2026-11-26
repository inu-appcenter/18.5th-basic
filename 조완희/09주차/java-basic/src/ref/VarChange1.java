package ref;

public class VarChange1 {

    public static void main(String[] args) {
        // a와 b는 아예 다른 메모리에 할당 되어 있음
        int a = 10;
        int b = a;

        System.out.println("a = " + a);
        System.out.println("b = " + b);

        a = 20;
        System.out.println("a = " + a);
        System.out.println("b = " + b);

        b = 30;

        System.out.println("a = " + a);
        System.out.println("b = " + b);


    }
}
