const btn = document.querySelector('#btn');
const notification = document.querySelector('.notification');

function showNotification() {
    notification.className = 'new-notification';
    notification.textContent = 'Oops. Обновите браузер.';
    notification.style.fontSize = '22px';
    notification.style.textAlign = 'center';
    notification.style.color = 'purple';
    notification.style.paddingTop = '30px';
}

btn.addEventListener('click', showNotification);