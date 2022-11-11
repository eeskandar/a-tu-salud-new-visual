import React, { useState } from "react";
import { Link } from "react-router-dom";
import medPlaceholder from "../../img/med-03.png";

export const Posts = (props) => {
  let url = "";
  if (props.url == "exchange") {
    url = "/more-info-trade/";
  } else {
    url = "/more-info/";
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="container-request d-flex justify-content-between m-2">
        <div className="m-auto p-2 img-container">
          {props.image != null ? (
            <img
              className="p-2 card-pic"
              src={props.image}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; //evitar looping
                currentTarget.src = { medPlaceholder };
              }}
            />
          ) : (
            <img className="p-2 card-pic" src={medPlaceholder} />
          )}
        </div>
        <div className="w-50 p-2">
          <h5 className="mt-2 text-secondary m_title">{props.title}</h5>
          <h6 className="text-secondary m_title">{props.active_component}</h6>
          <div className="d-flex justify-content-between mt-4">
            <div>
              <h6 className="text-secondary">
                <i className="fa-solid fa-location-dot"></i> Ciudad
              </h6>
              <p className="text-secondary m_title">{props.city}</p>
            </div>
            <div>
              <h6 className="text-secondary">
                <i className="fa-solid fa-calendar-xmark"></i> Fecha de
                vencimiento
              </h6>
              <p className="text-secondary m_title">{props.expiration_date}</p>
            </div>
          </div>
        </div>
        <div className="m-auto p-2">
          <Link
            className="btn btn-info text-white fw-bold m-1"
            to={localStorage.getItem("token") == null ? "" : url + props.id}
            onClick={(e) => {
              if (localStorage.getItem("token") == null) {
                swal("¡Debes iniciar sesión para poder ver más información!");
              }
            }}
          >
            Más información
          </Link>
        </div>
      </div>
    </div>
  );
};
