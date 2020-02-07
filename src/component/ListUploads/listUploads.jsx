import React, {useState, useEffect} from 'react';

const ListUploads = ({uploads, setUpload, filterUploads, setFilterUploads}) => {

    
    useEffect(async () => {
        const response = await fetch(
          "https://api.mixcloud.com/junel-danao/cloudcasts/"
        );
        const fetchData = await response.json();
        setUpload(fetchData.data);
        setFilterUploads(fetchData.data);
        console.log(fetchData.data);
      }, []);

    return(
        <tbody>
        {filterUploads.map(listUpload => {
          return (
            <tr>
              <td>{listUpload.name}</td>
              <td>{listUpload.url}</td>
              <td>{listUpload.audio_length}</td>
              <td>{listUpload.created_time}</td>
              <td>{listUpload.key}</td>
              <td>{listUpload.slug}</td>
            </tr>
          );
        })}
      </tbody>
    )

}
export default  ListUploads;