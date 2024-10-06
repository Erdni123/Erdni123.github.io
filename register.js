document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById('registerForm');
    const registerMessage = document.getElementById('registerMessage');

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Останавливаем отправку формы

        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            registerMessage.textContent = 'Пароли не совпадают';
            registerMessage.style.display = 'block';
        } else {
            // Имитируем успешную регистрацию
            alert('Регистрация прошла успешно!');
            window.location.href = 'login.html'; // Перенаправление на страницу входа
        }
    });
});
