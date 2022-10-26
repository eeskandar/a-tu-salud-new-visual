import React from "react";
import { Link } from "react-router-dom";

export const NavbarVertical = () => {
  return (
    <div className="bg-light container-fluid view-display my-auto padding-a">
      <div className="">
        <Link to="" className="nav-link text-secondary mb-4">
          <i className="fa-solid fa-hand-holding-heart fs-3 pe-2"></i> Nueva
          Donación
        </Link>
        <Link to="" className="nav-link text-secondary mb-4">
          <i className="fa-regular fa-square-plus fs-3 pe-2"></i> Nueva Petición
        </Link>
        <Link to="" className="nav-link text-secondary mb-4">
          <i className="fa-solid fa-arrow-right-arrow-left fs-3 pe-2"></i> Nuevo
          Intercambio
        </Link>
        <Link to="" className="nav-link text-secondary mb-4">
          <i className="fa-solid fa-envelope fs-3 pe-2"></i> Mensajes
        </Link>
        <Link to="" className="nav-link text-secondary mb-4">
          <i className="fa-solid fa-circle-question fs-3 pe-2"></i> Sobre
          Nosotros
        </Link>
      </div>
      <div className="pb-5 mb-5 align-to-bot">
        <Link to="" className="nav-link text-secondary">
          <i className="fa-solid fa-gear fs-3 pe-2"></i> Configuración
        </Link>
      </div>
    </div>
  );
};