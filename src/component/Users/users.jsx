import React from "react";
import "bulma/css/bulma.css";
import UserLists from "../ListUsers/listUsers";
import { fetchUsers } from "../redux/action/userActions";
import AddUserModal from "../Modal/addUserModal";
import { connect } from "react-redux";
import SearchUsers from "../Search/search";
import NavBar from "../Navbar/navBar";
const UsersComponent = ({ Users }) => {
  return (
    <div className="container">
      <NavBar />
      <div className="control ">
        <span className="users-icon">
          <i className="fas fa-users fa-5x"></i>
        </span>
        <h1 className="title has-text-centered ">Users</h1>
      </div>

      <AddUserModal />
      <SearchUsers />
      <table className="table is-bordered is-fullwidth is-striped is-hoverable">
        <thead>
          <tr className="table-row-hover-background-color is-selected ">
            <th className="id has-text-centered	">Id</th>
            <th className="name has-text-centered	">Name</th>
            <th className="username has-text-centered	">User Name</th>
            <th className="email has-text-centered	">Email</th>
            <th className="address has-text-centered	">Address</th>
            <th className="action has-text-centered ">Action</th>
          </tr>
        </thead>

        <UserLists Users={Users} />
      </table>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    Users: search => dispatch(fetchUsers(search))
  };
};

export default connect(undefined, mapDispatchToProps)(UsersComponent);
