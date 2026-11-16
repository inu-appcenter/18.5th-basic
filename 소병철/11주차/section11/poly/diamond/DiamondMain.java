package section11.poly.diamond;

public class DiamondMain {
    static void main(String[] args) {
        InterfaceA a = new Child();
        a.methodA();
        a.commonMethod();

        InterfaceB b = new Child();
        b.methodB();
        b.commonMethod();

        Child child = new Child();
        child.methodA();
        child.commonMethod();
    }
}
