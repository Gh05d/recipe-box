import React from "react";
import * as types from "./constants";

const INITIALSTATE = {
  recipeList: ["Spaghetti", "Lasagne", "Pizza"]
};

export default function(state = INITIALSTATE, action) {
  switch (action.type) {
    case types.ADD_RECIPE:
      let newList = state.recipeList.push(action.payload.recipe);
      return { ...state, newList };

    default:
      return state;
  }
}
