import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const fetchFarmaciaAPI = async () => {
    try {
      const response = await fetch(
        "http://www.farmaplus.com.ve/rest/products?instock=false&page=1&searchStr=dol&status=1"
      );
      const body = response.json;
      console.log(body);
      console.log("okay");
      return body;
    } catch (error) {}
  };

  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!!</h1>
      <p>
        <img src={rigoImageUrl} />
      </p>
      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
      <p>
        This boilerplate comes with lots of documentation:{" "}
        <a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
          Read documentation
        </a>
      </p>
      <button
        type="button"
        class="btn btn-primary"
        onClick={(e) => fetchFarmaciaAPI()}
      >
        Primary
      </button>
    </div>
  );
};
