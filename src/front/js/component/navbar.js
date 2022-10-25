import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <i class="search fa-sharp fa-solid fa-magnifying-glass"></i>
          <a className="navbar-brand" href="#">
            <img src="https://media.discordapp.net/attachments/1030851949727334604/1034258021796298762/Group_1.png"></img>
          </a>
          <form className="d-flex">
            <input
              className="me-2"
              type="search"
              placeholder="    Buscar"
              aria-label="Search"
            ></input>
          </form>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="register nav-link active"
                aria-current="page"
                href="#"
              >
                Registrarse
              </a>
            </li>
            <li className="nav-item">
              <a className="login nav-link active" href="#">
                Iniciar sesion
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
