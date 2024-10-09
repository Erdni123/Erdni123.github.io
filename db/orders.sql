CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,        -- Уникальный ID заказа
    user_id INT REFERENCES users(user_id),  -- Пользователь, который сделал заказ
    total_price DECIMAL(10, 2) NOT NULL,    -- Общая стоимость заказа
    status VARCHAR(50) DEFAULT 'pending',   -- Статус заказа (в ожидании, отправлен, выполнен)
    created_at TIMESTAMP DEFAULT NOW()      -- Дата создания заказа
);
