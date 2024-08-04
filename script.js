'use strict'

const hamburgerMenu = document.querySelector(".fa-bars");
const closeHamburgerMenu = document.querySelector(".fa-times")

hamburgerMenu.addEventListener ("click",()=>{
    closeHamburgerMenu.classList.toggle("show");
    })
    closeHamburgerMenu.addEventListener ("click",()=>{
        hamburgerMenu.classList.toggle("show");
        })

   