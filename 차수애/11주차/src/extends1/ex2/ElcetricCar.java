package extends1.ex2;

public class ElcetricCar extends Car {
    // extends Car 를 사용해서 부모 클래스인 Car 를 상속 받는다. 상속 덕분에 ElectricCar 에서도
    //move() 를 사용할 수 있다.
    public void charge() {
        System.out.println("충전합니다.");
    }
}
