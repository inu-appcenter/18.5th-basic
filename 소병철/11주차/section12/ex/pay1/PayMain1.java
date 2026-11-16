package section11.poly.ex.pay1;

public class PayMain1 {
    static void main(String[] args) {
        PayService payService = new PayService();

        // 카카오
        String payOption1 = "kakao";
        int amount1 = 5000;
        payService.processPay(payOption1, amount1);

        // 네이버
        String payOption2 = "naver";
        int amount2 = 10000;
        payService.processPay(payOption2, amount2);

        String payOption3 = "new";
        int amount3 = 15000;
        payService.processPay(payOption3, amount3);

        // 잘못된 결제 수단 선택
        String payOption4 = "bad";
        int amount4 = 10000;
        payService.processPay(payOption4, amount4);
    }
}
