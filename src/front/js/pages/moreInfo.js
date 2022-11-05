import React from "react";
import { Posts } from "../component/posts";
import { Link } from "react-router-dom";

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

export const MoreInfo = () => {
  return (
    <div className="col-11 col-lg-10">
      {/* side bar with filters */}
      <div className=" d-flex flex-row justify-content-around py-3">
        <div className="">
          <div class="card" style={{ width: "20rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div class="card" style={{ width: "20rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/" className="btn btn-primary">
                let's go to the beach
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="">
          <div class="card">
            <div class="card-header">Featured</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
