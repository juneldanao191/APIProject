import React, { useEffect, useState, Component } from "react";

import { fetchUploads } from "../redux/action/uploadActions";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

const ListUploads = ({ fetchUploads, uploadData }) => {
  const [listUploads, setListUploads] = useState([]);

  useEffect(() => {
    fetchUploads();
  }, []);

  const handleDeleteUpload = key => {
    console.log("deleted");
    setListUploads(listUploads.filter(listUpload => listUpload.key !== key));
    console.log(listUploads);
  };

  ListUploads.propTypes = {
    fetchUploads: PropTypes.func.isRequired,
    uploads: PropTypes.object.isRequired
  };
  return (
    <tbody>
      {uploadData.map(listUpload => {
        return (
          <tr key={listUpload.key}>
            <td>{listUpload.name}</td>
            <td>{listUpload.url}</td>
            <td>{listUpload.audio_length}</td>
            <td>{listUpload.created_time}</td>
            <td>{listUpload.key}</td>
            <td>{listUpload.slug}</td>
            <td>
              <button
                className="button is-light "
                onClick={() => handleDeleteUpload(listUpload.key)}
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
    uploadData: state.uploads
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUploads: () => dispatch(fetchUploads())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListUploads);
