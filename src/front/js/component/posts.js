import React from "react";
import { Link } from "react-router-dom";

export const Posts = (props) => {
  const activeComponent = props.active_component;
  const upperActiveComponent =
    activeComponent.charAt(0).toUpperCase() + activeComponent.slice(1);
  console.log(upperActiveComponent);

  const title = props.title;
  const upperTitle = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <div className="d-flex justify-content-center">
      <div className="container-request d-flex justify-content-between m-2">
        <div className="m-auto w-75 p-2 d-flex">
          <object
            data={props.image}
            className="card-img-top"
            type="image/jpg"
            style={{ maxWidth: "10rem" }}
          >
            <img
              src="https://via.placeholder.com/400x400.png?text=Image+Not+Found"
              className="card-img-top"
              alt="stock picture"
            />
          </object>
          <div className="ps-3">
            <h5 className="mt-2 text-secondary">{upperTitle}</h5>
            <h6 className="text-secondary">{upperActiveComponent}</h6>
          </div>
        </div>
        <div className="m-auto w-25 p-2">
          <Link
            className="btn btn-info text-white fw-bold m-1"
            to={"/more-info/" + props.id}
          >
            Más información
          </Link>

          <div>
            <h6 className="text-secondary">Ciudad</h6>
            <p className="text-secondary">{props.city}</p>
            <h6 className="text-secondary">Fecha de vencimiento</h6>
            <p className="text-secondary">{props.expiration_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
