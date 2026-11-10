package section9.final1;

public class FieldInit {
    static final int CONST_VALUE = 10;
    final int value = 10;

    public FieldInit() {
        // this.value = value 컴파일 에러
    }
}
