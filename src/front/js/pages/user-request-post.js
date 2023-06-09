import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./../store/appContext";
import { SideProfile } from "../component/SideProfile";
import { UploadImage } from "../component/UploadImage";

export const UserPostRequest = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [dosis, setDosis] = useState("");
  const [description, setDescription] = useState("");
  const [presentation, setPresentation] = useState("");
  const [active_component, setActive_component] = useState("");
  const [expiration_date, setExpiration_date] = useState("");
  const [quantity, setQuantity] = useState("");
  const request = actions.request;
  return (
    <div className="d-flex justify-content-between p-0 col-11 bg-color">
      <div className="col-3 side-profile p-0">
        <SideProfile />
      </div>
      <div className="col-9 row-80 overflow-y-axis">
        <h1 className="pb-5 form-title mt-5 text-center">Nueva solicitud</h1>
        <div className="d-flex px-5">
          <div className="w-50">
            <div className="pb-2 mx-5 my-2 text-center">
              <label htmlFor="" className="form-label text-secondary">
                Medicamento
              </label>
              <input
                className="form-control form-input "
                type="text"
                aria-label="readonly input example"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>

            <div className="pb-2 mx-5 my-2 text-center">
              <label htmlFor="" className="form-label text-secondary">
                Dosis
              </label>
              <input
                className="form-control form-input "
                type="text"
                aria-label="readonly input example"
                onChange={(event) => {
                  setDosis(event.target.value);
                }}
              />
            </div>
            <div className="pb-2 mx-5 my-2 text-center">
              <label htmlFor="" className="form-label text-secondary">
                Componente activo
              </label>
              <input
                className="form-control form-input "
                type="text"
                aria-label="readonly input example"
                onChange={(event) => {
                  setActive_component(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="w-50">
            <div className="pb-2 mx-5 my-2 text-center">
              <label htmlFor="" className="form-label text-secondary">
                Presentación
              </label>
              <input
                className="form-control form-input "
                type="text"
                aria-label="readonly input example"
                onChange={(event) => {
                  setPresentation(event.target.value);
                }}
              />
            </div>
            <div className="pb-2 mx-5 my-2 text-center">
              <label htmlFor="" className="form-label text-secondary">
                Fecha de vencimiento
              </label>
              <input
                className="form-control form-input "
                type="text"
                placeholder="dd/mm/aaaa"
                aria-label="readonly input example"
                onChange={(event) => {
                  setExpiration_date(event.target.value);
                }}
              />
            </div>
            <div className="pb-2 mx-5 my-2 text-center">
              <label htmlFor="" className="form-label text-secondary">
                Cantidad
              </label>
              <input
                className="form-control form-input "
                type="text"
                aria-label="readonly input example"
                onChange={(event) => {
                  setQuantity(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="my-3 container text-center">
          <div className="p-4 mx-5 my-2 text-center">
            <label htmlFor="" className="form-label text-secondary">
              Descripción de la donación
            </label>
            <textarea
              className="form-control form-input "
              type="text"
              aria-label="readonly input example"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            ></textarea>
          </div>
          <UploadImage name="Sube la foto del recipe (Opcional)" />
        </div>
        <div className="d-flex justify-content-center my-5">
          <button
            type="button"
            className="btn form-btn text-center text-white btn-lg rounded-pill mb-5"
            onClick={async (e) => {
              if (
                name.trim() == "" ||
                description.trim() == "" ||
                presentation.trim() == "" ||
                active_component.trim() == "" ||
                expiration_date.trim() == "" ||
                quantity.trim() == ""
              ) {
                swal(
                  "Debes llenar todos los campos para poder publicar tu solicitud."
                );
              } else {
                console.log(store.image);
                let success = await request(
                  presentation.toLowerCase(),
                  dosis.toLowerCase(),
                  store.image,
                  active_component.toLowerCase(),
                  quantity.toLowerCase(),
                  name.toLowerCase(),
                  description,
                  expiration_date.toLowerCase()
                );
                if (success) {
                  swal("¡Listo!", "¡Solicitud creada con éxito!", "success");
                  console.log(store.image);
                  return navigate(`/user/${store.activeUser[0].id}/request`);
                }
                swal(
                  "¡Parece haber un error con tus datos!",
                  "Por favor, intenta de nuevo",
                  "error"
                );
              }
            }}
          >
            Crear Solicitud
          </button>
        </div>
      </div>
    </div>
  );
};
