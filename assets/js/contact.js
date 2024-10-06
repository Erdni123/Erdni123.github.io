document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Останавливаем отправку формы

        // Простая имитация успешной отправки формы
        setTimeout(function () {
            successMessage.style.display = 'block'; // Показать сообщение "Отправлено"
            contactForm.reset(); // Очистить форму
        }, 1000); // Имитация времени отправки (1 секунда)
    });
});
