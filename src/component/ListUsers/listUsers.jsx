import React, { useEffect, useState } from "react";

import { fetchUsers } from "../redux/action/userActions";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

const UserLists = ({ fetchUsers, userData }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDeleteUpload = id => {
    console.log("deleted");
    setUsers(users.filter(user => user.id !== id));
  };

  UserLists.propTypes = {
    fetchUsers: PropTypes.func.isRequired
  };

  return userData.isLoading ? (
    <h1>Loading</h1> ) 
    : (
    <tbody>
      {userData.map(user => {
        return (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              {user.address.city},<br />
              {user.address.street}, {user.address.zipcode}
            </td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>{user.company.name}</td>

            <td>
              <button
                className="button is-light "
                onClick={() => handleDeleteUpload(user.id)}
              >
                <span className="icon">
                  <i className="fas fa-trash-alt" aria-hidden="true"></i>
                </span>
              </button>
              {/* <button className="button is-light">
            <span className="icon">
              <i className="fas fa-edit" aria-hidden="true"></i>
            </span>
          </button> */}
            </td>
          </tr>
        );
      })}
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
