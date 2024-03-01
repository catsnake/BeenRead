import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const SocialItem = ({ item }) => {
  const [followed, setFollowed] = useState('Follow');
  const userData = useSelector((state) => state.auth);

  const username = userData.userData.username;

  const handleFollow = () => {
    if (followed === 'Follow') {
      fetch(`http://localhost:3000/api/social/followUser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          followUsername: item.username,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          setFollowed('Unfollow');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
    if (followed === 'Unfollow') {
      fetch(`http://localhost:3000/api/social/unfollowUser`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          followUsername: item.username,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          setFollowed('Follow');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3000/api/social/getFollowedUsers/${username}`)
      .then((response) => response.json())
      .then((data) => {
        data.includes(item.username)
          ? setFollowed('Unfollow')
          : setFollowed('Follow');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="users">
      <div className="user-details">
        <div key={item.id}>
          {item.username.charAt(0).toUpperCase() + item.username.slice(1)}
          <div>Followed Users: {item.followedUsers}</div>
          <div>Followers: {item.followers}</div>
        </div>
        <div className="follow-btn-container">
          <a>
            <button onClick={handleFollow}>{followed}</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default SocialItem;
