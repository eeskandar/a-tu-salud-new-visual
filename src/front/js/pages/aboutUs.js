import React from "react";
import python3 from "../../img/python.png";
import html5 from "../../img/html5.png";
import postgre from "../../img/postgre.png";
import fotoManuel from "../../img/fotoManuel.jpg";

export const AboutUs = () => {
  return (
    <div className="row-80 overflow-y-axis container-fluid col-11 col-lg-10 px-0">
      <h1 className="ms-2 mt-5 ps-5 pb-5 text-secondary text-center">
        Sobre nosotros
      </h1>
      <p className="m-auto col-8 text-justify text-secondary">
        <dd className="mb-4 primeralinea">
          A Tu Salud es un proyecto que nace del deseo latente en cada uno de
          nosotros que nos llama a contriubuir con nuestro pueblo Venezolano,
          queriendo mejorarlo haciendo uso de la tecnología y los conocimientos
          adquiridos a través de
          <strong> 4Geeks Academy</strong> para así poder aportar nuestro
          granito de arena.
        </dd>
        <dd className="mb-4 primeralinea">
          Nuestra misión es facilitar por medio de nuestra web app (aplicación
          web) la donación, solicitud e intercambio de medicamentos, brindandole
          a nuestros usuarios seguridad, anonimato, y un medio de comunicación
          donde se ayudan los unos a los otros.
        </dd>
        <dd className="mb-4 primeralinea">
          Nuestra visión es crear una comunidad activa de donantes y donatarios,
          o simplemente un espacio seguro donde la ayuda vaya a los más
          necesitados sin fines de lucro.
        </dd>
      </p>
      <div>
        <h2 className="ms-2 mt-5 ps-5 pb-5 text-secondary text-center">
          Sobre las tecnologías aplicadas
        </h2>
        <img src={html5} />
        <img src={python3} />
        <img src={postgre} />
      </div>
      <h2 className="ms-2 mt-5 ps-5 pb-5 text-secondary text-center">
        Sobre nuestro equipo
      </h2>
      <div className="row justify-content-center m-auto">
        <div className="col-8">
          <div className="ms-5 mt-4 d-flex">
            <div className="img-container">
              <img className="card-pic" src={fotoManuel} />
            </div>
            <div className="text-secondary ms-3">
              <h3>Manuel Acosta</h3>
              <p>
                Cocinero - Siempre me había llamado la atención este mundo de la programación pero no había tenido la oportunidad de entrar, hasta que supe de la existencia de 4Geeks y la verdad que termino contento con esta experiencia y gran reto que tome.
              </p>
            </div>
          </div>
          <div className="ms-5 mt-4 d-flex">
            <div className="img-container">
              <img className="card-pic" src={postgre} />
            </div>
            <div className="text-secondary ms-3">
              <h3>Alejandro Escalante</h3>
              <p>
                Tipazo, apasionado por aprender cómo funcionan las cosas y
                siempre alegre.
              </p>
            </div>
          </div>
          <div className="ms-5 mt-4 d-flex">
            <div className="img-container">
              <img className="card-pic" src={postgre} />
            </div>
            <div className="text-secondary ms-3">
              <h3>Luis Rosal</h3>
              <p>Más disperso que los chinos en el mundo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
