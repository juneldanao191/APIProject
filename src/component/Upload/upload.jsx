import React, { useState, useEffect } from "react";
import "bulma/css/bulma.css";
import ListUploads from "../ListUploads/listUploads";

const Upload = () => {
  const [uploads, setUpload] = useState([]);
  const [filterUploads, setFilterUploads] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // useEffect(async () => {
  //   const response = await fetch(
  //     "https://api.mixcloud.com/junel-danao/cloudcasts/"
  //   );
  //   const fetchData = await response.json();
  //   setUpload(fetchData.data);
  //   setFilterUploads(fetchData.data);
  //   console.log(fetchData.data);
  // }, []);

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

        <div class="field" style={{ width: "20%" }}>
          <div class="control has-icons-left has-icons-right">
            <input
              className="input is-rounded"
              type="text"
              value={inputValue}
              onChange={handleChangeUploads}
              placeholder="Search ..."
            />
            <span class="icon is-small is-left">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>

        <table className="table is-bordered is-fullwidth is-striped is-hoverable">
          <thead>
            <tr class="is-selected">
              <th className="username">Songs </th>
              <th className="url">URL</th>
              <th className="duration">Duration</th>
              <th className="data-upload">Data Upload</th>
              <th className="key">Key</th>
              <th className="slug">Slug</th>
            </tr>
          </thead>
          <ListUploads
            uploads={uploads}
            setUpload={setUpload}
            filterUploads={filterUploads}
            setFilterUploads={setFilterUploads}
          />
        </table>
      </div>
    </div>
  );
};

export default Upload;
