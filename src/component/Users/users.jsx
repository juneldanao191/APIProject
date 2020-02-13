import React, { useState} from "react";
import "bulma/css/bulma.css";
import UserLists from "../ListUsers/listUsers";
import { fetchUsers } from "../redux/action/userActions";

const User = () => {
  const [users, setUsers] = useState([]);
  const [filterUsers, setFilterUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  

 
  const handleChangeUser = e => {
    setInputValue(e.target.value);
    console.log(e.target.value);
    if (e.target.value) {
      const filtered = users.filter(user =>
        user.id.toLowerCase().includes(e.target.value.toLowerCase())
      );
      console.log(filtered)

      setFilterUsers(filtered);
    } else {
      setFilterUsers(users);
    }
  };
  return (
    <div>
      <div className="container">
        <h1 className="title">Users</h1>

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
            <tr className="is-selected">
              <th className="id">ID</th>
              <th className="name">Name</th>
              <th className="username">User Name</th>
              <th className="email">Email</th>
              <th className="address">Address</th>
              <th className="phone">Phone</th>
              <th className="website">Website</th>
              <th className="company">Company</th>
              <th className="action">Action</th>
              
            </tr>
          </thead>
          <UserLists
            users={users}
            setUsers={setUsers}
            filterUsers={filterUsers}
            setFilterUsers={setFilterUsers}
            fetchUsers={fetchUsers}
          />
        </table>
      </div>
    </div>
  );
};

export default User;
