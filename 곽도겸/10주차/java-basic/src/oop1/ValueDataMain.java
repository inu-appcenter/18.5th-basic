package oop1;

public class ValueDataMain {
    static void main(String[] args) {
        ValueObject valueObject = new ValueObject();
        valueObject.add();
        valueObject.add();
        valueObject.add();
        System.out.println("최종 숫자=" + valueObject.value);
    }
}
