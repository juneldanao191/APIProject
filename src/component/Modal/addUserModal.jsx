import React, { useState } from "react";
import { fetchUsers } from "../redux/action/userActions";
import { connect } from "react-redux";

const UserModal = ({ Users, userData, sestEditUser, userEdit }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [newUser, setNewUser] = useState({
    id: "",
    name: "",
    username: "",
    age: "",
    address: ""
  });

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleAddName = e => {
    setNewUser({
      ...newUser,
      name: e.target.value
    });
  };
  const handleAddId = e => {
    setNewUser({
      ...newUser,
      id: e.target.value
    });
  };

  const handleAddUsername = e => {
    setNewUser({
      ...newUser,
      username: e.target.value
    });
  };

  const handleAddAge = e => {
    setNewUser({
      ...newUser,
      age: e.target.value
    });
  };

  const handleAddAddress = e => {
    setNewUser({
      ...newUser,
      address: e.target.value
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
        className="button is-success is-pulled-right"
        onClick={handleOpenModal}
      >
        <span> Add User</span>
      </button>

      {isOpenModal ? (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">ADD USER</p>
              <button
                className="delete"
                aria-label="close"
                onClick={handleCloseModal}
              ></button>
            </header>
            <section className="modal-card-body">
              <div className="field-padding">
                <label className="label">ID</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter ID"
                    value={newUser.id}
                    onChange={handleAddId}
                  />
                  <span className="icon is-small is-left">
                    {/* <i className="fas fa-hashtag"></i> */}
                  </span>
                  <span className="icon is-small is-right"></span>
                </div>
              </div>
              <div className="field">
                <label className="label">NAME</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Name"
                    id="name"
                    onChange={handleAddName}
                    value={newUser.name}
                  />
                  <span className="icon is-small is-left">
                    {/* <i className="fas fa-user"></i> */}
                  </span>
                  <span className="icon is-small is-right"></span>
                </div>
              </div>

              <div className="field">
                <label className="label">USERNAME</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Username"
                    value={newUser.username}
                    onChange={handleAddUsername}
                  />
                  <span className="icon is-small is-left">
                    {/* <i className="fas fa-user"></i> */}
                  </span>
                  <span className="icon is-small is-right"></span>
                </div>
              </div>

              <div className="field">
                <label className="label">AGE</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Age"
                    value={newUser.age}
                    onChange={handleAddAge}
                  />
                  <span className="icon is-small is-left">
                    {/* <i className="fas fa-user"></i> */}
                  </span>
                  <span className="icon is-small is-right"></span>
                </div>
              </div>

              <div className="field">
                <label className="label">ADDRESS</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Address"
                    value={newUser.address}
                    onChange={handleAddAddress}
                  />
                  <span className="icon is-small is-left">
                    {/* <i className="fas fa-home"></i> */}
                  </span>
                  <span className="icon is-small is-right"></span>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button
                className="button is-success "
                onClick={() => handleAddUser()}
              >
                ADD USER
              </button>
              <button className="button" onClick={handleCloseModal}>
                Cancel
              </button>
            </footer>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Users: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserModal);
