/*==================== DARK LIGHT THEME ====================*/ 

let themeButton = document.getElementById('theme-button');
let lightTheme = 'light-theme';
let iconTheme = 'fa-moon';

let selectedTheme = localStorage.getItem('selected-theme');
let selectedIcon = localStorage.getItem('selected-icon');

let getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'light' : 'dark';
let getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-sun' : 'fa-moon';

if(selectedTheme) {
    document.body.classList[selectedTheme === 'light' ? 'add' : 'remove'](lightTheme);
    themeButton.classList[selectedIcon === 'fa-sun' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(lightTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});