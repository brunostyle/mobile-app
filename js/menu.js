/*========== MENU ==========*/

let btnMenu = document.getElementById('header-button'),
    menu = document.getElementById('header-menu');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-activo');
});