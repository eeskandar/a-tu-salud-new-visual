import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(email, password) {
    try {
      let user;
      user = { email: email, password: password };
      const response = await fetch(process.env.BACKEND_URL + "/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        new Error("Ocurrió un error en la solicitud");
      }
      const body = await response.json();
      localStorage.setItem("token", body.token);
      navigate("/");
    } catch (error) {}
  }

  return (
    <div>
      <div className="col-6 m-auto my-5 p-4 pb-5 rounded-form">
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
                setEmail(event.target.value);
              }}
              value={email}
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
                setPassword(event.target.value);
              }}
              value={password}
              id="exampleInputPassword1"
            />
          </div>
          <div className="d-flex justify-content-center mt-5">
            <button
              type="submit"
              className="btn form-btn text-center btn-lg rounded-pill px-5"
              onClick={(e) => {
                if (email.trim() != "" && password.trim() != "") {
                  login(email, password);
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
