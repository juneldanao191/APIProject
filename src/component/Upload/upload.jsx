import React, { useState} from "react";
import "bulma/css/bulma.css";
import ListUploads from "../ListUploads/listUploads";
import { fetchUploads } from "../redux/action/uploadActions";

const Upload = () => {
  const [uploads, setUpload] = useState([]);
  const [filterUploads, setFilterUploads] = useState([]);
  const [inputValue, setInputValue] = useState("");
  

 
  const handleChangeUploads = e => {
    setInputValue(e.target.value);
    console.log(e.target.value);
    if (e.target.value) {
      const filtered = uploads.filter(listUploads =>
        listUploads.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilterUploads(filtered);
    } else {
      setFilterUploads(uploads);
    }
  };
  return (
    <div>
      <div className="container">
        <h1 className="title">Uploads</h1>

        <div className="field" style={{ width: "20%" }}>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-rounded"
              type="text"
              value={inputValue}
              onChange={handleChangeUploads}
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
              <th className="username">Songs </th>
              <th className="url">URL</th>
              <th className="duration">Duration</th>
              <th className="data-upload">Data Upload</th>
              <th className="key">Key</th>
              <th className="slug">Slug</th>
              <th className="action">Action</th>
            </tr>
          </thead>
          <ListUploads
            uploads={uploads}
            setUpload={setUpload}
            filterUploads={filterUploads}
            setFilterUploads={setFilterUploads}
            fetchUploads={fetchUploads}
          />
        </table>
      </div>
    </div>
  );
};

export default Upload;
