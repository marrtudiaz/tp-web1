"use strict";
/*menu desplegable principal*/
let menu = document.querySelector('.btn_menu');
let navegador = document.querySelector(".navigation");
menu.addEventListener("click", toggleMenu)
function toggleMenu() {
    navegador.classList.toggle("show");
}
/*Menu desplegable de diseños */
let menu_diseños = document.querySelector('.btn_diseños');
let navegador_diseños = document.querySelector(".navigation_diseños")
menu_diseños.addEventListener("click", toggleMenu_diseños)
function toggleMenu_diseños() {
    navegador_diseños.classList.toggle("show");
}


