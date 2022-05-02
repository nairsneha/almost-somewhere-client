import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../logo.png";
import { logoutUser } from "../../actions/user-details-actions";
import { useState } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const [searchQuery, updateQuery] = useState("");
  const user = useSelector((state) => state.userStore);
  const dispatch = useDispatch();

  const logout = () => {
    logoutUser(dispatch);
    navigate("/");
  };
  const handleUpdateQuery = (val) => {
    updateQuery(val);
  };

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
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline">
              <div className="input-group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) => handleUpdateQuery(event.target.value)}
                  className="form-control"
                  size="80"
                />
                <span className="input-group-btn">
                  &nbsp;{" "}
                  <Link className="col" to={`/place/search/${searchQuery}`}>
                    <button className="btn btn-primary" type="button">
                      Search
                    </button>
                  </Link>
                </span>
              </div>
            </form>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {user?.username ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/profile"
                      style={{ textDecoration: "none", fontWeight: "bold" }}
                    >
                      Welcome, {user?.firstname}!
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    style={{ textDecoration: "none", fontWeight: "bold" }}
                    onClick={() => logout()}
                  >
                    <span className="nav-link" href="#">
                      Logout
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      to="/signup"
                      style={{ textDecoration: "none", fontWeight: "bold" }}
                    >
                      <span className="nav-link">Sign Up</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/login"
                      style={{ textDecoration: "none", fontWeight: "bold" }}
                    >
                      <span className="nav-link">Login</span>
                    </Link>
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
