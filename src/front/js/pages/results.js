import React from "react";

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
  return (
    <div className="col-10">
      {/* side bar with filters */}
      <div className="row">
        <div className="col-2 h-86">
          <span>
            Nombre
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option defaultValue="1">One</option>
              <option defaultValue="2">Two</option>
              <option defaultValue="3">Three</option>
            </select>
          </span>
          <span>
            Tipo
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option defaultValue="1">One</option>
              <option defaultValue="2">Two</option>
              <option defaultValue="3">Three</option>
            </select>
          </span>
          <span>
            Presentación
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option defaultValue="1">One</option>
              <option defaultValue="2">Two</option>
              <option defaultValue="3">Three</option>
            </select>
          </span>
          <span>
            Componente Activo
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option defaultValue="1">One</option>
              <option defaultValue="2">Two</option>
              <option defaultValue="3">Three</option>
            </select>
          </span>
          <span>
            Dosis
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option defaultValue="1">One</option>
              <option defaultValue="2">Two</option>
              <option defaultValue="3">Three</option>
            </select>
          </span>
          <span>
            Cantidad
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option defaultValue="1">One</option>
              <option defaultValue="2">Two</option>
              <option defaultValue="3">Three</option>
            </select>
          </span>
          <span>
            Fecha de Vencimiento
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option defaultValue="1">One</option>
              <option defaultValue="2">Two</option>
              <option defaultValue="3">Three</option>
            </select>
          </span>
        </div>
        {/* results */}
        <div className="col-7">
          <div className="card">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
