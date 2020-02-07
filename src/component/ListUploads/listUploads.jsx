import React, { useEffect } from "react";
import Upload from "../Upload/upload";

const ListUploads = ({
  setUpload,
  filterUploads,
  setFilterUploads,
}) => {


  useEffect(() => {
      async function fetchData() {
        const response = await fetch(
            "https://api.mixcloud.com/junel-danao/cloudcasts/ " 
          );
          const fetchData = await response.json();
          setUpload(fetchData.data);
          setFilterUploads(fetchData.data);
          console.log(fetchData.data);
      }
    fetchData();
  }, [setUpload,setFilterUploads]);

 
  return (
    <tbody>
      {filterUploads.map(listUpload => {
        return (
          <tr key={listUpload.key}>
            <td>{listUpload.name}</td>
            <td>{listUpload.url}</td>
            <td>{listUpload.audio_length}</td>
            <td>{listUpload.created_time}</td>
            <td>{listUpload.key}</td>
            <td>{listUpload.slug}</td>
            <td>
              <button className="button is-light " >
                <span className="icon">
                  <i className="fas fa-trash-alt" aria-hidden="true"></i>
                </span>

              
              </button>
              <button className="button is-light">
                <span className="icon">
                  <i className="fas fa-edit" aria-hidden="true"></i>
                </span>
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default ListUploads;
