import React from "react";

export default function Recipe(props) {
  const { image_url, title, source_url, publisher, handleDetails } = props.recipe;

  return (
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card">
          <img
            src={image_url}
            className="img-card-top"
            alt=""
            style={{ height: "14rem", objectFit: "cover" }}
          />
          <div className="card-body">
            <h6>{title}</h6>
            <h6 className="text-warning text-slanted">
              provided by {publisher}
            </h6>
          </div>
          <div className="card-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleDetails}
            >
              Details
            </button>
            <a
              href={source_url}
              className="btn btn-success mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Recipe URL
            </a>
          </div>
        </div>
      </div>
  );
}
