import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import api from "../../services/user-service";
const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: null,
    password: null,
  });

  function isObjectEmpty(obj) {
    for (var key in obj) {
      if (obj[key] === null || obj[key] === "") return true;
    }
    return false;
  }

  const loginUser = () => {
    if (isObjectEmpty(user)) {
      alert("Enter all feilds");
    } else {
      const userDetails = api.loginUserSvc(user).then((data1) => {
        if (data1 !== undefined) {
          alert("Login successful");
          dispatch({
            type: "create-user",
            user: data1.response,
          });
          navigate("/");
        }
      });
    }
  };

  return (
    <>
      <br />
      <div className="container">
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">username</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter username"
              name="username"
              onChange={(e) =>
                setUser({
                  ...user,
                  username: e.target.value,
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              name="password"
              onChange={(e) =>
                setUser({
                  ...user,
                  password: e.target.value,
                })
              }
            />
          </div>
          <center>
            <button
              type="button"
              className="btn btn-primary"
              onClick={(e) => loginUser()}
              style={{ display: "inline-block" }}
            >
              Submit
            </button>
            &nbsp;&nbsp;
            <Link to="/signup" style={{ display: "inline-block" }}>
              <p> Register as User?</p>
            </Link>
          </center>
        </form>
      </div>
    </>
  );
};

export default Login;
