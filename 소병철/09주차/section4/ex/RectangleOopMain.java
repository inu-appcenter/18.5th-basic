package section4.ex;

public class RectangleOopMain {
    static void main(String[] args) {
        Rectangle rectangle = new Rectangle();
        rectangle.width = 5;
        rectangle.height = 5;

        int area = rectangle.calculateArea();
        System.out.println("넓이: " + area);

        int perimeter = rectangle.calculatePerimeter();
        System.out.println("둘레: " + perimeter);

        boolean square = rectangle.isSquare();
        System.out.println("정사각형 여부: " + square);
    }
}
