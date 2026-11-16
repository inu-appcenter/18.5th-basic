package access;

public class BankAccountMain {
    public static void main(String[] args) {
        BankAccount account = new BankAccount();
        account.deposit(10000);
        account.withdraw(3000);
        System.out.println("balance = " + account.getBalance());


        //public일 경우
//        int amount = 100;
//
//        account.balance += amount;
//
//        boolean isValid = account.isAmountValid(amount);
//        if (isValid) {
//            account.deposit(10000);
//        }
//
//        account.withdraw(3000);
//        System.out.println("balance = " + account.getBalance());
    }
}
