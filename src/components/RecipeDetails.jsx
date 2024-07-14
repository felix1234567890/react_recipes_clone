import React, { Component, use } from "react";
export const fetchRecipes = async (id) => {
  const url = `https://forkify-api.herokuapp.com/api/search/?q=${id}`;
  const data = await fetch(url);
  return data.json();
};
export default class RecipeDetails extends Component {
  state = {
    recipe: {},
  };

  async componentDidMount() {
    const id = this.props.id;
    const { recipe } = use(this.fetchRecipes(id));
    this.setState({ recipe });
  }
  render() {
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients,
    } = this.state.recipe;
    const { handleIndex } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <button
                type="button"
                className="btn btn-warning mb-5"
                onClick={() => handleIndex(1)}
              >
                Back to List
              </button>
              <img src={image_url} className="d-block w-100" alt="" />
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6>{title}</h6>
              <h6 className="text-warning text-slanted">
                provided by {publisher}
              </h6>
              <a
                href={publisher_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Publisher web
              </a>
              <a
                href={source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success mx-2"
              >
                Recipe URL
              </a>
              <ul className="list-group mt-4">
                <h2 className="mt-3 mb-4">Ingredients</h2>
                {ingredients.map((item, i) => {
                  return (
                    <li key={i} className="list-group-item text-slanted">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
