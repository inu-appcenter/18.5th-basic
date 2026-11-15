package section10.extends1.access.child;

import section10.extends1.access.parent.Parent;

public class Child extends Parent {
    public void call() {
        publicValue = 1;
        protectedValue = 1;
        // defaultValue = 1; 패키지가 다르므로 호출 불가
        // privateValue = 1; 그냥 아예 불가

        publicMethod();
        protectedMethod();
        // defaultMethod();
        // privateMethod();

        printParent();
    }
}
