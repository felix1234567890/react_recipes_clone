import React, { Component } from "react";
import "./App.css";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";

class App extends Component {
  state = {
    recipes: [],
    url:   "https://forkify-api.herokuapp.com/api/search",
    baseUrl:
      "https://forkify-api.herokuapp.com/api/search",
    details_id: 35384,
    pageIndex: 1,
    search: "",
    query: "?q=",
    error: "",
  };
  async getRecipes() {
    try {
      const data = await fetch(this.state.url+this.state.query+this.state.search);
      const json = await data.json();
      if (json.recipes.length === 0) {
        this.setState({ error: "No recipes to show" });
      } else {
        this.setState({ recipes: json.recipes });
      }
    } catch (error) {
      console.log(error);
    }
  }
  displayPage = (index) => {
    switch (index) {
      default:
      case 1:
        return (
          <RecipeList
            recipes={this.state.recipes}
            handleDetails={this.handleDetails}
            value={this.state.search}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            error={this.state.error}
          />
        );
      case 0:
        return (
          <RecipeDetails
            id={this.state.details_id}
            handleIndex={this.handleIndex}
          />
        );
    }
  };
  handleIndex = (index) => {
    this.setState({ pageIndex: index });
  };
  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id,
    });
  };
  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { baseUrl, query, search } = this.state;
    this.setState(
      () => {
        return { url: `${baseUrl}${query}${search}`, search: "" };
      },
      () => {
        this.getRecipes();
      }
    );
  };
  render() {
    return (
      <React.Fragment>{this.displayPage(this.state.pageIndex)}</React.Fragment>
    );
  }
}

export default App;
