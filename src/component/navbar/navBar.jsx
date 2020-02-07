import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

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
        <a className="navbar-item">
          <img
            src="https://i.ibb.co/kGTQPYF/mixcloud-logo.png "
            width="130"
            height="30"
          />
        </a>
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <div className="nav-item">
            <div className="navbar-item ">
              <div class="control-radius has-icons-left has-icons-right">
                <div className="button is-link" onClick={handleClickHome}>
                  <span class="icon is-small is-left">
                    <i class="fas fa-home fa-xs"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <a className="navbar-item"></a>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div class="field is-grouped">
            <p class="control is-expanded has-icons-left has-icons-right">
              <input
                class="input"
                type="text"
                placeholder="Search ..."
              />
               <span class="icon is-small is-left">
              <i class="fas fa-search"></i>
            </span>
            </p>
            <p class="control ">
              <a class="button is-link">Search</a>
            </p>
           
          <div className="buttons">
            <a
              className="button is-rounded is-link "
              onClick={handleClickUpload}
            >
              Uploads
            </a>
          </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
