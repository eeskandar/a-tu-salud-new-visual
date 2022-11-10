import React from "react";
import medPlaceholder from "../../img/med-03.png";

export const CardDonations = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="container-request d-flex justify-content-between m-2">
        <div className="m-auto w-25 p-2 img-container">
          {props.medicine_picture != null ? (
            <img
              className="p-2 card-pic"
              src={props.medicine_picture}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; //evitar looping
                currentTarget.src = { medPlaceholder };
              }}
            />
          ) : (
            <img className="p-2 card-pic" src={medPlaceholder} />
          )}
        </div>
        <div className="m-auto w-50 p-2">
          <h5 className="mt-2 mb-4 text-secondary m_title">{props.title}</h5>
          <div className="m-1 d-flex justify-content-between">
            <div>
              <h6 className="text-secondary mb-0">Cantidad</h6>
              <p className="text-secondary mb-0 m_title">{props.quantity}</p>
            </div>
            <div>
              <h6 className="text-secondary mb-0">
                <i className="fa-solid fa-calendar-xmark"></i> Fecha de
                vencimiento
              </h6>
              <p className="text-secondary mb-0 m_title">
                {props.expiration_date}
              </p>
            </div>
          </div>
          <div className="m-1">
            <p className="text-secondary my-2 m_phara text-limit">
              {props.description}
            </p>
          </div>
        </div>
        <div className="m-auto p-2 invisible">
          <button type="button" className="btn btn-info text-white fw-bold m-1">
            Realizada
          </button>
          <button
            type="button"
            className="btn btn-secondary text-white fw-bold m-1"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
