CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,          -- Уникальный ID пользователя
    username VARCHAR(255) NOT NULL,      -- Логин
    password_hash VARCHAR(255) NOT NULL, -- Хеш пароля
    email VARCHAR(255) NOT NULL UNIQUE,  -- Email пользователя
    role VARCHAR(50) DEFAULT 'customer', -- Роль пользователя (покупатель, админ)
    created_at TIMESTAMP DEFAULT NOW()   -- Дата регистрации
);
