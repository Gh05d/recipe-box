import React, { Component } from "react";

class RecipeItem extends Component {
  render() {
    const { recipe, id } = this.props;
    console.log(this.props);

    return (
      <div className="card">
        <div className="card-header" role="tab" id={`heading${id}`}>
          <h5 className="mb-0">
            <a data-toggle="collapse" href={`collapse${id}`}>
              {recipe}
            </a>
          </h5>
        </div>

        <div id={`collapse${id}`} className="collapse show" role="tabpanel">
          <div className="card-body">Zutat 1 Zutat 2 Zutat 3</div>
        </div>
      </div>
    );
  }
}

export default RecipeItem;
