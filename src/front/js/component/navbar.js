import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm py-0 bg-info text-white">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            Logo
          </a>
          <div
            className="navbar d-flex justify-content-end"
            id="navbarSupportedContent"
          >
            <form className="d-flex" role="search">
              <h2 className="px-4">
                <i className="fa-solid fa-magnifying-glass"></i>
              </h2>
              <input
                className="form-control me-2 bg-info  bg-opacity-25"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
            </form>
            <div className="navbar " id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item px-4">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="#"
                  >
                    Registrarse
                  </a>
                </li>
                <li className="nav-item px-4">
                  <Link to="/api/login" className="nav-link text-white">
                    Iniciar Sesión
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div style={{ background: "#92DCE5", height: "10px" }}></div>
      <div></div>
    </>
  );
};
