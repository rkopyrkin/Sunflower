import burgerButton from '../assets/images/burger-button.svg';

const menuButton = document.querySelector('.burger-button');
menuButton.src = burgerButton;

const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
    if (menuButton.classList.contains('burger-button--open')) {
        menuButton.classList.remove('burger-button--open');
        menu.classList.remove('menu--open');
    } else {
        menuButton.classList.add('burger-button--open');
        menu.classList.add('menu--open');
    }
})