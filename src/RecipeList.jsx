import React, { Component } from "react";
import RecipeItem from "./RecipeItem";
import { connect } from "react-redux";
import { addRecipe, editRecipe, deleteRecipe } from "./RecipeActions";
import { showModal, hideModal } from "./modal/ModalActions";
import * as types from "./constants";
import AddRecipeForm from "./forms/AddRecipeForm";
import EditRecipeForm from "./forms/EditRecipeForm";

class RecipeList extends Component {
  addRecipeModal = () => {
    this.props.showModal(types.MODAL_TYPE_RECIPE, {
      modalpagetitle: ["Create a new recipe"],
      title: "Create Recipe",
      body: <AddRecipeForm onSubmit={values => this.handleSubmit(values)} />
    });
  };

  editRecipeModal = recipe => {
    this.props.showModal(types.MODAL_TYPE_RECIPE, {
      modalpagetitle: [`Edit the recipe ${recipe.name}`],
      title: "Edit Recipe",
      body: (
        <EditRecipeForm
          recipe={recipe}
          onSubmit={values => this.handleEdit(values)}
        />
      )
    });
  };

  handleSubmit(values) {
    this.props.hideModal();
    this.props.addRecipe(values, this.props.recipes.length);
  }

  handleEdit(values) {
    this.props.hideModal();
    this.props.editRecipe(values);
  }

  render() {
    const displayRecipes = this.props.recipes.map((recipe, id) => {
      return (
        <RecipeItem
          recipe={recipe}
          key={id}
          id={id}
          delete={this.props.deleteRecipe}
          edit={this.editRecipeModal}
        />
      );
    });

    return (
      <div className="container" id="main">
        <div id="recipe-list">{displayRecipes}</div>

        <button
          type="button"
          className="btn btn-primary"
          id="add-button"
          onClick={() => this.addRecipeModal()}>
          Add Recipe <i className="fa fa-file-text-o" />
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { recipes: state.recipes.recipeList };
}

export default connect(mapStateToProps, {
  addRecipe,
  editRecipe,
  deleteRecipe,
  showModal,
  hideModal
})(RecipeList);
