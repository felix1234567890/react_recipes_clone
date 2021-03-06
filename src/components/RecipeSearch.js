import React, { Component } from "react";

export default class RecipeSearch extends Component {
  render() {
    const { value, handleChange, handleSubmit } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4 text-center">
              <h1 className="text-slanted">
                Search for recipe with{" "}
                <strong className="text-danger">Food2Fork</strong>
              </h1>
              <form className="mt-4" onSubmit={handleSubmit}>
                <label htmlFor="search">
                  Search recipes separated by comma
                </label>
                <div className="input-group mt-3">
                  <input
                    type="text"
                    name="search"
                    placeholder="pizza,meat,fish"
                    className="form-control"
                    vaule={value}
                    onChange={handleChange}
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="input-group-text bg-primary text-white"
                    >
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
