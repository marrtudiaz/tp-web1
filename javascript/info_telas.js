"use strict";

let info_raso = document.querySelector(".info_raso");
let info_saten = document.querySelector(".info_saten");
let info_tul = document.querySelector(".info_tul");
let info_encaje = document.querySelector(".info_encaje");
let botones=document.querySelectorAll(".boton");

for (let boton of botones){
    boton.addEventListener("click",function(){
        boton.id.classList.toggle("show")   
    })
}

let lista = document.querySelector(".lista .encaje  img");
let telasbox = document.querySelector(".info_telas");
telasbox.addEventListener("click", (e) => {
    if (e.target !== telasbox) {
        encaje_info.classList.remove("show");
    }
    if (e.target !== telasbox) {
        tul_info.classList.remove("show");
    }
    if (e.target !== telasbox) {
        saten_info.classList.remove("show");
    }
    if (e.target !== telasbox) {
        raso_info.classList.remove("show");
    }
})



