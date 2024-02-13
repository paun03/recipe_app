// DOM

// IMPORTS

import * as FetchData from "./fetch.js";

// FUNCTIONS

let fillOutDivSearchedRecipes = async (fetchedValue) => {
    try {
        let fetchedData = await FetchData.fetchRecipe(fetchedValue);
        console.log(fetchedData);
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
            div2.append(p, p2);
            div.append(img, h3, div2);
            divSearchedRecipes.append(div);
        }
    } catch(error) {
        console.error(error);
    }
};

// EXPORTS

export {fillOutDivSearchedRecipes};