import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { setCurrentUser } from "../actions/user-details-actions.js";
import NavBar from "./navBar/index.js";
const AlmostSomewhere = () => {
  const dispatch = useDispatch();

  const userStore = useSelector((state) => state.userStore);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("allmostsomewhere-isLoggedIn");

    if (isLoggedIn) {
      const username = localStorage.getItem("allmostsomewhere-username");
      setCurrentUser(dispatch, username);
    }
  }, [dispatch]);

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
