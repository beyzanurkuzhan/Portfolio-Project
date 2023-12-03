var menuBar = document.querySelector('#menu_bar');
var navLinks = document.querySelector('.nav_links');

navLinks.style.top = '-45px'

menuBar.onclick = function () {
    if (navLinks.style.top == '-45px') {
        navLinks.style.top = '50px';
    }
    else {
        navLinks.style.top = '-45px'
    }
}