import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../actions/user-details-actions";
const NavBar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userStore);
  const dispatch = useDispatch();

  const logout = () => {
    logoutUser(dispatch);
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            &nbsp;AlmostSomewhere
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {user?.username ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      Welcome, {user?.firstname}!
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    style={{ textDecoration: "none" }}
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
                    <Link to="/signup" style={{ textDecoration: "none" }}>
                      <span className="nav-link">Sign Up</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      <span className="nav-link">Login</span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <form className="form-inline">
              <div className="input-group">
                <input type="text" className="form-control" size="35" />
                <span className="input-group-btn">
                  &nbsp;{" "}
                  <button className="btn btn-primary" type="button">
                    Search
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
