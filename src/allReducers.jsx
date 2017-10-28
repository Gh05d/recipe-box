import { combineReducers } from "redux";
import RecipeReducer from "./RecipeReducer";

const allReducers = combineReducers({
  recipes: RecipeReducer
});

export default allReducers;
