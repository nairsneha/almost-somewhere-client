import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from '../../logo.png'

const NavBar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("allmostsomewhere-isLoggedIn");
    localStorage.removeItem("allmostsomewhere-username");
    localStorage.removeItem("allmostsomewhere-token");
    navigate("/login");
  };
  const isLoggedIn = localStorage.getItem("allmostsomewhere-isLoggedIn");
  const username = localStorage.getItem("allmostsomewhere-username");
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              width="250"
              height="90"
              className="d-inline-block align-top"
              alt=""
            />

          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <form className="form-inline">
              <div className="input-group">
                <input type="text" className="form-control" size="80" />
                <span className="input-group-btn">
                  &nbsp;{" "}
                  <button className="btn btn-primary" type="button">
                    Search
                  </button>
                </span>
              </div>
            </form>


            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {isLoggedIn === null ? (
                <>
                  <li className="nav-item">
                    <Link to="/signup" style={{ textDecoration: "none", fontWeight: 'bold' }}>
                      <span className="nav-link">Sign Up</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" style={{ textDecoration: "none", fontWeight: 'bold' }}>
                      <span className="nav-link">Login</span>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      Welcome, {username}!
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    style={{ textDecoration: "none" }}
                    onClick={() => logout()}
                  >
                    <a className="nav-link" href="#">
                      Logout
                    </a>
                  </li>
                </>
              )}
            </ul>



          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
