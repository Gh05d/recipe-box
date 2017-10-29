import * as types from "./constants";

export function deleteRecipe(id) {
  return {
    type: types.DELETE_RECIPE,
    payload: { id }
  };
}

export function addRecipe({ name, ingredients }, id) {
  const action = {
    type: types.ADD_RECIPE,
    payload: {
      name,
      id,
      ingredients
    }
  };

  return action;
}

export function editRecipe({ name, id, ingredients }) {
  const action = {
    type: types.EDIT_RECIPE,
    payload: {
      name,
      id,
      ingredients
    }
  };

  return action;
}
