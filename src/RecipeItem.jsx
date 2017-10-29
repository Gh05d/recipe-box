import React, { Component } from "react";
import Collapsible from "react-collapsible";

class RecipeItem extends Component {
  render() {
    const { name, id, ingredients } = this.props.recipe;
    const showIngredients = ingredients
      ? ingredients.map((ingredient, key) => {
          return <div key={key}>{ingredient}</div>;
        })
      : "No Ingredients specified yet";

    return (
      <div>
        <Collapsible trigger={name} className="recipe" openedClassName="recipe">
          {showIngredients}

          <div className="button-group">
            <button
              className="btn btn-danger"
              onClick={() => this.props.delete(id)}>
              Delete Recipe <i className="fa fa-minus-square" />
            </button>

            <button
              className="btn btn-warning"
              onClick={() => this.props.edit(this.props.recipe)}>
              Edit Recipe <i className="fa fa-edit" />
            </button>
          </div>
        </Collapsible>
      </div>
    );
  }
}

export default RecipeItem;
