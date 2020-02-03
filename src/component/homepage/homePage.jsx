import React, { useState, useEffect } from "react";
import "bulma/css/bulma.css";

const HomePage = () => {
  const [user, setUser] = useState({});

  async function fetchData() {
    const res = await fetch("https://api.mixcloud.com/spartacus/");
    const data = await res.json();
    setUser(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
   
      <div className="user">
        <h1 className="title">User</h1>
        <table className="table is-bordered">
          <thead>
            <tr class="table-row is-selected">
              <th classname="user-name">User Name</th>
              <th classname="city">City</th>
              <th classname="favorite-count">Favorite Count</th>
              <th classname="name">Name</th>
              <th className="url"> Url</th>
              <th classname="following-count">Following Count</th>
              <th className="listen-count"> Listen Count</th>
              <th className="updated-time"> Updated Time</th>
              <th className="created-time"> Create Time</th>
              <th className="biog"> Biog</th>
              <th className="follower-count">Follower Count</th>
              <th className="country"> Country</th>
              <th className="cloudcast-count"> Cloudcast Count</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ textAlign: "center", fontSize: "13px" }}>
              <td>{user.username}</td>
              <td>{user.city}</td>
              <td>{user.favorite_count}</td>
              <td>{user.name}</td>
              <td>{user.url}</td>
              <td>{user.following_count}</td>
              <td>{user.listen_count}</td>

              <td>{user.updated_time}</td>
              <td>{user.created_time}</td>
              <td>{user.biog}</td>

              <td>{user.country}</td>
              <td>{user.follower_count}</td>
              <td>{user.cloudcast_count}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <iframe
            id="mixcloudPlayer"
            width="100%"
            height="120"
            frameborder="0"
            src="https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2Fspartacus%2Fparty-time%2F&hide_cover=1&light=1"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
