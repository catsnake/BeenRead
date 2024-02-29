import React, { useState, useEffect } from 'react';

function AuthenticatedFeedItem(
  { 
    displayName, 
    email
  }) {
  const [isOpen, setIsOpen] = useState(false);
  const [userFeedData, setUserFeedData] = useState({});

  useEffect(() => {
    console.log('use effect hit');
    const getUserFeedData = () => {
      fetch(`http://localhost:3000/api/user/${displayName}`)
        .then(response => response.json())
        .then(data => {
          setUserFeedData(data);
        })
    };
    getUserFeedData();
  }, []);

  console.log('logging user feed data: ', userFeedData);

  const handleReactionBtnClick = () => {
    console.log('handle btn click hit', isOpen);
    setIsOpen(true);
  };

  return (
    <>
      <div className="authenticated-feed-item-container">
        <div className="feed-item-header">
          <div className="user-info">
            <p className='authenticated-user-header'>Welcome back, <span style={{fontWeight: 400}}>{displayName}</span>. <span className='feed-item-email-text'>{email}</span></p>
          </div>
          <div className="feed-item-timestamp">
            {
              userFeedData.hasReadArticle && (
                <p>Read at {userFeedData.timeFinishedReading}.</p>
              )
            }
          </div>
        </div>
        <div className="feed-item-content">
          <div className="did-user-read-container">
            {/* <p>haven't read</p> */}
            {/* {
              !userFeedData.hasReadArticle 
              ? <p>You haven't read today's article.</p>
              : <p>You read today's article!</p>
            } */}
            {userFeedData.readDailyArticle ? (
              <p>
                {displayName.charAt(0).toUpperCase() + displayName.slice(1)}{' '}
                read the daily article in {userFeedData.timeSpentReading} minutes!
              </p>
            ) : (
              <p>
                {displayName.charAt(0).toUpperCase() + displayName.slice(1)}{' '}
                hasn't read the daily article yet.
              </p>
            )}
          </div>
          <div className="streak-container">
            {/* <p>user streak</p> */}
            <p>Daily streak: {userFeedData.dailyStreak}{userFeedData.dailyStreak > 0 && ' 🔥'}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthenticatedFeedItem;
