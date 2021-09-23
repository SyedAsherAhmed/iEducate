const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const rightNav = document.querySelector('.rightNav');
const navlist = document.querySelector('.nav-list');


hamburger.addEventListener('click', (() => {
    rightNav.classList.toggle('visibilty');
    navlist.classList.toggle('visibilty');
    navbar.classList.toggle('height-nav');
}));