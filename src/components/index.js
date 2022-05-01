import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./navBar/index.js";
const AlmostSomewhere = () => {
  return (
    <>
      <NavBar />
      <div className="container my-2">
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AlmostSomewhere;
