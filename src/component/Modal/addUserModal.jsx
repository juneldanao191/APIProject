import React, { useState } from "react";
import { fetchUsers } from "../redux/action/userActions";
import { connect } from "react-redux";

const AddUserModal = ({ Users }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [newUser, setNewUser] = useState({
    id: new Date().getTime(),
    name: "",
    username: "",
    email: "",
    address: ""
  });

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
    clearState();
  };

  const clearState = () => {
    setNewUser({ name: "", username: "", email: "", address: "" });
  };

  const handleChange = e => {
    setNewUser({
      ...newUser,
      [e.target.id]: e.target.value
    });
  };


  
  const handleAddUser = async () => {
    try {
      const res = await fetch("http://localhost:3000/users/", {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: "POST",
        body: JSON.stringify(newUser)
      });
      Users();
      setIsOpenModal(false);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-padding">
      <button
        className="button is-link is-pulled-right is-rounded"
        onClick={toggleModal}
      >
        <span> + Add User</span>
      </button>
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
              <label className="label">Name</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter Name"
                  id="name"
                  onChange={handleChange}
                  value={newUser.name}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Username</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  value={newUser.username}
                  onChange={handleChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
                <span className="icon is-small is-right"></span>
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter Email"
                  id="email"
                  value={newUser.email}
                  onChange={handleChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-at"></i>
                </span>
                <span className="icon is-small is-right"></span>
              </div>
            </div>

            <div className="field">
              <label className="label">Address</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  id="address"
                  placeholder="Enter Address"
                  value={newUser.address}
                  onChange={handleChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-home"></i>
                </span>
                <span className="icon is-small is-right"></span>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success " onClick={handleAddUser}>
              ADD USER
            </button>
            <button className="button" onClick={toggleModal}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    Users: () => dispatch(fetchUsers())
  };
};

export default connect(undefined, mapDispatchToProps)(AddUserModal);
