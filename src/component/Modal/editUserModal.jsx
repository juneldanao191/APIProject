import React from "react";
import { fetchUsers } from "../redux/action/userActions";
import { connect } from "react-redux";

const EditUserForm = ({
  editUser,
  setEditUser,
  isOpenModal,
  setIsOpenModal,
  User
}) => {
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const UpdateUser = async id => {
    try {
      const res = await fetch("http://localhost:3000/users/" + id, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: "PUT",
        body: JSON.stringify(editUser)
      });
      console.log(editUser);

      User();
      setIsOpenModal(false);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };


  const handleChange = (e) => {
    setEditUser({
      ...editUser,
      [e.target.id]: e.target.value
    })
  }

 
  return (
    <tr>
      <td>
        {isOpenModal ? (
          <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title "></p>
                <button
                  className="delete is-hovered"
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
                      className="input "
                      type="text"
                      placeholder="Enter Name "
                      value={editUser.name}
                      onChange={handleChange}
                      id="name"
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
                      placeholder="Enter Username"
                      value={editUser.username}
                      id="username"
                      onChange={handleChange}
                    />
                   <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                  </span>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="text"
                      placeholder="Enter Email"
                      value={editUser.email}
                      id="email"
                      onChange={handleChange}
                    />
                    <span className="icon is-small is-left">
                    <i className="fas fa-at"></i>
                    </span>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Address</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="text"
                      placeholder="Enter Address"
                      value={editUser.address}
                      id="address"
                      onChange={handleChange}
                    />
                    <span className="icon is-small is-left">
                    <i className="fas fa-home"></i>
                    </span>
                  </div>
                </div>
              </section>
              <footer className="modal-card-foot">
                <button
                  className="button is-success is-hovered is-right "
                  onClick={() => UpdateUser(editUser.id)}
                >
                  SAVE
                </button>
                <button className="button" onClick={toggleModal}>
                  Cancel
                </button>
              </footer>
            </div>
          </div>
        ) : null}
      </td>
    </tr>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    User: () => dispatch(fetchUsers())
  };
};

export default connect(undefined, mapDispatchToProps)(EditUserForm);
