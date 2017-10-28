import React, { Component } from "react";
import RecipeItem from "./RecipeItem";
import { connect } from "react-redux";

class RecipeList extends Component {
  render() {
    const displayRecipes = this.props.recipes.map((recipe, key) => {
      return <RecipeItem recipe={recipe} key={key} id={key} />;
    });

    return (
      <div className="container">
        <div id="accordion" role="tablist">
          {displayRecipes}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { recipes: state.recipes.recipeList };
}

export default connect(mapStateToProps)(RecipeList);
