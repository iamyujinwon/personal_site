const menuIcon = document.querySelector('.hamburger-manu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', ()=> {
    navbar.classList.toggle('change');
});

// const navLink = document.querySelector('.nav-link');

// navLink.addEventListener('click', ()=> {
//     console.log('hell0');
//     navbar.classList.toggle('change');
// });