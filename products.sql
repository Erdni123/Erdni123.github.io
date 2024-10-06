CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,        -- Уникальный ID товара
    category_id INT REFERENCES categories(category_id), -- Категория товара
    name VARCHAR(255) NOT NULL,           -- Название товара
    description TEXT,                     -- Описание товара
    price DECIMAL(10, 2) NOT NULL,        -- Цена товара
    image_url VARCHAR(255),               -- Ссылка на изображение товара
    stock INT NOT NULL,                   -- Количество на складе
    created_at TIMESTAMP DEFAULT NOW(),   -- Дата добавления товара
    updated_at TIMESTAMP DEFAULT NOW()    -- Дата последнего обновления товара
);
