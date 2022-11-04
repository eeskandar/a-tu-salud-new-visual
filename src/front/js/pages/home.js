import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/atusalud logo2.png";
import "../../styles/home.css";

export const Home = () => {
  const [city, setCity] = useState("");
  const [presentation, setPresentation] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [busquedaAvanzada, SetBusquedaAvanzada] = useState(false);

  const urlParams = new URLSearchParams();

  function busquedaFiltro() {
    console.log(busquedaAvanzada);
    if (busquedaAvanzada === false) SetBusquedaAvanzada(true);
    else SetBusquedaAvanzada(false);
  }

  const getPosts = async () => {
    try {
      params.append();
      const res = await fetch(
        process.env.BACKEND_URL + "/api/posts" + new URLSearchParams(),
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        new Error("Ocurrió un error en la solicitud");
      }
      const body = await res.json();
      console.log(body);
    } catch (error) {}
  };

  return (
    <div className="container mt-5 pb-5 col-11 col-lg-10 px-0">
      <div
        className="container d-flex justify-content-center pt-3"
        style={{ height: "150px" }}
      >
        <img src={logo} style={{ height: "150px" }} />
      </div>
      <div className="pt-5 container">
        <h1 className="text-secondary text-center" style={{ fontSize: "2rem" }}>
          Dona algún medicamento que no vayas a usar. <br /> Solicita un
          medicamento que necesites.
          <br /> Intercambia.
        </h1>
      </div>
      <div className="d-flex justify-content-evenly pt-5">
        <div className="">
          <label htmlFor="" className="form-label text-secondary">
            Medicamento
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="form-control me-2"
            type="search"
            placeholder=""
            aria-label="Search"
          />
        </div>
        <div>
          <label htmlFor="" className="form-label text-secondary">
            Ciudad
          </label>
          <input
            onChange={(e) => setCity(e.target.value)}
            className="form-control me-2"
            type="search"
            placeholder=""
            aria-label="Search"
          />
        </div>
        <div>
          <label htmlFor="" className="form-label text-secondary">
            {" "}
            Tipo de Busqueda
          </label>
          <select
            class="form-select text-secondary"
            aria-label="Default select example"
          >
            <option defaultValue="1">Donación</option>
            <option defaultValue="2">Solicitud</option>
            <option defaultValue="3">Intercambio</option>
          </select>
        </div>
        <Link to="/results" className="btn btn-secondary">
          Buscar
        </Link>
      </div>
      <div>
        <div className="btn-group py-5">
          <button
            type="button"
            className="btn btn-secondary "
            data-bs-toggle=""
            aria-expanded=""
            onClick={(e) => busquedaFiltro()}
          >
            Busqueda avanzada...
          </button>
        </div>
        {busquedaAvanzada ? (
          <div className="d-flex py-5 w-100 justify-content-evenly bg-light">
            <div className="">
              <label htmlFor="" className="form-label text-secondary">
                Presentación
              </label>
              <input
                onChange={(e) => setPresentation(e.target.value)}
                className="form-control m-2"
                type="search"
                placeholder=""
                aria-label="Search"
              />
            </div>
            <div>
              <label htmlFor="" className="form-label text-secondary">
                Cantidad
              </label>
              <input
                onChange={(e) => setQuantity(e.target.value)}
                className="form-control m-2"
                type="search"
                placeholder=""
                aria-label="Search"
              />
            </div>
            <div>
              <label htmlFor="" className="form-label text-secondary">
                Fecha de vencimiento
              </label>
              <input
                defaultValue={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                className="form-control m-2"
                type="search"
                placeholder=""
                aria-label="Search"
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
