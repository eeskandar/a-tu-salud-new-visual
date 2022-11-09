import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "./../store/appContext";
import { SideProfile } from "../component/SideProfile";
import { CardDonations } from "../component/CardDonations";

export const UserTrades = () => {
  const { store, actions } = useContext(Context);
  const [trades, setTrades] = useState();
  const urlParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    const getTrades = async () => {
      if (store.activeUser[0].id != "Guest") {
        urlParams.set("typeof", "exchange");
        urlParams.set("user_id", store.activeUser[0].id);
        let response = await fetch(
          process.env.BACKEND_URL + "/api/trades?" + urlParams,
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
        const tradePosts = await response.json();
        setTrades(tradePosts.list);
      }
    };
    getTrades();
  }, [store.activeUser[0].id]);

  if (trades) {
    console.log(trades);
  }

  return (
    <div className="d-flex justify-content-between p-0 col-11 bg-color">
      <div className="col-3 side-profile p-0">
        <SideProfile />
      </div>
      <div className="col-9 overflow-y-axis row-80">
        <h1 className="text-center text-secondary my-5 mt-5">Intercambios</h1>
        <div className="">
          {trades ? (
            trades.map((donations) => {
              return (
                <CardDonations
                  key={donations.id}
                  active_component={donations.active_component}
                  description={donations.description}
                  expiration_date={donations.expiration_date}
                  medicine_picture={donations.medicine_picture}
                  name={donations.name}
                  title={donations.title}
                  quantity={donations.quantity}
                />
              );
            })
          ) : (
            <h3 className="text-center text-secondary my-5 mt-5">
              No ha creado solicitudes todavia.
            </h3>
          )}
          <div>
            <h3 className="text-center text-secondary my-5 mt-5">
              <Link to="/user/trade" className="nav-link text-secondary mb-4">
                <i className="fa-solid fa-circle-plus"></i> Crear nueva donación
              </Link>{" "}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
