import React from "react";
import { Field, reduxForm } from "redux-form";

const AddRecipe = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const normalize = value => value.replace(/([^A-Za-zäüö, \d])/g, "");
  const fields = [
    {
      name: "name",
      component: "input",
      placeholder: "Name",
      text: "Add the name for your recipe here"
    },
    {
      name: "ingredients",
      component: "textarea",
      placeholder: "Ingredients",
      text: "List the ingredients here, use a comma to seperate"
    }
  ];

  const showFields = fields.map(({ name, component, placeholder, text }) => (
    <div className="modal-input" key={name}>
      <Field
        name={name}
        component={component}
        type="text"
        placeholder={placeholder}
        className="form-control"
        normalize={normalize}
      />
      <small className="form-text text-muted float-left">{text}</small>
    </div>
  ));

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group container">
        {showFields}

        <div>
          <button
            type="submit"
            disabled={pristine || submitting}
            className="btn btn-primary">
            Submit <i className="fa fa-send" />
          </button>

          <button
            type="button"
            disabled={pristine || submitting}
            className="btn btn-danger"
            onClick={reset}>
            Clear Fields <i className="fa fa-remove" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "AddRecipeForm"
})(AddRecipe);
