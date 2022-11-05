import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

export const SideProfile = () => {
  const { store, actions } = useContext(Context);
  let location = useLocation();

  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <img
          src={
            store.activeUser[0].profile_picture != null
              ? store.activeUser[0].profile_picture
              : "https://estaticos.muyinteresante.es/uploads/images/gallery/593938475bafe8ad873c986b/conejo-orejas-caidas-jardin_1.jpg"
          }
          alt="profile_picture"
          className="prof-pic"
        />
      </div>
      <div className="text-secondary text-center mt-3 fw-bold fs-4">
        {store.activeUser[0].name + " " + store.activeUser[0].last_name}
      </div>
      <Link
        to={`/user/` + store.activeUser[0].id}
        className={`nav-link text-secondary mt-4 text-center ${
          location.pathname == "/user/" + store.activeUser[0].id
            ? "fw-bold"
            : ""
        }`}
      >
        Información
      </Link>
      {/* this location.pathname stuff has to be done with the other links when they're defined */}
      <Link to="/user/donation" className="nav-link text-secondary mt-2 text-center">
        Donaciones
      </Link>
      <Link to="" className="nav-link text-secondary mt-2 text-center">
        Solicitudes
      </Link>
      <Link
        to="/user/trade"
        className={`nav-link text-secondary mt-2 text-center ${
          location.pathname == "/user/trade" ? "fw-bold" : ""
        }`}
      >
        Intercambio
      </Link>
      <Link to="" className="nav-link text-secondary mt-2 mb-5 text-center">
        Mensajes
      </Link>
    </div>
  );
};
