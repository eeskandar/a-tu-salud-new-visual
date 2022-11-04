import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SideProfile } from "../component/SideProfile";
import { Context } from "../store/appContext";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const params = useParams();
  const getUser = actions.getUser;

  console.log(store.activeUser);

  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      navigate("/login");
    } else {
      getUser(params.userid);
    }
  }, []);

  return (
    <div className="d-flex justify-content-between p-0 col-11 bg-color">
      <div className="col-3 side-profile p-0">
        <SideProfile />
      </div>
      <div className="col-9">
        {/* info */}
        <h1 className="text-center mt-4 text-secondary">
          Información de usuario
        </h1>
        <div className="d-flex justify-content-evenly pt-5">
          <div>
            <div>
              <div className="fs-5 text-secondary text-center">Nombre</div>
              <div className="fw-bold text-secondary text-center">
                {store.activeUser[0].name + " " + store.activeUser[0].last_name}
              </div>
            </div>
            <div>
              <div className="fs-5 text-secondary text-center mt-4">Email</div>
              <div className="fw-bold text-secondary text-center">
                {store.activeUser[0].email}
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="fs-5 text-secondary text-center">Ciudad</div>
              <div className="fw-bold text-secondary text-center">
                {store.activeUser[0].city}
              </div>
            </div>
            <div>
              <div className="fs-5 text-secondary text-center mt-4">
                Teléfono
              </div>
              <div className="fw-bold text-secondary text-center">
                {store.activeUser[0].phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
