package ref;

public class VarChange1 {
  public static void main(String[] args) {
    int a = 10;
    int b = 20;
    System.out.println("a =" + a);
    System.out.println("b =" + b);

    //a변경
    a = 20;
    System.out.println("변경 a= 20");
    System.out.println("a =" + a);
    System.out.println("b =" + b);
  }
}