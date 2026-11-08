package section8.static2;

public class DecoMain1 {
    static void main(String[] args) {
        String s = "Hello Java";
        DecoUtil1 utils = new DecoUtil1();

        String deco = utils.deco(s);
        System.out.println("Before: " + s);
        System.out.println("After: " + deco);
    }
}
