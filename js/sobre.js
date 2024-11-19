// Obter os elementos
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

// Alterna a classe "active" para mostrar ou esconder o menu
menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});
