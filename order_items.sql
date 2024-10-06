CREATE TABLE order_items (
    order_item_id SERIAL PRIMARY KEY,   -- Уникальный ID товара в заказе
    order_id INT REFERENCES orders(order_id),  -- Заказ, в который входит товар
    product_id INT REFERENCES products(product_id),  -- Товар
    quantity INT NOT NULL,              -- Количество товара
    price DECIMAL(10, 2) NOT NULL       -- Цена товара в момент заказа
);
