import React from "react";
import { Link, useLocation } from "react-router-dom";

export const NavbarVertical = () => {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <div
      className={`${
        location.pathname == "/results" ||
        location.pathname == "/user/post" ||
        location.pathname == "/user/trade" ||
        location.pathname == "/user"
          ? "col-1 p-0 bg-light view-display p-2"
          : "col-1 col-lg-2 p-0 bg-light view-display p-2"
      }`}
    >
      <div className="p-lg-5">
        <Link to="" className="d-flex nav-link text-secondary mb-4">
          <i className="fa-solid fa-hand-holding-heart fs-3 pe-2"></i>{" "}
          <span
            className={`${
              location.pathname == "/results" ||
              location.pathname == "/user/trade" ||
              location.pathname == "/user"
                ? "d-none"
                : "d-none d-lg-block"
            }`}
          >
            Nueva Donación
          </span>
        </Link>
        <Link to="" className="d-flex nav-link text-secondary mb-4">
          <i className="fa-regular fa-square-plus fs-3 pe-2"></i>
          <span
            className={`${
              location.pathname == "/results" ||
              location.pathname == "/user/trade" ||
              location.pathname == "/user"
                ? "d-none"
                : "d-none d-lg-block"
            }`}
          >
            Nueva Petición
          </span>
        </Link>
        <Link to="/user/trade" className="d-flex nav-link text-secondary mb-4">
          <i className="fa-solid fa-arrow-right-arrow-left fs-3 pe-2"></i>
          <span
            className={`${
              location.pathname == "/results" ||
              location.pathname == "/user/trade" ||
              location.pathname == "/user"
                ? "d-none"
                : "d-none d-lg-block"
            }`}
          >
            Nuevo Intercambio
          </span>
        </Link>
        <Link to="" className="d-flex nav-link text-secondary mb-4">
          <i className="fa-solid fa-envelope fs-3 pe-2"></i>
          <span
            className={`${
              location.pathname == "/results" ||
              location.pathname == "/user/trade" ||
              location.pathname == "/user"
                ? "d-none"
                : "d-none d-lg-block"
            }`}
          >
            Mensajes
          </span>
        </Link>
        <Link to="" className="d-flex nav-link text-secondary mb-4">
          <i className="fa-solid fa-circle-question fs-3 pe-2"></i>{" "}
          <span
            className={`${
              location.pathname == "/results" ||
              location.pathname == "/user/trade" ||
              location.pathname == "/user"
                ? "d-none"
                : "d-none d-lg-block"
            }`}
          >
            Sobre Nosotros
          </span>
        </Link>
      </div>
      <div className="pb-5 mb-5 align-to-bot p-lg-5">
        <Link to="" className="d-flex nav-link text-secondary">
          <i className="fa-solid fa-gear fs-3 pe-2"></i>{" "}
          <span
            className={`${
              location.pathname == "/results" ||
              location.pathname == "/user/trade" ||
              location.pathname == "/user"
                ? "d-none"
                : "d-none d-lg-block"
            }`}
          >
            Configuración
          </span>
        </Link>
      </div>
    </div>
  );
};
