package access;

public class BankAccount {
    private int balance;

    public BankAccount() {
        balance = 0;
    }

    //public 메서드 : deposit
    public void deposit(int amount){
        if(isAmountVaild(amount)) {
            balance += amount;
        }else{
            System.out.println("유효하지 않은 금액");
        }
    }
    //withdraw 메서드 : withdraw
    public void withdraw(int amount){
        if(isAmountVaild(amount) && balance - amount >=0) {
            balance -= amount;

        }else {
            System.out.println("유효하지 않은 금액이거나 잔액 부족 ");
        }
    }

    //public 메서드: getBalance
    public int getBalance(){
        return balance;
    }

    private  boolean isAmountVaild(int amount){
        //금액이 0보다 커야한다.
        return amount > 0;
    }
}
