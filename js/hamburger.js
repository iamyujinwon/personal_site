const menuIcon = document.querySelector('.hamburger-manu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', ()=> {
    navbar.classList.toggle('change');
});


/*home이나 다른 선택 사항 눌러도 제거 되겠금 설치!*/
const navList = document.querySelector('.nav-list');

navList.addEventListener('click', ()=> {
    navbar.classList.toggle('change');
});