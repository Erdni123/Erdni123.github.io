// Возможные ответы бота
const botReplies = {
  greeting: ["Привет! Как я могу помочь?", "Здравствуйте! Чем я могу вам помочь?", "Приветствую вас! Чем могу помочь?"],
  product: ["Мы предлагаем диваны, кровати и столы. Хотите узнать больше?", "Могу рассказать о нашем ассортименте мебели: диваны, кровати, столы.", "У нас есть отличные диваны и кровати. Что бы вы хотели узнать?"],
  delivery: ["Доставка занимает 3-5 дней. Хотите узнать больше?", "Мы доставляем в течение недели. Хотите оформить заказ?", "Мы предлагаем доставку в течение 5 рабочих дней."],
  general: ["Это отличный вопрос! Позвольте подумать...", "Интересно, давайте обсудим это.", "Я здесь, чтобы помочь вам с любыми вопросами."],
  farewell: ["До встречи!", "Спасибо за визит!", "До скорых встреч!"],
  default: ["Интересный вопрос! Чем могу помочь ещё?", "Простите, но не уверен, что понимаю. Может, вам помочь с чем-то ещё?", "Не совсем понял. Могу ли я помочь вам в другом?"]
};

// Ключевые слова для определения тем разговора
const keywords = {
  greeting: ["привет", "здравствуйте", "добрый день", "доброе утро"],
  product: ["товары", "диваны", "кровати", "столы", "мебель"],
  delivery: ["доставка", "как доставить", "сроки доставки"],
  farewell: ["пока", "до свидания", "увидимся", "до встречи"]
};

// Определение ответа бота
function getBotReply(userMessage) {
  userMessage = userMessage.toLowerCase();

  for (let category in keywords) {
    for (let word of keywords[category]) {
      if (userMessage.includes(word)) {
        return botReplies[category][Math.floor(Math.random() * botReplies[category].length)];
      }
    }
  }

  // Если не нашлись ключевые слова, возвращаем общий ответ
  return botReplies.default[Math.floor(Math.random() * botReplies.default.length)];
}

// Открытие чата
function openChat() {
  const chatBox = document.getElementById("chatBox");
  chatBox.style.display = "block";
}

// Закрытие чата
function closeChat() {
  const chatBox = document.getElementById("chatBox");
  chatBox.style.display = "none";
}

// Отправка сообщения
function sendMessage() {
  const userInput = document.getElementById("userInput").value;
  const chatBody = document.getElementById("chatBody");

  if (userInput.trim() !== "") {
    // Добавляем сообщение пользователя в чат
    const userMessage = `<p class="user-message">${userInput}</p>`;
    chatBody.innerHTML += userMessage;

    // Очищаем поле ввода
    document.getElementById("userInput").value = "";

    // Прокручиваем чат вниз
    chatBody.scrollTop = chatBody.scrollHeight;

    // Ответ бота через 1.5 секунды
    setTimeout(() => {
      const botReply = `<p class="bot-message">${getBotReply(userInput)}</p>`;
      chatBody.innerHTML += botReply;

      // Прокрутка чата вниз
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 1500);
  }
}
