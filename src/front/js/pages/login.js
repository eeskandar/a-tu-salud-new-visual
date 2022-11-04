import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = actions.login;

  return (
    <div className="col-10">
      <div className="col-6 m-auto margin-a p-4 pb-5 rounded-form">
        <h1 className="text-center form-title">Iniciar sesión</h1>
        <form className="col-11 m-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control form-input border-0"
              onChange={(event) => {
                setEmail(event.target.defaultValue);
              }}
              defaultValue={email}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Nosotros nunca compartiremos tu correo con nadie más
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control form-input border-0"
              onChange={(event) => {
                setPassword(event.target.defaultValue);
              }}
              defaultValue={password}
              id="exampleInputPassword1"
            />
          </div>
          <div className="d-flex justify-content-center mt-5">
            <button
              type="submit"
              className="btn form-btn text-center btn-lg rounded-pill px-5"
              onClick={async (e) => {
                if (email.trim() == "") {
                  alert("Email can't be empty");
                } else if (password.trim() == "") {
                  alert("Your password can't be empty");
                } else {
                  let success = await login(email, password);
                  if (success == true) {
                    return navigate("/user/" + body.id);
                  }
                  alert("Email o contraseña invalidos");
                }
              }}
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
