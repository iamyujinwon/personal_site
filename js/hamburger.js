const menuIcon = document.querySelector('.hamburger-manu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', ()=> {
    console.log('hello');
    navbar.classList.toggle('change');
});