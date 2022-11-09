import React, { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Context } from "./store/appContext";
import ScrollToTop from "./component/scrollToTop";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { NavbarVertical } from "./component/NavbarVertical";
import { TradingPost } from "./pages/trading-post";
import { Profile } from "./pages/profile";
import { Results } from "./pages/results";
import { UserPost } from "./pages/user-post";
import { UserDonation } from "./pages/user-donation";
import { UserRequests } from "./pages/user-requests";
import { MoreInfo } from "./pages/moreInfo";
import swal from "sweetalert";
import { UserPostRequest } from "./pages/user-request-post";
import { Loading } from "./component/Loading";
import { UserTrades } from "./pages/user-trades";

//create your first component
export const App = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  console.log(store.activeUser);

  // COMO MANEJAR LOS TOKEN VENCIDOS?
  // COMO HACER UNA PANTALLA DE CARGA?

  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      actions.logout();
      // navigate("/");
    } else {
      let success = actions.getUser(localStorage.getItem("id"));
      if (success == false) {
        swal("¡Ha pasado mucho tiempo!", "Debes iniciar sesión de nuevo");
        logout();
        navigate("/login");
      }
    }
  }, []);

  return (
    <div>
      <ScrollToTop>
        <Navbar />
        <div className="row container-fluid p-0 m-0 row-list ">
          <NavbarVertical />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<Profile />} path="/user/:userid" />
            <Route element={<UserPost />} path="/user/post" />
            <Route element={<UserPostRequest />} path="/user/request-post" />
            <Route element={<TradingPost />} path="/user/trade" />
            <Route element={<UserDonation />} path="/user/:userid/donation" />
            <Route element={<UserRequests />} path="/user/:userid/request" />
            <Route element={<UserTrades />} path="/user/:userid/trades" />
            <Route element={<Results />} path="/results" />
            <Route element={<MoreInfo />} path="/more-info/:id" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
        </div>
        <Footer />
      </ScrollToTop>
    </div>
  );
};
