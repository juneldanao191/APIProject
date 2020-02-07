import React from "react";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  console.log(history);

  const handleClickHome = () => {
    history.push("/");
  };
  const handleClickUpload = () => {
    history.push("/upload");
  };
  console.log(history);
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
          <div className="navbar-item">
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
                  onClick={handleClickUpload}
                >
                  <span className="icon">
                    <i className="fas fa-cloud-upload-alt"></i>
                  </span>
                  <span>UPLOADS</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-rounded"
                type="text"
                placeholder="Search ..."
              />
              <span className="icon is-small is-left">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
