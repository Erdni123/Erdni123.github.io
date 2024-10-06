document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Останавливаем отправку формы

        // Здесь идет имитация проверки логина и пароля
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === '12345') {
            window.location.href = '/index.html'; // Успешный вход, переходим на главную страницу
        } else {
            loginMessage.style.display = 'block'; // Показать сообщение об ошибке
        }
    });
});
