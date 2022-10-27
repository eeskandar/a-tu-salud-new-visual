import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "./../store/appContext";
import logo from "../../img/atusalud logo.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const activeUser = store.activeUser;
  const setActiveUser = actions.setActiveUser;

  function logout() {
    localStorage.removeItem("token");
    setActiveUser({ id: "Guest" });
    navigate("/");
  }

  return (
    <>
      <nav className="navbar navbar-expand-sm py-0 bg-info text-white">
        <div className="container-fluid">
          <Link to="">
            <div className="navbar-brand text-white" href="#">
              <img src={logo} style={{ height: "50px" }}></img>
            </div>
          </Link>
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
                {activeUser[0].id == "Guest" ? (
                  <div className="d-flex">
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
                      <Link to="/login" className="nav-link text-white">
                        Iniciar Sesión
                      </Link>
                    </li>
                  </div>
                ) : (
                  <div className="d-flex">
                    <li className="nav-item px-4">
                      <Link
                        to={`/user/${activeUser[0].id}`}
                        className="nav-link text-white"
                        aria-current="page"
                      >
                        Perfil de usuario
                      </Link>
                    </li>
                    <li className="nav-item px-4">
                      <Link to="/" className="nav-link text-white">
                        Cerrar sesión
                      </Link>
                    </li>
                  </div>
                )}
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
