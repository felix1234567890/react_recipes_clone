import React, { Component } from "react";

export default class RecipeDetails extends Component {
  state = {
    recipe: {},
  };
  async componentDidMount() {
    const id = this.props.id;
    const url = `https://www.food2fork.com/api/get?key=cf349d087c773f3d4992d99460a8b848&rId=${id}`;
    try {
      const data = await fetch(url, { mode: "no-cors" });
      const json = await data.json();
      this.setState({ recipe: json.recipe });
    } catch (error) {
      console.log(error);
    }
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
                className="btn btn-primary"
              >
                Publisher web
              </a>
              <a
                href={source_url}
                target="_blank"
                className="btn btn-success mx-2"
              >
                Recipe URL
              </a>
              <ul className="list-gorup mt-4">
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
