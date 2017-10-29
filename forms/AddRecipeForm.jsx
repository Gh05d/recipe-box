import React from "react";
import { Field, reduxForm } from "redux-form";

const AddRecipe = props => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Recipe Name:</label>
      </div>
      <div>
        <Field name="name" component="input" type="text" placeholder="Name" />
      </div>

      <div>
        <label>Ingredients:</label>
      </div>
      <div>
        <Field
          name="ingredients"
          component="textarea"
          type="text"
          placeholder="Ingredients"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={pristine || submitting}
          className="btn btn-primary">
          Submit
        </button>

        <button
          type="button"
          disabled={pristine || submitting}
          className="btn btn-danger"
          onClick={reset}>
          Clear Fields
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "AddRecipeForm"
})(AddRecipe);
