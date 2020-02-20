import React, { useEffect, useState } from "react";

import { fetchUsers } from "../redux/action/userActions";
import { connect } from "react-redux";
import EditUserFormModal from "../Modal/editUserModal";

const UsersList = ({ fetchUsers, userData }) => {
  const [editUser, setEditUser] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    address: ""
  });
  const [isOpenModal, setIsOpenModal] = useState(false);


  

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteUser = async id => {
    try {
      const response = await fetch("http://localhost:3000/users/" + id, {
        method: "DELETE"
      });
      console.log(response);
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditUser = ({ id, name, username, email, address }) => {
    setEditUser({ id, name, username, email, address });
    setIsOpenModal(true);
  };

  return userData.isLoading ? (
    <h1>Loading</h1>
  ) : (
    <tbody>
      {userData.map(user => {
        return (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td className="is-flex " style={{ justifyContent: "center" }}>
              <button
                className="button is-light "
                onClick={() => handleDeleteUser(user.id)}
              >
                <span className="icon">
                  <i className="fas fa-trash-alt" aria-hidden="true"></i>
                </span>
              </button>
              <button
                className="button is-light"
                onClick={() => handleEditUser(user)}
              >
                <span className="icon">
                  <i className="fas fa-edit" aria-hidden="true"></i>
                </span>
              </button>
            </td>
          </tr>
        );
      })}
      <EditUserFormModal
        editUser={editUser}
        setEditUser={setEditUser}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
    </tbody>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
