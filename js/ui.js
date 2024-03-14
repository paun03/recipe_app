// DOM

// IMPORTS

import * as FetchData from "./fetch.js";

// FUNCTIONS

let addPop = () => {
    let audio = new Audio('audio/pop.mp3');
    audio.volume = 0.3;
    return audio;
};

let fillOutDivSearchedRecipes = async (fetchedValue) => {
    try {
        let fetchedData = await FetchData.fetchRecipe(fetchedValue);
        for (let i = 0; i < fetchedData.meals.length; i++) {
            let div = document.createElement("div");
            div.classList.add("divRecipe");
            let img = document.createElement("img");
            img.src = fetchedData.meals[i].strMealThumb;
            let h3 = document.createElement("h3");
            h3.innerHTML = fetchedData.meals[i].strMeal;
            let div2 = document.createElement("div2");
            div2.classList.add("divMoreInfo");
            let p = document.createElement("p");
            p.innerHTML = fetchedData.meals[i].strArea + ", ";
            let p2 = document.createElement("p");
            p2.innerHTML = fetchedData.meals[i].strCategory + ".";
            div.setAttribute("data", i);
            div2.append(p, p2);
            div.append(img, h3, div2);
            divSearchedRecipes.append(div);
        }
    } catch(error) {
        console.error(error);
    }
};

let fillOutSelectedRecipe = async (fetchedValue, e) => {
    sectionSelectedRecipe.innerHTML = "";
    try {
        let dataIndex = e.target.closest(".divRecipe").getAttribute("data");
        let fetchedData = await FetchData.fetchRecipe(fetchedValue);
        console.log(fetchedData);
        if (dataIndex !== "") {
            for (let i = 0; i < fetchedData.meals.length; i++) {
                if (dataIndex == i) {
                    let selectedMeal = fetchedData.meals[i];
                    let h2 = document.createElement("h2");
                    h2.innerHTML = selectedMeal.strMeal;
                    let img = document.createElement("img");
                    img.src = selectedMeal.strMealThumb;
                    let h3 = document.createElement("h3");
                    h3.innerHTML = "How To Prepare?";
                    let p = document.createElement("p");
                    p.innerHTML = selectedMeal.strInstructions;
                    let a = document.createElement("a");
                    let p2 = document.createElement("p");
                    a.href = `${selectedMeal.strYoutube}/embed/YsJXZwE5pdY/`;
                    p2.innerHTML = `Click Here to Check Out Recipe for ${selectedMeal.strMeal}`;
                    a.append(p2);
                    sectionSelectedRecipe.append(h2, img, h3, p, a);
                    setTimeout(() => {
                        sectionSelectedRecipe.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 300);
                }
            }
        }
    } catch(error) {
        console.error(error);
    }
};


// EXPORTS

export {fillOutDivSearchedRecipes, addPop, fillOutSelectedRecipe};