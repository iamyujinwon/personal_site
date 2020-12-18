const about = document.querySelector('.about');
const aboutLink = document.querySelector('#about-link');

aboutLink.addEventListener('click', function () {
    about.className = 'about visible';
});
