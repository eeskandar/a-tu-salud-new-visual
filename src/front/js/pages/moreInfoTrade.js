import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../component/Loading";
import medPlaceholder from "../../img/med-03.png";

export const MoreInfoTrade = () => {
  const { id } = useParams();
  console.log(id);
  const [post, setPost] = useState();
  useEffect(() => {
    const fetchPosts = async () => {
      let response = await fetch(process.env.BACKEND_URL + `/api/trade/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        new Error("Ocurrió un error en la solicitud");
      }
      const jsonPost = await response.json();
      setPost(jsonPost);
      return true;
    };
    fetchPosts();
  }, []);
  console.log(post);

  return (
    <div className="col-11 col-lg-10 p-0 row-80 overflow-y-axis">
      {post ? (
        <div>
          {/* CARDS DE USER Y POST */}
          <div className=" d-flex justify-content-around py-3">
            {/* POST */}
            <div>
              <h3 className="text-secondary text-center">Posee</h3>
              <div className="">
                <div className="m-auto pt-4 d-flex img-container">
                  {post.list.medicine_picture != null ? (
                    <img
                      className="p-2 card-pic"
                      src={post.list.medicine_picture}
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null; //evitar looping
                        currentTarget.src = { medPlaceholder };
                      }}
                    />
                  ) : (
                    <img className="p-2 card-pic" src={medPlaceholder} />
                  )}
                </div>
                <div className="px-5 py-3 d-flex shadow bg-body rounded-form">
                  <div className="mt-2 me-4">
                    <h6 className="text-secondary mb-0">
                      <i className="fa-solid fa-pills"></i> Medicamento
                    </h6>
                    <p className="text-secondary m_title">{post.list.name}</p>
                    <h6 className="text-secondary mb-0">Componente activo</h6>
                    <p className="text-secondary m_title">
                      {post.list.active_component}
                    </p>
                    <h6 className="text-secondary mb-0">Presentación</h6>
                    <p className="text-secondary mb-0 m_title">
                      {post.list.presentation}
                    </p>
                  </div>
                  <div className="mt-2 ms-4">
                    <h6 className="text-secondary mb-0">
                      <i className="fa-solid fa-calendar-xmark"></i> Fecha de
                      vencimiento
                    </h6>
                    <p className="text-secondary">
                      {post.list.expiration_date}
                    </p>
                    <h6 className="text-secondary mb-0">Dosis</h6>
                    <p className="text-secondary m_title m_title">
                      {post.list.dosis}
                    </p>
                    <h6 className="text-secondary mb-0">Cantidad</h6>
                    <p className="text-secondary mb-0 m_title">
                      {post.list.quantity}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-arrow-right-arrow-left fs-3 pe-2"></i>
            </div>
            <div>
              <h3 className="text-secondary text-center">Solicito</h3>
              <div className="">
                <div className="m-auto pt-4 d-flex img-container">
                  {post.list.req_medicine_picture != null ? (
                    <img
                      className="p-2 card-pic"
                      src={post.list.req_medicine_picture}
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null; //evitar looping
                        currentTarget.src = { medPlaceholder };
                      }}
                    />
                  ) : (
                    <img className="p-2 card-pic" src={medPlaceholder} />
                  )}
                </div>
                <div className="px-5 py-3 d-flex shadow bg-body rounded-form">
                  <div className="mt-2 me-4">
                    <h6 className="text-secondary mb-0">
                      <i className="fa-solid fa-pills"></i> Medicamento
                    </h6>
                    <p className="text-secondary m_title">
                      {post.list.req_name}
                    </p>
                    <h6 className="text-secondary mb-0">Componente activo</h6>
                    <p className="text-secondary m_title">
                      {post.list.req_active_component}
                    </p>
                    <h6 className="text-secondary mb-0">Presentación</h6>
                    <p className="text-secondary mb-0 m_title">
                      {post.list.req_presentation}
                    </p>
                  </div>
                  <div className="mt-2 ms-4">
                    <h6 className="text-secondary mb-0">
                      <i className="fa-solid fa-calendar-xmark"></i> Fecha de
                      vencimiento
                    </h6>
                    <p className="text-secondary">
                      {post.list.req_expiration_date}
                    </p>
                    <h6 className="text-secondary mb-0">Dosis</h6>
                    <p className="text-secondary m_title m_title">
                      {post.list.req_dosis}
                    </p>
                    <h6 className="text-secondary mb-0">Cantidad</h6>
                    <p className="text-secondary mb-0 m_title">
                      {post.list.req_quantity}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* USER */}
            <div>
              <h3 className="text-secondary text-center">Donante</h3>
              <div className="bg-light p-4">
                <div className="m-auto img-container">
                  {post.list.user_info.profile_picture != null ? (
                    <img
                      className="p-2 card-pic"
                      src={post.list.user_info.profile_picture}
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null; //evitar looping
                        currentTarget.src = { medPlaceholder };
                      }}
                    />
                  ) : (
                    <img className="p-2 card-pic" src={medPlaceholder} />
                  )}
                </div>
                <div className="p-2">
                  <h6 className="mt-2 text-secondary mb-0">
                    <i className="fa-solid fa-user"></i> Nombre
                  </h6>
                  <p className="text-secondary m_title">
                    {post.list.user_info.name}
                  </p>
                  <h6 className="text-secondary mb-0">
                    <i className="fa-solid fa-location-dot"></i> Ciudad
                  </h6>
                  <p className="text-secondary m_title">
                    {post.list.user_info.city}
                  </p>
                  <div className="dropdown d-flex">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-auto-close="outside"
                    >
                      <i className="fa-solid fa-phone"></i> Número de contacto
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li className="text-center">
                        {post.list.user_info.phone}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* VIEW DE LA DESCRIPCION */}
          <div className="loading-bg rounded mx-5 mt-5 p-3">
            <h4 className="mt-2 text-secondary text-center mb-3">
              Descripción
            </h4>
            <div className="text-center text-secondary">
              {post.list.description}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
