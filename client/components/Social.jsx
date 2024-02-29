import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Social = () => {
  const [socialItem, setSocialItem] = useState([]);
  console.log("allSocial: ", socialItem);

  useEffect(() => {
    fetch(`http://localhost:3000/api/social/getAllUsers`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const tempSocialItem = data.map((item) => ({
          username: item.username,
          followedUsers: item.followedUsers.length,
          followers: item.followers.length,
          feed: item.feed,
          id: item._id,
        }));
        setSocialItem(tempSocialItem);
      })
      .catch((err) => {
        console.log("error in social: ", err);
      });
  }, []);

  return (
    <div className="social-outer-container">
      <Navbar />
      <div className="userContainer">
        <h1>Global Users</h1>
        {
          socialItem &&
            socialItem.map((item) => (
              <div className="users">
                <div className='user-details'>
                  <div key={item.id}>
                    {item.username.charAt(0).toUpperCase() + item.username.slice(1) }
                    <div>Followed Users: {item.followedUsers}</div>
                    <div>Followers: {item.followers}</div>
                  </div>
                  <div className="follow-btn-container">
                    <a>Follow</a>
                  </div>
                </div>
              </div>
              ))
          }
    </div>
    </div>
  );
};

export default Social;
