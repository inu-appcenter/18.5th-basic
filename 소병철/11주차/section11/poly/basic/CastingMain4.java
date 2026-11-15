package section11.poly.basic;

public class CastingMain4 {
    static void main(String[] args) {
        Parent parent1 = new Child();
        Child child1 = (Child) parent1;
        child1.childMethod(); // 문제 없음
        
        Parent parent2 = new Parent();
        Child child2 = (Child) parent2;
        child2.childMethod(); // 문제가 많음
    }
}
