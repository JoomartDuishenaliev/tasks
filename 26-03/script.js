const btn = document.querySelector('.btn');
const notification = document.querySelector('.notification');

function showNotification() {
    notification.className = 'alert alert-warning col mt-3 fw-bold text-center text-primary fs-5';
    notification.style.height = '100px';
    notification.textContent = 'Oopsie, ошибочка. Обновите страницу.';
    btn.className = 'btn btn-outline-warning col-10 mt-4 me-5';

    let timeoutId = setTimeout(() => {
        notification.className = '';
        notification.textContent = '';
        btn.className = 'btn btn-primary col-10 mt-4 me-5';
        clearTimeout(timeoutId);
    }, 750)
}

btn.addEventListener('click', showNotification);