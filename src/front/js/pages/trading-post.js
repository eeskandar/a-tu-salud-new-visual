import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SideProfile } from "../component/SideProfile";
import { Context } from "./../store/appContext";

export const TradingPost = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [nameA, setNameA] = useState("");
  const [nameB, setNameB] = useState("");
  const [quantityA, setQuantityA] = useState("");
  const [quantityB, setQuantityB] = useState("");
  const [dosisA, setDosisA] = useState("");
  const [dosisB, setDosisB] = useState("");
  const [expDateA, setExpDateA] = useState("");
  const [expDateB, setExpDateB] = useState("");
  const [activeCompA, setActiveCompA] = useState("");
  const [activeCompB, setActiveCompB] = useState("");
  const [presentA, setPresentA] = useState("");
  const [presentB, setPresentB] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="d-flex col-11 p-0 overflow-hidden row">
      <div className="col-3 side-profile p-0">
        <SideProfile />
      </div>
      <div className="col-9">
        <div className="mt-5">
          <h1 className="ms-2 ps-5 pb-5 form-title">
            Intercambio de medicamentos
          </h1>
          <form className="m-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="d-lg-flex justify-content-center">
              <div className="col-lg-5 mx-4">
                <h3 className="text-center mb-4 text-secondary">
                  Medicamento a donar
                </h3>
                <div className="mb-3">
                  <label htmlFor="nameAinput" className="form-label">
                    Nombre del medicamento
                  </label>
                  <input
                    type="string"
                    className="form-control form-input border-0"
                    onChange={(event) => {
                      setNameA(event.target.value);
                    }}
                    value={nameA}
                    id="nameAinput"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="compAinput" className="form-label">
                    Componente activo
                  </label>
                  <input
                    type="string"
                    className="form-control form-input border-0"
                    onChange={(event) => {
                      setActiveCompA(event.target.value);
                    }}
                    value={activeCompA}
                    id="compAinput"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="presentAinput" className="form-label">
                    Presentación
                  </label>
                  <input
                    type="string"
                    className="form-control form-input border-0"
                    onChange={(event) => {
                      setPresentA(event.target.value);
                    }}
                    value={presentA}
                    id="presentAinput"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="quantityAinput" className="form-label">
                    Cantidad
                  </label>
                  <input
                    type="string"
                    className="form-control form-input border-0"
                    onChange={(event) => {
                      setQuantityA(event.target.value);
                    }}
                    value={quantityA}
                    id="quantityAinput"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="dosisAinput" className="form-label">
                    Dosis
                  </label>
                  <input
                    type="string"
                    className="form-control form-input border-0"
                    onChange={(event) => {
                      setDosisA(event.target.value);
                    }}
                    value={dosisA}
                    id="dosisAinput"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="expAinput" className="form-label">
                    Fecha de vencimiento
                  </label>
                  <input
                    type="string"
                    className="form-control form-input border-0"
                    onChange={(event) => {
                      setExpDateA(event.target.value);
                    }}
                    value={expDateA}
                    id="expAinput"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center py-4">
                <i className="fa-solid fa-arrow-right-arrow-left fs-3 pe-2 m-auto"></i>
              </div>
              <div className="col-lg-5 mx-4">
                <h3 className="text-center mb-4 text-secondary">
                  Medicamento a solicitar
                </h3>
                <div className="mb-3">
                  <label htmlFor="nameBinput" className="form-label">
                    Nombre del medicamento
                  </label>
                  <input
                    type="string"
                    className="form-control form-input border-0"
                    onChange={(event) => {
                      setNameB(event.target.value);
                    }}
                    value={nameB}
                    id="nameBinput"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="compBinput" className="form-label">
                    Componente activo
                  </label>
                  <input
                    type="string"
                    className="form-control form-input border-0"
                    onChange={(event) => {
                      setActiveCompB(event.target.value);
                    }}
                    value={activeCompB}
                    id="compBinput"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="presentBinput" className="form-label">
                    Presentación
                  </label>
                  <input
                    type="string"
                    className="form-control form-input border-0"
                    onChange={(event) => {
                      setPresentB(event.target.value);
                    }}
                    value={presentB}
                    id="presentBinput"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="quantityBinput" className="form-label">
                    Cantidad
                  </label>
                  <input
                    type="string"
                    className="form-control form-input border-0"
                    onChange={(event) => {
                      setQuantityB(event.target.value);
                    }}
                    value={quantityB}
                    id="quantityBinput"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="dosisBinput" className="form-label">
                    Dosis
                  </label>
                  <input
                    type="string"
                    className="form-control form-input border-0"
                    onChange={(event) => {
                      setDosisB(event.target.value);
                    }}
                    value={dosisB}
                    id="dosisBinput"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="expBinput" className="form-label">
                    Fecha de vencimiento
                  </label>
                  <input
                    type="string"
                    className="form-control form-input border-0"
                    onChange={(event) => {
                      setExpDateB(event.target.value);
                    }}
                    value={expDateB}
                    id="expBinput"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-6 m-auto mt-5 d-flex justify-contenct-center flex-column">
          <div className="ms-4 mb-3">
            <label htmlFor="description" className="form-label">
              Descripción
            </label>
            <input
              type="string"
              className="form-control form-input border-0"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
              value={description}
              id="description"
            />
          </div>
          <button
            type="submit"
            className="btn form-btn text-center btn-lg rounded-pill ms-4 mb-5"
          >
            Crear solicitud de intercambio
          </button>
        </div>
      </div>
    </div>
  );
};
