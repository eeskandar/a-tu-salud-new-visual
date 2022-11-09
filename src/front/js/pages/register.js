import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./../store/appContext";
import swal from "sweetalert";
import { UploadImage } from "../component/UploadImage";

export const Register = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const register = actions.register;

  return (
    <div className="col-11 col-lg-10 row-80 overflow-y-axis">
      <div className="col-8 col-lg-6 m-auto my-5 p-4 pb-5 rounded-form">
        <h1 className="text-center form-title">Regístrate</h1>
        <form className="col-11 m-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <input
              type="string"
              className="form-control form-input border-0 mb-3"
              onChange={(event) => {
                setName(event.target.value);
              }}
              value={name}
              id="name"
              aria-describedby="name"
            />
            <label htmlFor="last-name" className="form-label">
              Apellidos
            </label>
            <input
              type="string"
              className="form-control form-input border-0 mb-3"
              onChange={(event) => {
                setLastName(event.target.value);
              }}
              value={lastName}
              id="last-name"
              aria-describedby="last-name"
            />
            <label htmlFor="phone" className="form-label">
              Teléfono
            </label>
            <input
              type="string"
              className="form-control form-input col-5 border-0 mb-3"
              onChange={(event) => {
                setPhone(event.target.value);
              }}
              value={phone}
              id="phone"
              aria-describedby="phone"
            />
            <label htmlFor="city" className="form-label">
              Ciudad
            </label>
            <input
              type="string"
              className="form-control form-input col-5 border-0 mb-3"
              onChange={(event) => {
                setCity(event.target.value);
              }}
              value={city}
              id="city"
              aria-describedby="city"
            />
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
            <div id="emailHelp" className="form-text mb-3">
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
          <div className="justify-content-center d-flex">
            <UploadImage name="Sube tu foto de perfil" />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button
              type="submit"
              className="btn form-btn text-center text-white btn-lg rounded-pill px-5"
              onClick={async (e) => {
                if (name.trim() == "") {
                  swal("¡Ups!", "Debes colocar tu nombre completo");
                } else if (lastName.trim() == "") {
                  swal("¡Ups!", "Debes colocar tus apellidos");
                } else if (city.trim() == "") {
                  swal("¡Ups!", "Debes colocar tu ciudad");
                } else if (phone.trim() == "") {
                  swal("¡Ups!", "Debes agregar tu número");
                } else if (email.trim() == "") {
                  swal("¡Ups!", "Debes colocar un Email");
                } else if (password.trim() == "") {
                  swal("¡Ups!", "Debes colocar tu contraseña");
                } else {
                  let success = await register(
                    name,
                    lastName,
                    city,
                    phone,
                    email,
                    password,
                    store.image
                  );
                  if (success == true) {
                    swal("¡Listo!", "Te has registrado con éxito", "success");
                    return navigate("/login");
                  }
                  swal(
                    "¡Parece haber un error con tus datos!",
                    "Por favor, intenta de nuevo",
                    "error"
                  );
                }
              }}
            >
              Registrarte
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
