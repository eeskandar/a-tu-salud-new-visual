import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

export const SideProfile = () => {
  const { store, actions } = useContext(Context);
  let location = useLocation();
  ///////////////////////fix the img display in case there's an error
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
      <div className="text-secondary text-center mt-3 fw-bold fs-3 m_title">
        {store.activeUser[0].name + " " + store.activeUser[0].last_name}
      </div>
      <Link
        to={`/user/` + store.activeUser[0].id}
        className={`nav-link fs-5 text-secondary mt-4 text-center ${
          location.pathname == "/user/" + store.activeUser[0].id
            ? "fw-bold"
            : ""
        }`}
      >
        Información
      </Link>
      {/* this location.pathname stuff has to be done with the other links when they're defined */}
      <Link
        to={`/user/${store.activeUser[0].id}/donation`}
        className={`nav-link fs-5 text-secondary mt-2 text-center ${
          location.pathname == "/user/" + store.activeUser[0].id + "/donation"
            ? "fw-bold"
            : ""
        }`}
      >
        Donaciones
      </Link>
      <Link
        to={`/user/${store.activeUser[0].id}/request`}
        className={`nav-link fs-5 text-secondary mt-2 text-center ${
          location.pathname == "/user/" + store.activeUser[0].id + "/request"
            ? "fw-bold"
            : ""
        }`}
      >
        Solicitudes
      </Link>
      <Link
        to={`/user/${store.activeUser[0].id}/trades`}
        className={`nav-link fs-5 text-secondary mt-2 text-center ${
          location.pathname == "/user/" + store.activeUser[0].id + "/trades"
            ? "fw-bold"
            : ""
        }`}
      >
        Intercambio
      </Link>
    </div>
  );
};
