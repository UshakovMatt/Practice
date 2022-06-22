var changeThemeButtons = document.querySelectorAll('.changeTheme'); // кнопки смены темы

changeThemeButtons.forEach(button => {
    button.addEventListener('click', function () { //обработчик на клик
        let theme = this.dataset.theme; // из аттрибута data-theme берём темы
        applyTheme(theme); //сама функция, меняющая тему
    });
});

function applyTheme(themeName) {
    document.querySelector('[title="theme"]').setAttribute('href', `theme-${themeName}.css`); //путь к файлу в пустой <link>
    changeThemeButtons.forEach(button => {
        button.style.display = 'block'; //все кнопки тем
    });
    document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none'; //скрываем ту которая активна
    localStorage.setItem('theme', themeName);
}

var activeTheme = localStorage.getItem('theme');// в Local Storage смотрим записано ли'theme' если да, то присваем его

if(activeTheme === null || activeTheme === 'light') { //если ничего не записано, или это 'light',то применяем эту тему
    applyTheme('light');
} else if (activeTheme === 'dark') { //соответственно если 'dark', то темную тему
    applyTheme('dark');
}   