// Функция для открытия/закрытия чата
function toggleChat() {
    const chatContainer = document.getElementById("chat-container");
    chatContainer.style.display = (chatContainer.style.display === "none" || chatContainer.style.display === "") ? "flex" : "none";
}

// Функция для отправки сообщения
function sendMessage() {
    const inputField = document.getElementById("user-input");
    const userMessage = inputField.value.trim();
    
    if (userMessage) {
        addMessage(userMessage, 'user');
        generateBotResponse(userMessage);
        inputField.value = ''; // Очищаем поле ввода после отправки
    }
}

// Функция для добавления сообщения в чат
function addMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Автоматическая прокрутка чата вниз
}

// Функция для генерации ответа бота
async function generateBotResponse(userMessage) {
    let botMessage = '';

    if (userMessage.toLowerCase().includes('привет')) {
        botMessage = 'Привет! Как я могу вам помочь?';
    } else if (userMessage.toLowerCase().includes('помоги выбрать кровать')) {
        botMessage = 'У нас есть отличный выбор кроватей: односпальные, двуспальные и даже королевские! Какой стиль вам больше нравится?';
    } else if (userMessage.toLowerCase().includes('погода')) {
        // Получение данных о погоде через API OpenWeather
        const weather = await getWeather();
        botMessage = `Сейчас в вашем городе: ${weather}.`;
    } else if (userMessage.toLowerCase().includes('какой сегодня день')) {
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        botMessage = `Сегодня ${today.toLocaleDateString('ru-RU', options)}.`;
    } else if (userMessage.toLowerCase().includes('как тебя зовут')) {
        botMessage = 'Меня зовут Чат-бот! Я ваш виртуальный помощник по вопросам мебели и другим запросам.';
    } else {
        botMessage = `Я пока не знаю ответа на этот вопрос, но могу помочь с мебелью или узнать что-то за вас!`;
    }

    // Отправляем ответ бота
    setTimeout(() => {
        addMessage(botMessage, 'bot');
    }, 1000); // Задержка для реалистичного ответа
}

// Функция для получения погоды (API OpenWeather)
async function getWeather() {
    const apiKey = 'ВАШ_API_КЛЮЧ'; // Замените на свой ключ OpenWeather
    const city = 'Moscow'; // Замените на ваш город
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const temp = data.main.temp;
        const weatherDescription = data.weather[0].description;
        return `Температура ${temp}°C, ${weatherDescription}`;
    } catch (error) {
        console.error('Ошибка при получении погоды:', error);
        return 'Не удалось получить данные о погоде';
    }
}
