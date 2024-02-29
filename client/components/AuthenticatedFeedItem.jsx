import React, { useState, useEffect } from 'react';

function AuthenticatedFeedItem(
  { 
    displayName, 
    email
  }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log('use effect hit');
    fetch(`http://localhost:3000/api/user/${displayName}`)
      .then(response => {
        console.log('response: ', response);
        response.json();
      })
      .then(data => {
        console.log('data in auth feed item: ', data);
      })
  }, []);

  const handleReactionBtnClick = () => {
    console.log('handle btn click hit', isOpen);
    setIsOpen(true);
  };

  return (
    <>
      <div className="authenticated-feed-item-container">
        <div className="feed-item-header">
          <div className="user-info">
            <p className='authenticated-user-header'><span style={{fontWeight: 400}}>{displayName}</span> <span className='feed-item-email-text'>{email}</span></p>
          </div>
          <div className="feed-item-timestamp">
            {/* <p>7:30pm</p> */}
          </div>
        </div>
        <div className="feed-item-content">
          <div className="did-user-read-container">
            <p>haven't read</p>
          </div>
          <div className="streak-container">
            <p>user streak</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthenticatedFeedItem;
