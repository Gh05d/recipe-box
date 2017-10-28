import * as types from "./constants";

export function addRecipe(recipe) {
  const action = {
    type: types.ADD_RECIPE,
    payload: {
      recipe
    }
  };
}
