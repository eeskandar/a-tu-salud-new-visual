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
  const [type, setType] = useState("donation");
  const [busquedaAvanzada, SetBusquedaAvanzada] = useState(false);
  const navigate = useNavigate();
  console.log(name);
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
        urlParams.set("typeof", type);
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
        swal("¡Ups!", "No encontramos coincidencias para tu busqueda");
        navigate("/");
      }
    } else swal("¡Ups!", "Ingresa un medicamento para hacer la busqueda.");
  }
  function handleSubmit() {
    if (type == "request" || type == "donation") {
      consultPosts();
    } else {
      console.log("consulting exchange table");
      consultExchangePosts();
    }
  }

  async function consultExchangePosts() {
    console.log("trying to consult");
    if (type == "exchange") {
      if (name.trim() != "") {
        urlParams.set("name", name);
        if (city.trim() != "") {
          urlParams.set("city", city);
        }
        if (type.trim() != "") {
          urlParams.set("typeof", type);
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
        await actions.getPostsTrade(urlParams);
      }
    }
  }

  return (
    <div className="row-80 overflow-y-axis container-fluid col-11 col-lg-10 px-0 ">
      <div className="container d-flex justify-content-center pt-3">
        <img src={Banner} style={{ height: "350px" }} />
      </div>
      <div className="pt-5 container">
        <h1 className="text-secondary text-center" style={{ fontSize: "2rem" }}>
          Dona algún medicamento que no uses. <br /> Solicita o intercambia tus
          medicamentos.
        </h1>
      </div>
      <div className="d-flex justify-content-evenly pt-4">
        <div className="d-flex flex-column text-center justify-items-center">
          <label htmlFor="" className="form-label text-secondary">
            Medicamento
          </label>
          <input
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                consultPosts();
                navigate("/results");
              }
            }}
            defaultValue={name}
            onChange={(e) => setName(e.target.value.toLocaleLowerCase())}
            className="form-control me-2"
            type="search"
            placeholder=""
            aria-label="Search"
          />
        </div>
        <div className="d-flex flex-column text-center justify-items-center">
          <label htmlFor="" className="form-label text-secondary">
            Ciudad
          </label>
          <input
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                consultPosts();
                navigate("/results");
              }
            }}
            defaultValue={city}
            onChange={(e) => setCity(e.target.value.toLocaleLowerCase())}
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
              setType(e.target.value);
            }}
          >
            <option value="donation">Donación</option>
            <option value="request">Solicitud</option>
            <option value="exchange">Intercambio</option>
          </select>
        </div>
        <Link
          className="btn form-btn text-center text-white btn-lg rounded-pill mb-5 mt-4 px-5"
          onClick={(e) => {
            handleSubmit();
          }}
          to="/results"
        >
          Buscar
        </Link>
      </div>
      <div className="btn-group pt-0 pb-3 margin-home">
        <button
          type="button"
          className="btn btn-secondary rounded-pill"
          data-bs-toggle=""
          aria-expanded=""
          onClick={(e) => busquedaFiltro()}
        >
          <i className="fa-solid fa-magnifying-glass"></i> Busqueda avanzada...
        </button>
      </div>
      <div
        className={`home-advanced-search margin-home ${
          busquedaAvanzada === true ? "cool-class" : ""
        }`}
      >
        <div className=" overflow-y-axis d-flex py-5 justify-content-evenly dark-bg rounded-form my-4">
          <div className="d-flex flex-column text-center justify-items-center">
            <label htmlFor="" className="m-2 mt-0 form-label text-secondary">
              Presentación
            </label>
            <input
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  consultPosts();
                  navigate("/results");
                }
              }}
              defaultValue={presentation}
              onChange={(e) =>
                setPresentation(e.target.value.toLocaleLowerCase())
              }
              className="form-control m-2"
              type="search"
              placeholder=""
              aria-label="Search"
            />
          </div>
          <div className="d-flex flex-column text-center justify-items-center">
            <label htmlFor="" className="m-2 mt-0 form-label text-secondary">
              Cantidad
            </label>
            <input
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  consultPosts();
                  navigate("/results");
                }
              }}
              defaultValue={quantity}
              onChange={(e) => setQuantity(e.target.value.toLocaleLowerCase())}
              className="form-control m-2"
              type="search"
              placeholder=""
              aria-label="Search"
            />
          </div>
          <div className="d-flex flex-column text-center justify-items-center">
            <label htmlFor="" className="m-2 form-label text-secondary">
              Fecha de vencimiento
            </label>
            <input
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  consultPosts();
                  navigate("/results");
                }
              }}
              defaultValue={expirationDate}
              onChange={(e) =>
                setExpirationDate(e.target.value.toLocaleLowerCase())
              }
              className="form-control m-2"
              type="search"
              placeholder="dd/mm/aa"
              aria-label="Search"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
