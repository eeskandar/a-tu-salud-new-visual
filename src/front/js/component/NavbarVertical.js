import React from "react";
import { Link, useLocation } from "react-router-dom";
import swal from "sweetalert";

export const NavbarVertical = () => {
  let location = useLocation();

  function includesPath(path) {
    if (location.pathname.includes(path)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div
      className={`${
        includesPath("/user/") || location.pathname == "/results"
          ? "col-1 bg-light view-display p-2 pt-5"
          : "col-1 col-lg-2 bg-light view-display p-2 pt-5"
      }`}
    >
      <div className="p-lg-3">
        <Link
          to={localStorage.getItem("token") == null ? "" : "/user/post"}
          onClick={(e) => {
            if (localStorage.getItem("token") == null) {
              swal("¡Debes iniciar sesión para poder donar un medicamento!");
            }
          }}
          className={`${
            includesPath("/user/") || location.pathname == "/results"
              ? "d-flex nav-link text-secondary mb-4 justify-content-center"
              : "d-flex nav-link text-secondary mb-4"
          }`}
        >
          <i className="fa-solid fa-hand-holding-heart fs-3 side-icon"></i>
          <span
            className={`${
              includesPath("/user/") || location.pathname == "/results"
                ? "d-none"
                : "d-none d-lg-block ps-2"
            }`}
          >
            Nueva Donación
          </span>
        </Link>
        <Link
          to={localStorage.getItem("token") == null ? "" : "/user/request-post"}
          onClick={(e) => {
            if (localStorage.getItem("token") == null) {
              swal(
                "¡Debes iniciar sesión para poder solicitar un medicamento!"
              );
            }
          }}
          className={`${
            includesPath("/user/") || location.pathname == "/results"
              ? "d-flex nav-link text-secondary mb-4 justify-content-center"
              : "d-flex nav-link text-secondary mb-4"
          }`}
        >
          <i className="fa-regular fa-square-plus fs-3 side-icon"></i>
          <span
            className={`${
              includesPath("/user/") || location.pathname == "/results"
                ? "d-none"
                : "d-none d-lg-block ps-2"
            }`}
          >
            Nueva Petición
          </span>
        </Link>
        <Link
          to={localStorage.getItem("token") == null ? "" : "/user/trade"}
          onClick={(e) => {
            if (localStorage.getItem("token") == null) {
              swal("¡Debes iniciar sesión para poder publicar!");
            }
          }}
          className={`${
            includesPath("/user/") || location.pathname == "/results"
              ? "d-flex nav-link text-secondary mb-4 justify-content-center"
              : "d-flex nav-link text-secondary mb-4"
          }`}
        >
          <i className="fa-solid fa-arrow-right-arrow-left fs-3 side-icon"></i>
          <span
            className={`${
              includesPath("/user/") || location.pathname == "/results"
                ? "d-none"
                : "d-none d-lg-block ps-2"
            }`}
          >
            Nuevo Intercambio
          </span>
        </Link>
        {/* <Link
          to=""
          className={`${
            includesPath("/user/") || location.pathname == "/results"
              ? "d-flex nav-link text-secondary mb-4 justify-content-center"
              : "d-flex nav-link text-secondary mb-4"
          }`}
        >
          <i className="fa-solid fa-envelope fs-3 side-icon"></i>
          <span
            className={`${
              includesPath("/user/") || location.pathname == "/results"
                ? "d-none"
                : "d-none d-lg-block ps-2"
            }`}
          >
            Mensajes
          </span>
        </Link> */}
        <Link
          to="/about-us"
          className={`${
            includesPath("/user/") || location.pathname == "/results"
              ? "d-flex nav-link text-secondary mb-4 justify-content-center"
              : "d-flex nav-link text-secondary mb-4"
          }`}
        >
          <i className="fa-solid fa-circle-question fs-3 side-icon"></i>
          <span
            className={`${
              includesPath("/user/") || location.pathname == "/results"
                ? "d-none"
                : "d-none d-lg-block ps-2"
            }`}
          >
            Sobre Nosotros
          </span>
        </Link>
      </div>
      {/* <div className="pb-5 mb-5 align-to-bot p-lg-3">
        <Link to="" className="d-flex nav-link text-secondary">
          <i className="fa-solid fa-gear fs-3 side-icon"></i>
          <span
            className={`${
              includesPath("/user/") || location.pathname == "/results"
                ? "d-none"
                : "d-none d-lg-block ps-2"
            }`}
          >
            Configuración
          </span>
        </Link>
      </div> */}
    </div>
  );
};
