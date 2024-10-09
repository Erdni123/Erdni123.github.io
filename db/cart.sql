CREATE TABLE cart (
    cart_id SERIAL PRIMARY KEY,         -- Уникальный ID корзины
    user_id INT REFERENCES users(user_id), -- Пользователь
    product_id INT REFERENCES products(product_id),  -- Товар в корзине
    quantity INT NOT NULL               -- Количество товара
);
