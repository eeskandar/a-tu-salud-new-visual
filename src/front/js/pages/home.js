import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/atusalud logo2.png";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const post = store.activeUser;

  const [city, setCity] = useState("");
  const [presentation, setPresentation] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [typeOf, setTypeOf] = useState("");
  const [busquedaAvanzada, SetBusquedaAvanzada] = useState(false);
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams.get("hola"));

  function busquedaFiltro() {
    console.log(busquedaAvanzada);
    if (busquedaAvanzada === false) SetBusquedaAvanzada(true);
    else SetBusquedaAvanzada(false);
  }

  async function consultPosts() {
    if (city.trim() != "") {
      urlParams.set("city", city);
    }
    if (name.trim() != "") {
      urlParams.set("name", name);
    }
    console.log(urlParams.toString());
    await actions.getPosts(urlParams);
  }

  async function consultExchangePosts() {
    if (city.trim() != "") {
      urlParams.set("city", city);
    }
    if (name.trim() != "") {
      urlParams.set("name", name);
    }
    console.log(urlParams.toString());
    await actions.getPosts(urlParams);
  }

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
            defaultValue={name}
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
            defaultValue={city}
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
            defaultValue={setTypeOf}
            onChange={(e) => {}}
          >
            <option defaultValue="Donation">Donación</option>
            <option defaultValue="Request">Solicitud</option>
            <option defaultValue="Exchange">Intercambio</option>
          </select>
        </div>
        <Link
          className="btn btn-secondary "
          onClick={(e) => {
            consultPosts();
          }}
          to="/results"
        >
          Search
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
                defaultValue={presentation}
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
                defaultValue={quantity}
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
