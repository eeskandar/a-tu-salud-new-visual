import React from "react";
import { Link, useLocation } from "react-router-dom";

export const NavbarVertical = () => {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <div
      className={`${
        location.pathname == "/results" ||
        location.pathname == "/user/trade" ||
        location.pathname == "/user"
          ? "col-1 bg-light d-flex flex-column justify-content-between"
          : "col-1 col-lg-2 bg-light d-flex flex-column justify-content-between"
      }`}
    >
      <div className="py-lg-3">
        <Link
          to=""
          className={`${
            location.pathname == "/results" ||
            location.pathname == "/user/trade" ||
            location.pathname == "/user"
              ? "justify-content-center d-flex nav-link text-secondary mb-4"
              : "ms-4 mt-4 d-flex nav-link text-secondary mb-4"
          }`}
        >
          <i className="fa-solid fa-hand-holding-heart fs-3 "></i>{" "}
          <span
            className={`${
              location.pathname == "/results" ||
              location.pathname == "/user/trade" ||
              location.pathname == "/user"
                ? "d-none"
                : "ps-2 d-none d-lg-block"
            }`}
          >
            Nueva Donación
          </span>
        </Link>
        <Link
          to=""
          className={`${
            location.pathname == "/results" ||
            location.pathname == "/user/trade" ||
            location.pathname == "/user"
              ? "justify-content-center d-flex nav-link text-secondary mb-4"
              : "ms-4 mt-4 d-flex nav-link text-secondary mb-4"
          }`}
        >
          <i className="fa-regular fa-square-plus fs-3"></i>
          <span
            className={`${
              location.pathname == "/results" ||
              location.pathname == "/user/trade" ||
              location.pathname == "/user"
                ? "d-none"
                : "ps-2 d-none d-lg-block"
            }`}
          >
            Nueva Petición
          </span>
        </Link>
        <Link
          to="/user/trade"
          className={`${
            location.pathname == "/results" ||
            location.pathname == "/user/trade" ||
            location.pathname == "/user"
              ? "justify-content-center d-flex nav-link text-secondary mb-4"
              : "ms-4 mt-4 d-flex nav-link text-secondary mb-4"
          }`}
        >
          <i className="fa-solid fa-arrow-right-arrow-left fs-3"></i>
          <span
            className={`${
              location.pathname == "/results" ||
              location.pathname == "/user/trade" ||
              location.pathname == "/user"
                ? "d-none"
                : "ps-2 d-none d-lg-block"
            }`}
          >
            Nuevo Intercambio
          </span>
        </Link>
        <Link
          to=""
          className={`${
            location.pathname == "/results" ||
            location.pathname == "/user/trade" ||
            location.pathname == "/user"
              ? "justify-content-center d-flex nav-link text-secondary mb-4"
              : "ms-4 mt-4 d-flex nav-link text-secondary mb-4"
          }`}
        >
          <i className="fa-solid fa-envelope fs-3"></i>
          <span
            className={`${
              location.pathname == "/results" ||
              location.pathname == "/user/trade" ||
              location.pathname == "/user"
                ? "d-none"
                : " ps-2 d-none d-lg-block"
            }`}
          >
            Mensajes
          </span>
        </Link>
        <Link
          to=""
          className={`${
            location.pathname == "/results" ||
            location.pathname == "/user/trade" ||
            location.pathname == "/user"
              ? "justify-content-center d-flex nav-link text-secondary mb-4"
              : "ms-4 mt-4 d-flex nav-link text-secondary mb-4"
          }`}
        >
          <i className="fa-solid fa-circle-question fs-3 "></i>{" "}
          <span
            className={`${
              location.pathname == "/results" ||
              location.pathname == "/user/trade" ||
              location.pathname == "/user"
                ? "d-none"
                : "ps-2 d-none d-lg-block"
            }`}
          >
            Sobre Nosotros
          </span>
        </Link>
      </div>
      <div className="py-lg-3">
        <Link
          to=""
          className={`${
            location.pathname == "/results" ||
            location.pathname == "/user/trade" ||
            location.pathname == "/user"
              ? "justify-content-center d-flex nav-link text-secondary mb-4"
              : "ms-4 d-flex nav-link text-secondary mb-4"
          }`}
        >
          <i className="fa-solid fa-gear fs-3"></i>{" "}
          <span
            className={`${
              location.pathname == "/results" ||
              location.pathname == "/user/trade" ||
              location.pathname == "/user"
                ? "d-none"
                : "ps-2 d-none d-lg-block"
            }`}
          >
            Configuración
          </span>
        </Link>
      </div>
    </div>
  );
};
