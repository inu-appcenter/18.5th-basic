package extends1.ex2;

public class CarMain {

    public static void main(String[] args) {
        ElcetricCar electricCar = new ElcetricCar();
        electricCar.move();
        electricCar.charge();

        GasCar gasCar = new GasCar();
        gasCar.move();
        gasCar.fillUp();
    }

}
