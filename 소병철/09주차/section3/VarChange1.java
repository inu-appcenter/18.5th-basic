package section3;

public class VarChange1 {
    static void main(String[] args) {
        int a = 10;
        int b = a;
        System.out.printf("a = %d%nb = %d%n", a, b);

        // a를 변경 후 출력
        a = 20;
        System.out.printf("%n변경 a = 20%na = %d%nb = %d%n", a, b);

        // b를 변경 후 출력
        b = 30;
        System.out.printf("%n변경 b = 30%na = %d%nb = %d%n", a, b);

    }
}
