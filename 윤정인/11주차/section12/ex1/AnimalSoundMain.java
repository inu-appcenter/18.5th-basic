package Poly.ex1;

public class AnimalSoundMain {

    public static void main(String[] args){
        Dog dog = new Dog();
        Cat cat = new Cat();
        Cow caw = new Cow();

        System.out.println("동물 소리 테스트 시작 ");
        dog.sound();
        System.out.println("동물 소리 테스트 시작 ");

        System.out.println("동물 소리 테스트 시작 ");
        cat.sound();
        System.out.println("동물 소리 테스트 시작 ");

        System.out.println("동물 소리 테스트 시작 ");
        caw.sound();
        System.out.println("동물 소리 테스트 시작 ");
        //중복
        //배열과 for문을 사용해서 제거하려고 해도 배열의 타입을 Dog Cat Caw 중에 하나로 지정해야 한다.
        //서로 다른 Dog, Caw을 하나의 배열에 담는 것은 불가능 타입이 달라서
        //즉 다형성(다형적 참조와 메서드 오버라이딩) 활용하면 Dog, Cat, Caw가 모두 같은 타입 사용하고, 각자 자신의 메서드 호출 가능


    }
}
