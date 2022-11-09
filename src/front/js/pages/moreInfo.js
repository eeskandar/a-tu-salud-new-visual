import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../component/Loading";
import { MedPlaceholder } from "../../img/med-03.png";

export const MoreInfo = () => {
  const { id } = useParams();
  console.log(id);
  const [post, setPost] = useState();
  useEffect(() => {
    const fetchPosts = async () => {
      let response = await fetch(process.env.BACKEND_URL + `/api/post/${id}`, {
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
              <h3 className="text-secondary text-center">Medicamento</h3>
              <div className="">
                <div className="m-auto pt-4 d-flex img-container">
                  <object
                    data={post.list.medicine_picture}
                    className="card-pic"
                    type="image/jpg"
                  >
                    <img
                      src="https://via.placeholder.com/400x400.png?text=Image+Not+Found"
                      className="card-img-top"
                      alt="stock picture"
                    />
                  </object>
                </div>
                <div className="p-5 pt-3 d-flex">
                  <div className="mt-2 me-4">
                    <h6 className="text-secondary mb-0">Medicamento</h6>
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
                    <h6 className="text-secondary mb-0">Dosis</h6>
                    <p className="text-secondary m_title m_title">
                      {post.list.dosis}
                    </p>
                    <h6 className="text-secondary mb-0">
                      Fecha de vencimiento
                    </h6>
                    <p className="text-secondary">
                      {post.list.expiration_date}
                    </p>
                    <h6 className="text-secondary mb-0">Cantidad</h6>
                    <p className="text-secondary mb-0 m_title">
                      {post.list.quantity}
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
                  <object
                    data={post.list.user_info.profile_picture}
                    className="card-pic"
                    type="image/jpg"
                  >
                    <img
                      src="https://via.placeholder.com/400x400.png?text=Image+Not+Found"
                      className="card-img-top"
                      alt="stock picture"
                    />
                  </object>
                </div>
                <div className="p-2">
                  <h6 className="mt-2 text-secondary mb-0">Nombre</h6>
                  <p className="text-secondary">{post.list.user_info.name}</p>
                  <h6 className="text-secondary mb-0">Ciudad</h6>
                  <p className="text-secondary">{post.list.user_info.city}</p>
                  <div className="dropdown d-flex justify-content-center">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-auto-close="outside"
                    >
                      Número de contacto
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
          <div className="loading-bg rounded mx-5 p-3">
            <h6 className="mt-2 text-secondary text-center mb-3">
              Descripción
            </h6>
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
