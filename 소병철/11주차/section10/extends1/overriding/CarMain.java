package section10.extends1.overriding;

public class CarMain {
    static void main(String[] args) {
        ElectricCar electricCar = new ElectricCar();
        electricCar.move(); // 오버라이드됨

        GasCar gasCar = new GasCar();
        gasCar.move();
    }
}
