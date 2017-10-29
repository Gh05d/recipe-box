import React, { Component } from "react";
import RecipeList from "./RecipeList";
import Footer from "./Footer";
import Modal from "./modal/ModalRoot";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="header">
          <a href="https://www.freecodecamp.org/challenges/build-a-recipe-box">
            freeCodeCamp(<i className="fa fa-fire" />)
          </a>

          <span id="heading">Recipe Box</span>
        </div>
        <RecipeList />
        <Footer />
        <Modal />
      </div>
    );
  }
}

export default App;
