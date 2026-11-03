package section6.com.helloshop.order;

import section6.com.helloshop.product.Product;
import section6.com.helloshop.user.User;

public class OrderService {
    public void order() {
        User user = new User();
        Product product = new Product();
        Order order = new Order(user, product);
    }
}
