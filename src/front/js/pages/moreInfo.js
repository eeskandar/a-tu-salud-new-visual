import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../component/Loading";

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
    <div className="col-11 col-lg-10">
      {post ? (
        <div>
          {/* CARDS DE USER Y POST */}
          <div className=" d-flex justify-content-around py-3">
            {/* POST */}
            <div>
              <div className="bg-light">
                <div className="m-auto p-2 d-flex">
                  <object
                    data={post.list.medicine_picture}
                    className="card-img-top"
                    type="image/jpg"
                    style={{ maxWidth: "10rem" }}
                  >
                    <img
                      src="https://via.placeholder.com/400x400.png?text=Image+Not+Found"
                      className="card-img-top"
                      alt="stock picture"
                    />
                  </object>
                </div>
                <div className="ps-2">
                  <h6 className="mt-2 text-secondary">{post.list.name}</h6>
                  <h6 className="text-secondary">{post.list.presentation}</h6>
                  <h6 className="text-secondary">
                    {post.list.active_component}
                  </h6>
                  <h6 className="text-secondary">
                    {post.list.expiration_date}
                  </h6>
                  <h6 className="text-secondary">{post.list.quantity}</h6>
                </div>
              </div>
            </div>
            {/* USER */}
            <div>
              <div className="bg-light">
                <div className="m-auto p-2 d-flex">
                  <object
                    data={post.list.user_info.profile_picture}
                    className="card-img-top"
                    type="image/jpg"
                    style={{ maxWidth: "10rem" }}
                  >
                    <img
                      src="https://via.placeholder.com/400x400.png?text=Image+Not+Found"
                      className="card-img-top"
                      alt="stock picture"
                    />
                  </object>
                </div>
                <div className="ps-2">
                  <h6 className="mt-2 text-secondary">
                    {post.list.user_info.name}
                  </h6>
                  <h6 className="text-secondary">{post.list.user_info.city}</h6>
                  <button className="btn btn-info text-white fw-bold m-1">
                    {/* onClick revela el número */}
                    {post.list.user_info.phone}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* VIEW DE LA DESCRIPCION */}
          <div className="justify-content-center d-flex">
            <div>{post.list.description}</div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
