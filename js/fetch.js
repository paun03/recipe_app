// FUNCTIONS

let fetchRecipe = async (recipeName) => {
    try {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`);
        let data = await response.json();
        return data;
    } catch(error) {
        console.error(error);
    }
};

// EXPORTS

export {fetchRecipe};