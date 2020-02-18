import React, { useState } from "react";
import "bulma/css/bulma.css";
import UserLists from "../ListUsers/listUsers";
import { fetchUsers } from "../redux/action/userActions";
import AddUserModal from "../Modal/addUserModal";
import { connect } from "react-redux";


const User = ({fetchUsers,userData}) => {
  // const [users, setUsers] = useState([]);
  // const [filterUsers, setFilterUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");  

  const handleChangeUser = e => {
    setInputValue(e.target.value);
    fetchUsers(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="title has-text-centered">Users</h1>

      <AddUserModal />

      <div className="field" style={{ width: "20%" }}>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-rounded"
            type="text"
            value={inputValue}
            onChange={handleChangeUser}
            placeholder="Search ..."
          />
          <span className="icon is-small is-left">
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>
      <table className="table is-bordered is-fullwidth is-striped is-hoverable">
        <thead>
          <tr className="table-row-hover-background-color is-selected ">
            <th className="id has-text-centered	">ID</th>
            <th className="name has-text-centered	">Name</th>
            <th className="username has-text-centered	">User Name</th>
            <th className="email has-text-centered	">Email</th>
            <th className="address has-text-centered	">Address</th>
            <th className="action is-flex has-centered" style={{justifyContent:"center"}}>Action</th>
          </tr>
        </thead>
        <UserLists
          // users={users}
          // setUsers={setUsers}
          // filterUsers={filterUsers}
          // setFilterUsers={setFilterUsers}
          fetchUsers={fetchUsers}
        />
      </table>
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
    fetchUsers: (search) => dispatch(fetchUsers(search))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
