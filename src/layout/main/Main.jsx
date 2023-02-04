import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Main = () => {
  const location = useLocation();
  return (
    <div className=" p-5">
      {location.pathname !== "/" && <Navbar />}

      <Outlet />
    </div>
  );
};

export default Main;
