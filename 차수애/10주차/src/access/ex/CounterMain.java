package access.ex;

public class CounterMain {
    public static void main(String[] args) {
        MaxCounter counter = new MaxCounter(3);

        counter.increment();
        counter.increment();
        counter.increment();
        counter.increment();   // 최대값 초과할수 없음

        int count = counter.getCount();

        System.out.println(count);
    }
}
