package section10.extends1.ex3;

public class CarMain {
    static void main(String[] args) {
        ElectricCar electricCar = new ElectricCar();
        electricCar.move(); // 부모 클래스의 메서드를 그대로 사용
        electricCar.charge();
        electricCar.openDoor();

        GasCar gasCar = new GasCar();
        gasCar.move();
        gasCar.fillUp();
        gasCar.openDoor();

        HydrogenCar hydrogenCar = new HydrogenCar();
        hydrogenCar.move();
        hydrogenCar.fillHydrogen();
        hydrogenCar.openDoor();
    }
}
