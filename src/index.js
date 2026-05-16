import "./styles.css"
import { homePage } from "./homepage.js"
import { about } from "./about.js"
import { menu } from "./menu.js"

homePage()

const homeBtn = document.querySelector('.home-btn')
const menuBtn = document.querySelector('.menu-btn')
const aboutBtn = document.querySelector('.about-btn')
const footerMealBtn = document.querySelector('.footer-meal-btn')
const navBar = document.querySelector('.navbar')
const contentContainer = document.querySelector('#content')

navBar.addEventListener('click', (event) => {
    if(event.target.classList.contains('home-btn')){
        contentContainer.replaceChildren()
        homePage()
    }
    if(event.target.classList.contains('menu-btn')){
        contentContainer.replaceChildren()
        menu()
    }
    if(event.target.classList.contains('about-btn')){
        contentContainer.replaceChildren()
        about()
    }
})  

footerMealBtn.addEventListener('click', (e) => {
    contentContainer.replaceChildren()
    menu()
})






