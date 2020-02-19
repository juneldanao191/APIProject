import React from "react";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();

  const handleClickHome = () => {
    history.push("/");
  };
  const handleClickUsers= () => {
    history.push("/users");
  };
  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-item">
          <img
            src="https://i.ibb.co/kGTQPYF/mixcloud-logo.png "
            width="130"
            height="30"
            alt="logo"
          />
        </div>
        <div
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item ">
            <div className="field is-grouped">
              <p className="control">
                <button className="button is-light" onClick={handleClickHome}>
                  <span className="icon">
                    <i className="fas fa-home" aria-hidden="true"></i>
                  </span>
                  <span>HOME</span>
                </button>
              </p>
              <p className="control">
                <button
                  className="button is-link is-rounded"
                  onClick={handleClickUsers}
                >
                  <span className="icon">
                    <i className="fas fa-users"></i>
                  </span>
                  <span>USERS</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
