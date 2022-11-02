import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  const user = store.user;

  return (
    <div className="container-fluid d-flex justify-content-between p-0">
      <div className="col-2 bg-secondary p-0">
        {/* sidebar */}
        <div className="d-flex justify-content-center mt-5">
          <img
            src="https://images.hola.com/imagenes/mascotas/20220811215146/mapaches-curiosidades-dn/1-124-915/mapaches-curiosidades-mascota-t.jpg"
            alt="profile_picture"
            className="prof-pic"
          />
        </div>
        <div className="text-white text-center mt-3 fw-bold">
          user.name + user.last_name
        </div>
        <Link to="" className="nav-link text-white mt-4 text-center">
          Información
        </Link>
        <Link to="" className="nav-link text-white mt-2 text-center">
          Donaciones
        </Link>
        <Link to="" className="nav-link text-white mt-2 text-center">
          Solicitudes
        </Link>
        <Link to="" className="nav-link text-white mt-2 text-center">
          Intercambio
        </Link>
        <Link to="" className="nav-link text-white mt-2 mb-5 text-center">
          Mensajes
        </Link>
      </div>
      <div className="col-10">
        {/* info */}
        <h1 className="text-center mt-4 text-secondary">
          Información de usuario
        </h1>
        <div className="d-flex justify-content-evenly pt-5">
          <div>
            <div>
              <div className="fs-5 text-secondary text-center">Nombre</div>
              <div className="fw-bold text-secondary text-center">
                user.name + user.last_name
              </div>
            </div>
            <div>
              <div className="fs-5 text-secondary text-center mt-4">Email</div>
              <div className="fw-bold text-secondary text-center">
                user.email
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="fs-5 text-secondary text-center">Ciudad</div>
              <div className="fw-bold text-secondary text-center">
                user.city
              </div>
            </div>
            <div>
              <div className="fs-5 text-secondary text-center mt-4">
                Teléfono
              </div>
              <div className="fw-bold text-secondary text-center">
                user.phone
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
