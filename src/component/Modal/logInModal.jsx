import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const LogIn = () => {
    const history = useHistory();

    const initialState = {
        email:"",
        password:""
    }

    const [userLogIn, setUserLogIn] = useState(initialState)

    const [isOpenModal, setIsOpenModal] = useState(false);

    const toggleModal = () => {
        setIsOpenModal(!isOpenModal);
      };

    const handleChange = e => {
      setUserLogIn({
          ...userLogIn,
          [e.target.name]: e.target.value
        });
          console.log(e.target.value)
          console.log(userLogIn)
      };
 
const handleSubmit = async (e) => {
    e.preventDefault()
        alert("Logged in");
        history.push("/users");
}
    return (
<div className={`modal ${isOpenModal ? "is-active" : ""}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title"></p>

            <button
              className="delete"
              aria-label="close"
              onClick={toggleModal}
            ></button>
          </header>

          <div>
            <span className="user-icon is-center">
              <i className="fas fa-user-circle fa-5x"></i>
            </span>
          </div>
          <section className="modal-card-body">
          <div className="field">
            <label className="label">Email Address</label>
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input "
                  type="email"
                  value={userLogIn.email}
                  name="email"
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Email"
                />

                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right"></span>
              </p>

            </div>

            <div className="field is-medium">
              <label className="label">Password</label>
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  value={userLogIn.password}
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input type="checkbox" />
                  Remember Me
                </label>
              </div>
            </div>

            <div className="field">
              <p className="control">
                <button
                  className="button is-success is-fullwidth is-medium"
                  type="submit"
                >
                  Login
                </button>
              </p>
            </div>

            <div className="field">
              <div className="control">
                <a href="#"> Forgot Password</a>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success " onClick={handleSubmit}>
              ADD USER
            </button>
            <button className="button" onClick={toggleModal}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    )
}

export default LogIn;