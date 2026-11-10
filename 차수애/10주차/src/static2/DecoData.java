package static2;

public class DecoData {

        private int instanceValue;

        // 정적 변수: 클래스에 하나만 있고, 모든 객체가 공유
        private static int staticValue;

        // 정적 메서드: 객체 없이 DecoData.staticCall()로 호출
        // 인스턴스 변수/메서드는 사용할 수 없음
        public static void staticCall() {
            //instanceValue++;  //  인스턴스 변수 접근 불가 (컴파일 에러)
            //instanceMethod(); //  인스턴스 메서드 접근 불가 (컴파일 에러)

            staticValue++;      //  정적 변수 접근 가능
            staticMethod();     //  정적 메서드 접근 가능
        }

        // 인스턴스 메서드
        //  인스턴스, static 모두 사용 가능
        public void instanceCall() {
            instanceValue++;    //  인스턴스 변수 접근
            instanceMethod();   //  인스턴스 메서드 접근

            staticValue++;      //  정적 변수 접근
            staticMethod();     //  정적 메서드 접근
        }

        private void instanceMethod() {
            System.out.println("instanceValue=" + instanceValue);
        }

        // 정적 메서드: 공유되는 staticValue 출력
        private static void staticMethod() {
            System.out.println("staticValue=" + staticValue);
        }
}
