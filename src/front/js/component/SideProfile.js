import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

export const SideProfile = () => {
  const { store, actions } = useContext(Context);
  const user = store.activeUser;
  let location = useLocation();

  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <img
          src={user[0].profile_picture}
          alt="profile_picture"
          className="prof-pic"
        />
      </div>
      <div className="text-secondary text-center mt-3 fw-bold fs-4">
        {user[0].name + " " + user[0].last_name}
      </div>
      <Link
        to="/user"
        className={`nav-link text-secondary mt-4 text-center ${
          location.pathname == "/user" ? "fw-bold" : ""
        }`}
      >
        Información
      </Link>
      {/* this location.pathname stuff has to be done with the other links when they're defined */}
      <Link to="" className="nav-link text-secondary mt-2 text-center">
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
