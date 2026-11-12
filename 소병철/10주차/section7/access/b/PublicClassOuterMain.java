package section7.access.b;

import section7.access.a.PublicClass;

public class PublicClassOuterMain {
    static void main(String[] args) {
        PublicClass publicClass = new PublicClass();

        // 접근 불가
        // DefaultClass1 class1 = new DefaultClass1();
        // DefaultClass2 class2 = new DefaultClass2();
    }
}
