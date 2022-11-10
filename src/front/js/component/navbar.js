import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "./../store/appContext";
import logo from "../../img/logo-final.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const activeUser = store.activeUser;
  const logout = actions.logout;
  const urlParams = new URLSearchParams();

  async function consultPosts() {
    if (name.trim() != "") {
      urlParams.set("name", name);
      console.log(urlParams.toString());
      let success = await actions.getPosts(urlParams);
      setName("");
    } else swal("¡Ups!", "Ingresa un medicamento para hacer la busqueda.");
  }

  return (
    <div>
      <nav className="navbar pt-0 navbar-expand-sm row-10 text-white nav-color">
        <div className="container-fluid">
          <Link to="">
            <img src={logo} className="nav-logo ms-3 pt-1"></img>
          </Link>
          <div
            className="navbar d-flex justify-content-end"
            id="navbarSupportedContent"
          >
            <form className="d-flex pe-5 mt-2" role="search">
              <Link
                to="/results"
                onClick={(e) => {
                  consultPosts();
                }}
              >
                <i className="fa-solid fa-magnifying-glass text-white fs-2 px-4"></i>
              </Link>
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="form-control me-2 nav-input border-0 rounded-pill"
                placeholder="Buscar medicamento"
                aria-label="Search"
                // colocar el fetch con el value hacia el endpoint /api/solicitud y cambiar el link to /results
              />
            </form>
            <ul className="navbar-nav pt-1">
              {localStorage.getItem("token") == null ? (
                <div className="d-flex">
                  <li className="nav-item px-4">
                    <Link
                      to="/register"
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
                      to={`/user/` + store.activeUser[0].id}
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
      {/* <div className="nav-bottom"></div> */}
    </div>
  );
};
