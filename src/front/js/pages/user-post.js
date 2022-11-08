import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./../store/appContext";
import { SideProfile } from "../component/SideProfile";
import { UploadImage } from "../component/UploadImage";

export const UserPost = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [dosis, setDosis] = useState("");
  const [description, setDescription] = useState("");
  const [presentation, setPresentation] = useState("");
  const [active_component, setActive_component] = useState("");
  const [expiration_date, setExpiration_date] = useState("");
  const [quantity, setQuantity] = useState("");
  const post = actions.post;
  return (
    <div className="d-flex justify-content-between p-0 col-11 bg-color">
      <div className="col-3 side-profile p-0">
        <SideProfile />
      </div>
      <div className="col-9">
        <h3 className="text-center text-secondary my-5 mt-5">Nueva Donación</h3>
        <div className="d-flex px-5">
          <div className="w-50">
            <div className="p-2 mx-5 my-2 text-center">
              <label htmlFor="" className="form-label text-secondary fw-bold">
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

            <div className="p-2 mx-5 my-2 text-center">
              <label htmlFor="" className="form-label text-secondary fw-bold">
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
            <div className="p-2 mx-5 my-2 text-center">
              <label htmlFor="" className="form-label text-secondary fw-bold">
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
            <div className="p-2 mx-5 my-2 text-center">
              <label htmlFor="" className="form-label text-secondary fw-bold">
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
            <div className="p-2 mx-5 my-2 text-center">
              <label htmlFor="" className="form-label text-secondary fw-bold">
                Fecha de vencimiento
              </label>
              <input
                className="form-control form-input "
                type="text"
                aria-label="readonly input example"
                onChange={(event) => {
                  setExpiration_date(event.target.value);
                }}
              />
            </div>
            <div className="p-2 mx-5 my-2 text-center">
              <label htmlFor="" className="form-label text-secondary fw-bold">
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
          <div className="p-2 mx-5 my-2 text-center">
            <label htmlFor="" className="form-label text-secondary fw-bold">
              Descripción de la donación
            </label>
            <input
              className="form-control form-input "
              type="text"
              aria-label="readonly input example"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
          <UploadImage name="Sube la foto del medicamento" />
        </div>
        <div className="d-flex justify-content-center my-5">
          <button
            type="button"
            className="btn bg-info bg-opacity-75 btn-lg text-white fw-bold"
            onClick={async (e) => {
              if (
                name.trim() == "" ||
                dosis.trim() == "" ||
                description.trim() == "" ||
                presentation.trim() == "" ||
                active_component.trim() == "" ||
                expiration_date.trim() == "" ||
                quantity.trim() == ""
              ) {
                alert(
                  "Debes llenar todos los campos para poder publicar tu solicitud"
                );
              } else {
                console.log(store.image);
                let success = await post(
                  presentation,
                  dosis,
                  store.image,
                  active_component,
                  quantity,
                  name,
                  description,
                  expiration_date
                );
                if (success) {
                  swal("¡Listo!", "¡Donación creada con éxito!", "success");
                  console.log(store.image);
                  return navigate("/user/donation");
                }
                swal(
                  "¡Parece haber un error con tus datos!",
                  "Por favor, intenta de nuevo",
                  "error"
                );
              }
            }}
          >
            Crear donación
          </button>
        </div>
      </div>
    </div>
  );
};
