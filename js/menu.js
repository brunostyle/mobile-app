/*========== MENU ==========*/

let btnMenu = document.getElementById('header-button'),
    menu = document.getElementById('header-menu');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-activo');
    btnMenu.classList.toggle('menu-active');
});

let botones = document.querySelectorAll('.header__menu a');

botones.forEach((elemento) => {
    elemento.addEventListener('click', () => {
        botones.forEach((seleccionado) => {
            seleccionado.classList.remove('link-activo');
        });
        elemento.classList.add('link-activo');
        menu.classList.remove('menu-activo');
        btnMenu.classList.toggle('menu-active');
    })
});

/* ACTIVO EL LINK CUANDO EL SCROLL ESTE ENCIMA DE UNA SECCION */

let sections = document.querySelectorAll('section[id]');

function scrollActive () {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 250;
        sectionId = current.getAttribute('id');
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.header__menu a[href*=' + sectionId + ']').classList.add('link-activo');
        } else {
            document.querySelector('.header__menu a[href*=' + sectionId + ']').classList.remove('link-activo');
        }
    });
}

window.addEventListener('scroll', scrollActive);