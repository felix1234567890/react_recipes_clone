
import { handleSubmit } from "../actions";
import SubmitButton from "./SubmitButton";

export default function RecipeSearch(props) {
  const { value, handleChange } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4 text-center">
          <h1 className="text-slanted">
            Search for recipe with{" "}
            <strong className="text-danger">Food2Fork</strong>
          </h1>
          <form className="mt-4" action={handleSubmit}>
            <label htmlFor="search">Search recipes separated by comma</label>
            <div className="input-group mt-3">
              <input
                type="text"
                name="search"
                placeholder="pizza,meat,fish"
                className="form-control"
                value={value}
                onChange={handleChange}
              />
              <div className="input-group-append">
                <SubmitButton/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
