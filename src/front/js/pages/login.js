import React from "react";
import "../../styles/home.css";

export const Login = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div className="col-6 m-auto mt-5 p-4 pb-5 rounded-form">
        <h1 className="text-center form-title">Iniciar sesión</h1>
        <form className="col-11 m-auto">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control form-input border-0"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Nosotros nunca compartiremos tu correo con nadie más
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control form-input border-0"
              id="exampleInputPassword1"
            />
          </div>
          <div className="d-flex justify-content-center mt-5">
            <button
              type="submit"
              className="btn form-btn text-center btn-lg rounded-pill px-5"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
