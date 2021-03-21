import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { name } = loggedInUser;
  return (
    <div>
      <nav className="container navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <h1 className="navbar-brand" href="#">
            eRider Service Bangladesh
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Destination
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link active">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link active">
                  Contact
                </Link>
              </li>

              <li className="nav-item mx-auto">
                {name ? (
                  <Link to="" className="nav-link disabled">
                    <strong className="text-dark">{name}</strong>
                  </Link>
                ) : (
                  <button className="nav-link btn btn-primary text-white btn-lg p-2">
                    Log in
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
