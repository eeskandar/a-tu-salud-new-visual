import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "./../store/appContext";
import { SideProfile } from "../component/SideProfile";
import { CardRequest } from "../component/CardRequest";

export const UserRequests = () => {
  const { store, actions } = useContext(Context);
  const [requests, setRequests] = useState();
  const urlParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    const getRequests = async () => {
      if (store.activeUser[0].id != "Guest") {
        urlParams.set("typeof", "request");
        urlParams.set("user_id", store.activeUser[0].id);
        let response = await fetch(
          process.env.BACKEND_URL + "/api/request?" + urlParams,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          return false;
        }
        const requestPost = await response.json();
        setRequests(requestPost.list);
      }
    };
    getRequests();
  }, [store.activeUser[0].id]);

  if (requests) {
    console.log(requests);
  }

  return (
    <div className="d-flex justify-content-between p-0 col-11 bg-color">
      <div className="col-3 side-profile p-0">
        <SideProfile />
      </div>
      <div className="col-9 row-80 overflow-y-axis">
        <h1 className="text-center text-secondary my-5 mt-5">Solicitudes</h1>
        <div className="">
          {requests ? (
            requests.map((requests) => {
              return (
                <CardRequest
                  key={requests.id}
                  active_component={requests.active_component}
                  description={requests.description}
                  expiration_date={requests.expiration_date}
                  medicine_picture={requests.medicine_picture}
                  name={requests.name}
                  title={requests.title}
                  quantity={requests.quantity}
                  presentation={requests.presentation}
                />
              );
            })
          ) : (
            <h3 className="text-center text-secondary my-5 mt-5">
              No ha creado donaciones todavia.
            </h3>
          )}
          <div>
            <h3 className="text-center text-secondary my-5 mt-5">
              <Link
                to="/user/request-post"
                className="nav-link text-secondary mb-4"
              >
                <i className="fa-solid fa-circle-plus"></i> Crear nueva
                solicitud
              </Link>{" "}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
