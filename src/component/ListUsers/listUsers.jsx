import React, { useEffect, useState } from "react";

import { fetchUsers } from "../redux/action/userActions";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import UserForm from "../UserForm/userForm";

const UserLists = ({ fetchUsers, userData }) => {

  
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

  const handleEditUser = (id, name, username, email, address) => {
    console.log(editUser);
    setEditUser({ id, name, username, email, address });
    setIsOpenModal(true);
  };

  UserLists.propTypes = {
    fetchUsers: PropTypes.func.isRequired
  };

  return userData.isLoading ? (
    <h1>Loading</h1>
  ) : (
    <tbody>
      {userData.map(user => {
        console.log(userData)
        return (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>

            <td className="is-flex " style={{justifyContent: 'center'}}>
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
                onClick={() =>
                  handleEditUser(
                    user.id,
                    user.name,
                    user.username,
                    user.email,
                    user.address
                  )
                }
              >
                <span className="icon">
                  <i className="fas fa-edit" aria-hidden="true"></i>
                </span>
              </button>
            </td>
          </tr>
        );
      })}
      <UserForm
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

export default connect(mapStateToProps, mapDispatchToProps)(UserLists);
