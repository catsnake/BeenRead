import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SocialItem from './SocialItem';
import Navbar from './Navbar';

const Social = () => {
  const [socialItem, setSocialItem] = useState([]);
  const userData = useSelector((state) => state.auth);
  console.log('allSocial: ', socialItem);

  const username = userData.userData.username;

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
        console.log('error in social: ', err);
      });
  }, []);

  return (
    <div className="archive-container">
      <div className="archive-nav-container">
        <Navbar />
      </div>
      <div className="userContainer">
        <h1>Global Users</h1>
        {socialItem &&
          socialItem.map((item) => {
            if (username !== item.username) {
              return <SocialItem item={item} key={item._id}></SocialItem>;
            }
          })}
      </div>
    </div>
  );
};
export default Social;
