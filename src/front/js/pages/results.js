import React, { useContext } from "react";
import { Posts } from "../component/posts";
import { Context } from "../store/appContext";
import { Loading } from "../component/Loading";

// - [ ] Hacer el view de resultados
// - [ ] Hacer el view de más información
// - [ ] Poder acceder a cada una de las rutas
// - [ ] Mostrar 10 o más posts en el view de resultados por página
// - [ ] Mostrar información detallada del post en el view de más información
// - [ ] Hacer fetch al api para traer los resultados
// - [ ] Mostrar los filtros y orden en lo que los posts pueden mostrarse en el view de resultados
// - [ ] Crear el enlace entre el view de resultados y el view de más información
// - [ ] Mostrar información puntual del medicamento en el view de resultados
// - [ ] Que el side navbar muestre solamente los íconos en el view de resultados para dar espacio al filtro

export const Results = () => {
  const { store, actions } = useContext(Context);

  console.log(store.posts);
  return (
    <div className="col-11 col-lg-11">
      {/* side bar with filters */}
      <div className="row">
        <div className="overflow-y-axis row-80 col-4 col-lg-2 side-profile d-flex flex-column justify-content-between">
          <div>
            <span>
              Nombre
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value>Open this select menu</option>
                <option defaultValue="1">One</option>
                <option defaultValue="2">Two</option>
                <option defaultValue="3">Three</option>
              </select>
            </span>
            <span>
              Tipo
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value>Open this select menu</option>
                <option defaultValue="1">One</option>
                <option defaultValue="2">Two</option>
                <option defaultValue="3">Three</option>
              </select>
            </span>
            <span>
              Presentación
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value>Open this select menu</option>
                <option defaultValue="1">One</option>
                <option defaultValue="2">Two</option>
                <option defaultValue="3">Three</option>
              </select>
            </span>
            <span>
              Componente Activo
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value>Open this select menu</option>
                <option defaultValue="1">One</option>
                <option defaultValue="2">Two</option>
                <option defaultValue="3">Three</option>
              </select>
            </span>
            <span>
              Dosis
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value>Open this select menu</option>
                <option defaultValue="1">One</option>
                <option defaultValue="2">Two</option>
                <option defaultValue="3">Three</option>
              </select>
            </span>
            <span>
              Cantidad
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value>Open this select menu</option>
                <option defaultValue="1">One</option>
                <option defaultValue="2">Two</option>
                <option defaultValue="3">Three</option>
              </select>
            </span>
            <span>
              Fecha de Vencimiento
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value>Open this select menu</option>
                <option defaultValue="1">One</option>
                <option defaultValue="2">Two</option>
                <option defaultValue="3">Three</option>
              </select>
            </span>
          </div>
          <div className="py-4"></div>
        </div>
        {/* results */}
        <div className="overflow-y-axis row-80 col-8 col-lg-10 px-0">
          <div>
            {store.posts ? (
              store.posts.map((posts) => {
                console.log(posts.user_info);
                console.log(posts.user_info.city);
                return (
                  <Posts
                    title={posts.title}
                    image={posts.medicine_picture}
                    active_component={posts.active_component}
                    id={posts.id}
                    city={posts.user_info.city}
                    expiration_date={posts.expiration_date}
                    key={posts.id}
                  />
                );
              })
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
