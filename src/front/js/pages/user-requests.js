import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "./../store/appContext";
import { SideProfile } from "../component/SideProfile";
import { CardRequest } from "../component/CardRequest";

export const UserRequests = () => {
  const { store, actions } = useContext(Context);
  // const getDonations = actions.getDonations;

  // useEffect(() => {
  //   getDonations()
  // }, []);

  // console.log(store.donations);

  return (
    <div className="d-flex justify-content-between p-0 col-11 bg-color">
      <div className="col-3 side-profile p-0">
        <SideProfile />
      </div>
      <div className="col-9">
        <h1 className="text-center text-secondary my-5 mt-5">Solicitudes</h1>
        <div className="">
          {store.donations ? (
            store.donations.map((donations) => {
              return <CardRequest key={donations.id} donations={donations} />;
            })
          ) : (
            <h3 className="text-center text-secondary my-5 mt-5">
              No ha creado solicitud todavia.
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
