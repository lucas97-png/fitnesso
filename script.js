document.querySelector('.toggler').onclick = () => {
    document.querySelector('ul.navigation').classList.toggle('active');
}

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('ul.navigation').classList.remove('active');
});