const btn = document.querySelector('.btn');
const notification = document.querySelector('.notification');

function showNotification() {
    notification.className = 'alert alert-secondary col mt-3 fw-bold text-center text-primary';
    notification.textContent = 'Oopsie ошибочка. Обновите страницу.';
    btn.className = 'btn btn-outline-warning col-10 mt-3 me-5';

    let count = 0;
    setInterval(() => {
        count++;
        if(count === 1){
            notification.className = '';
            notification.textContent = '';
            btn.className = 'btn btn-primary col-10 mt-3 me-5';
        }
    }, 1500)
}

btn.addEventListener('click', showNotification);