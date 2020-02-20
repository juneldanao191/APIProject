import React, { useState } from "react";
import { fetchUsers } from "../redux/action/userActions";
import { connect } from "react-redux";

const SearchUser = ({ Users }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = e => {
    setInputValue(e.target.value);
    Users(e.target.value);
  };
  return (
    <div className="field" style={{ width: "25%" }}>
      <div className="control has-icons-left has-icons-right">
        <input
          className="input is-rounded"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search ..."
        />
        <span className="icon is-small is-left">
          <i className="fas fa-search"></i>
        </span>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    Users: search => dispatch(fetchUsers(search))
  };
};

export default connect(undefined, mapDispatchToProps)(SearchUser);
