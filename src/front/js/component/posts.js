import React from "react";
import { Link } from "react-router-dom";

export const Posts = () => {
  return (
    <div className="card m-4">
      <img src="..." className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link to="/more-info/1" className="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  );
};
