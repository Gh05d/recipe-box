import { combineReducers } from "redux";
import RecipesReducer from "./RecipesReducer";
import ModalReducer from "./modal/ModalReducer";
import { reducer as formReducer } from "redux-form";
import * as types from "./constants";

const forms = ["AddRecipeForm"];

const allReducers = combineReducers({
  recipes: RecipesReducer,
  modal: ModalReducer,
  form: formReducer.plugin(
    forms.reduce((acc, item) => {
      acc[item] = (state, action) => {
        // the plugin empties the form after it is submitted
        switch (action.type) {
          case types.HIDE_MODAL:
            return undefined;

          default:
            return state;
        }
      };
      return acc;
    }, {})
  )
});

export default allReducers;
