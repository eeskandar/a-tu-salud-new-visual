import React, { Component } from "react";

export const CardRequest = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="container-request d-flex justify-content-between m-2">
        <div className="m-auto w-25 p-2">
          <img
            className="p-2 card-pic"
            src={props.medicine_picture}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; //evitar looping
              currentTarget.src =
                "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns=";
            }}
          />
        </div>
        <div className="m-auto w-50 p-1">
          <h5 className="m-2 text-secondary m_title">{props.title}</h5>
          <div className="d-flex">
            <div className="m-2">
              <h6 className="text-secondary">Presentación:</h6>
              <p className="text-secondary m_title">{props.presentation}</p>
            </div>
            <div className="m-2">
              <h6 className="text-secondary">Cantidad:</h6>
              <p className="text-secondary m_title">{props.quantity}</p>
            </div>
          </div>
        </div>
        <div className="m-auto w-25 p-2">
          <button
            type="button"
            className="btn btn-secondary text-white fw-bold "
          >
            Eliminar Solicitud
          </button>
        </div>
      </div>
    </div>
  );
};
