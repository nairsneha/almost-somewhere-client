import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./navBar/index.js";
const AlmostSomewhere = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AlmostSomewhere;
