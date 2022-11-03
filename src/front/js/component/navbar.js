import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "./../store/appContext";
import logo from "../../img/atusalud logo.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const activeUser = store.activeUser;
  const logout = actions.logout;

  return (
    <div>
      <nav className="navbar navbar-expand-sm py-0 text-white nav-color ">
        <div className="container-fluid">
          <Link to="">
            <img src={logo} className="nav-logo ms-3"></img>
          </Link>
          <div
            className="navbar d-flex justify-content-end"
            id="navbarSupportedContent"
          >
            <form className="d-flex pe-5" role="search">
              <i className="fa-solid fa-magnifying-glass fs-2 px-4"></i>
              <input
                className="form-control me-2 nav-input border-0 rounded-pill"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
            </form>
            <ul className="navbar-nav py-1">
              {localStorage.getItem("token") == null ? (
                <div className="d-flex">
                  <li className="nav-item px-4">
                    <Link
                      to=""
                      className="nav-link text-white"
                      aria-current="page"
                    >
                      Registrarse
                    </Link>
                  </li>
                  <li className="nav-item px-4">
                    <Link to="/login" className="nav-link text-white">
                      Iniciar Sesión
                    </Link>
                  </li>
                </div>
              ) : (
                <div className="d-flex">
                  <li className="nav-item px-4">
                    <Link
                      to="/user"
                      className="nav-link text-white"
                      aria-current="page"
                    >
                      Perfil de usuario
                    </Link>
                  </li>
                  <li className="nav-item px-4">
                    <Link
                      to="/"
                      className="nav-link text-white"
                      onClick={(e) => {
                        logout();
                        navigate("/");
                      }}
                    >
                      Cerrar sesión
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div className="nav-bottom"></div>
    </div>
  );
};
