import * as types from "./constants";

let localData = JSON.parse(localStorage.getItem("__recipes")) || [{}];
console.log(localData);
console.log(localStorage);
const INITIALSTATE = {
  recipeList: localData
};

export default function(state = INITIALSTATE, action) {
  switch (action.type) {
    case types.ADD_RECIPE:
      let ingredients;
      if (action.payload.ingredients) {
        ingredients = action.payload.ingredients.split(",");
      } else {
        ingredients = ["No ingredients yet"];
      }

      let newRecipe = {
        name: action.payload.name,
        id: action.payload.id,
        ingredients
      };

      localStorage.setItem(
        "__recipes",
        JSON.stringify([...state.recipeList, newRecipe])
      );
      console.log("Local Storage:", localStorage.__recipes);
      return { recipeList: [...state.recipeList, newRecipe] };

    case types.EDIT_RECIPE:
      let editedRecipeList = state.recipeList.map(recipe => {
        if (action.payload.id === recipe.id) {
          return {
            name: action.payload.name,
            id: recipe.id,
            ingredients: action.payload.ingredients.split(",")
          };
        }
        return recipe;
      });

      localStorage.setItem("__recipes", JSON.stringify(editedRecipeList));
      return { recipeList: editedRecipeList };

    case types.DELETE_RECIPE:
      let newList = state.recipeList.filter(
        recipe => action.payload.id !== recipe.id
      );

      localStorage.setItem("__recipes", JSON.stringify(newList));
      return { recipeList: newList };

    default:
      return state;
  }
}
