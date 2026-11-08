package section6.com.helloshop.order;

import section6.com.helloshop.product.Product;
import section6.com.helloshop.user.User;

public class Order {
    User user;
    Product product;

    public Order(User user, Product product) {
        this.user = user;
        this.product = product;
    }
}
