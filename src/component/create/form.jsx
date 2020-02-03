import React from "react";

const create = () => {
  return (
      <div className="form-container">
          <div className="form-title">
              <h1 className="title">Create Form</h1>
    <div className="card">
      <div className="card-content">
        <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="text"
              placeholder="Enter your Username"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Name</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="text"
              placeholder="Enter your Name"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter your Age"
            />
          </div>
        </div>
      </div>
    </div>
    </div>

    </div>
  );
};

export default create;
