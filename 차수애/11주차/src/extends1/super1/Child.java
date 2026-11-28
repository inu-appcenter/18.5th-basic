package extends1.super1;

public class Child extends Parent {
    public String value = "child"; //부모와 필드명 같음

    @Override
    public void hello() {
        System.out.println("Child.hello");
    }

    public void call() {
        System.out.println("this value = " + this.value); //this 생략 가능
        System.out.println("super value = " + super.value);

        this.hello(); //자기자신 참조
        super.hello(); // 부모클래스 참조
    }
}
