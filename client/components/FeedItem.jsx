import React from 'react';

function FeedItem() {
  return (
    <div className="feed-item-container">
      <div className="feed-item-header">
        <div className="user-info">
          <p>icon</p>
          <p>fname lname</p>
        </div>
        <div className="feed-item-timestamp">
          <p>7:30pm</p>
        </div>
      </div>
      <div className="feed-item-content">
        <div className="did-user-read-container">
          <p>did user read</p>
        </div>
        <div className="streak-container">
          <p>user streak</p>
        </div>
      </div>
      <div className="reactions-container">
        <p>reactions</p>
      </div>
    </div>
  );
}

export default FeedItem;
