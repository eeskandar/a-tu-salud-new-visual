import React from "react";
import python3 from "../../img/python.png";
import html5 from "../../img/html5.png";
import postgre from "../../img/postgre.png";
import fotoManuel from "../../img/fotoManuel.jpg";
import fotoLuis from "../../img/fotoLuis.png";
import fotoAlejo from "../../img/fotoAlejo.jpeg";
import css from "../../img/css.png";
import bootstrap from "../../img/bootstrap.png";
import javascript from "../../img/javascript.png";
import flaskImg from "../../img/flaskImg.png";
import reactRouter from "../../img/reactRouter.png";
import reactImg from "../../img/reactImg.png";
import sweetalert2Img from "../../img/sweetalert2Img.png";
import sqlalchemyimg from "../../img/sqlalchemyimg.png";

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
          Sobre las tecnologías Front-end
        </h2>
        <div className="d-flex justify-content-center">
          <img className="ms-2" src={html5} style={{ height: 209 }} />
          <img className="ms-2" src={bootstrap} style={{ height: 209 }} />
          <img className="ms-2" src={css} style={{ height: 209 }} />
          <img className="ms-2" src={javascript} style={{ height: 209 }} />
          <img className="ms-2" src={reactImg} style={{ height: 209 }} />
          <img className="ms-2" src={reactRouter} style={{ height: 209 }} />
        </div>
      </div>
      <div>
        <h2 className="ms-2 mt-5 ps-5 pb-5 text-secondary text-center">
          Sobre las tecnologías aplicadas Back-end
        </h2>
        <div className="d-flex justify-content-center">
          <img className="ms-2" src={python3} style={{ height: 209 }} />
          <img className="ms-2" src={postgre} style={{ height: 209 }} />
          <img className="ms-2" src={flaskImg} style={{ height: 209 }} />
          <div className="d-flex align-items-center">
            <img
              className="ms-2"
              src={sqlalchemyimg}
              style={{ width: 209, height: 50 }}
            />
          </div>
        </div>
      </div>
      <h2 className="ms-2 mt-5 ps-5 pb-5 text-secondary text-center">
        Sobre nuestro equipo
      </h2>
      <div className="row justify-content-center m-auto">
        <div className="col-8">
          <div className="ms-5 mt-4 d-flex">
            <div className="">
              <img className="card-pic" src={fotoManuel} />
            </div>
            <div className="text-secondary ms-3">
              <h3>Manuel Acosta</h3>
              <p>
                Cocinero - Siempre me había llamado la atención este mundo de la
                programación pero no había tenido la oportunidad de entrar,
                hasta que supe de la existencia de 4Geeks y la verdad que
                termino contento con esta experiencia y gran reto que tome.
              </p>
            </div>
          </div>
          <div className="ms-5 my-4 d-flex">
            <div className="">
              <img
                className="card-pic"
                src={fotoAlejo}
                style={{ width: 209, height: 209 }}
              />
            </div>
            <div className="text-secondary ms-3">
              <h3>Alejandro Escalante</h3>
              <p>
                <dd>
                  Customer Services - Empecé este curso con la meta de seguir
                  creciendo profesionalmente y entender aunque sea una pequeña
                  parte del gran mundo de la programación. Solo me queda
                  agradecer a mis profesores por la paciencia sabiendo que este
                  no es el fin del viaje, sino el inicio de toda una aventura.
                </dd>
              </p>
            </div>
          </div>
          <div className="ms-5 mb-4 d-flex">
            <div className="">
              <img
                className="card-pic"
                src={fotoLuis}
                style={{ width: 209, height: 209 }}
              />
            </div>
            <div className="text-secondary ms-3">
              <h3>Luis Rosal</h3>
              <p>
                Freelancer - Desde pequeño siempre estuve atraído a la
                tecnología, me encanta esta area ya que puedo alimentar mi
                curiosidad y mis ganas de aprender. En este curso he aprendido
                que se aprende mucho más de los errores que de las victorias, y
                a no darme por vencido a la primera.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
