document.querySelector('.toggler').onclick = () => {
    document.querySelector('ul.navigation').classList.toggle('active');
}

window.onscroll = () => {
    document.querySelector('ul.navigation').classList.remove('active');
}