// DOM

// IMPORTS

import * as Ui from "./ui.js";

// SELECTORS

let divColorTheme = document.querySelector("#divColorTheme");
let imgColorThemeIcon = document.querySelector("#imgColorThemeIcon");
let colorCounter = 0;

let inputRecipeSearch = document.querySelector("#inputRecipeSearch");
let btnSearch = document.querySelector("#btnSearch");

let divSearchedRecipes = document.querySelector("#divSearchedRecipes");

// EVENT LISTENERS

btnSearch.addEventListener("click", async (e) => {
    e.preventDefault();
    divSearchedRecipes.innerHTML = "";
    Ui.fillOutDivSearchedRecipes(inputRecipeSearch.value);
    localStorage.setItem("searchValue", inputRecipeSearch.value);
    let pop = Ui.addPop();
    pop.play();
});

divColorTheme.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.toggle("darkMode");
    if (colorCounter % 2 === 0) {
        imgColorThemeIcon.src = "images/modeSwitch/sun.png";
    } else if (colorCounter % 2 === 1) {
        imgColorThemeIcon.src = "images/modeSwitch/moon.png";
    }
    colorCounter++;
});

window.addEventListener("load", (e) => {
    e.preventDefault(); 
    Ui.fillOutDivSearchedRecipes(localStorage.getItem("searchValue"));
});