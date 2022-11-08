import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/atusalud logo2.png";
import swal from "sweetalert";
import Banner from "../../img/banner-1.png";
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
  const [type, setType] = useState("");
  const [busquedaAvanzada, SetBusquedaAvanzada] = useState(false);
  const navigate = useNavigate();
  console.log(type);
  const urlParams = new URLSearchParams(window.location.search);

  function busquedaFiltro() {
    console.log(busquedaAvanzada);
    if (busquedaAvanzada === false) SetBusquedaAvanzada(true);
    else SetBusquedaAvanzada(false);
  }

  async function consultPosts() {
    if (name.trim() != "") {
      urlParams.set("name", name);
      if (city.trim() != "") {
        urlParams.set("city", city);
      }
      if (type.trim() != "") {
        urlParams.set("type", type);
      }
      if (quantity.trim() != "") {
        urlParams.set("quantity", quantity);
      }
      if (expirationDate.trim() != "") {
        urlParams.set("expiration_date", expirationDate);
      }
      if (presentation.trim() != "") {
        urlParams.set("presentation", presentation);
      }
      console.log(urlParams.toString());
      let success = await actions.getPosts(urlParams);
      if (success == false) {
        swal("¡Ups!", "404");
      }
    } else swal("¡Ups!", "Ingresa un medicamento para hacer la busqueda.");
  }
  function handleSubmit() {}

  async function consultExchangePosts() {
    if (type == "Presentation") {
      if (name.trim() != "") {
        urlParams.set("name", name);
        if (city.trim() != "") {
          urlParams.set("city", city);
        }
        if (quantity.trim() != "") {
          urlParams.set("quantity", quantity);
        }
        if (expirationDate.trim() != "") {
          urlParams.set("expiration_date", expirationDate);
        }
        if (presentation.trim() != "") {
          urlParams.set("presentation", presentation);
        }
        console.log(urlParams.toString());
        await actions.getPosts(urlParams);
      }
    }
  }

  return (
    <div className="container-fluid mt-3 pb-5 col-11 col-lg-10 px-0">
      <div className="container d-flex justify-content-center pt-3">
        <img src={Banner} style={{ height: "350px" }} />
      </div>
      <div className="pt-5 container">
        <h1 className="text-secondary text-center" style={{ fontSize: "2rem" }}>
          Dona algún medicamento que no vayas a usar. <br /> Solicita un
          medicamento que necesites.
          <br /> Intercambia.
        </h1>
      </div>
      <div className="d-flex justify-content-evenly pt-4">
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
            className="form-select text-secondary"
            aria-label="Default select example"
            value={type}
            onChange={(e) => {
              setType(event.target.value);
            }}
          >
            <option value="Donation">Donación</option>
            <option value="Request">Solicitud</option>
            <option value="Exchange">Intercambio</option>
          </select>
        </div>
        <button
          className="btn form-btn text-center text-white btn-lg rounded-pill mb-5 mt-4 px-5"
          onClick={(e) => {
            consultPosts();
          }}
          to="/"
        >
          Buscar
        </button>
      </div>
      <div className="margin-home">
        <div className="btn-group pt-0 pb-3 ms-5">
          <button
            type="button"
            className="btn btn-secondary rounded-pill"
            data-bs-toggle=""
            aria-expanded=""
            onClick={(e) => busquedaFiltro()}
          >
            Busqueda avanzada...
          </button>
        </div>
        {busquedaAvanzada ? (
          <div className="d-flex py-5 justify-content-evenly bg-light rounded-form me-4">
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
