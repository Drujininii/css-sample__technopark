'use strict';
import "./index.css";
import "./rules.css";
import "./back-to-menu.css";

(function a(b, c) {
    const rulesButton = document.getElementsByClassName('flex-container__button__rules')[0];
    rulesButton.addEventListener('click', (event) => {
        event.preventDefault();
        goToRules();
    });

    const backToMenuButton = document.getElementsByClassName('back-to-menu')[0];
    backToMenuButton.addEventListener('click', (event) => {
        event.preventDefault();
        goToMenu(event);
    })
})()

function goToRules() {
    const menu = document.getElementsByClassName('menu')[0];
    menu.classList.add('hidden');
    const rules = document.getElementsByClassName('rules')[0];
    rules.classList.remove('hidden');
    const backToMenuButton = document.getElementsByClassName('back-to-menu')[0];
    backToMenuButton.classList.remove('hidden');
}

function goToMenu() {
    event.target.classList.add('hidden');
    const rules = document.getElementsByClassName('rules')[0];
    rules.classList.add('hidden');
    const menu = document.getElementsByClassName('menu')[0];
    menu.classList.remove('hidden');
}


