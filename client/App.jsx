import React from 'react';
import {
  // Router,
  // Route,
  // Routes,
  // Link,
  // BrowserRouter,
  Outlet,
} from 'react-router-dom';

function App() {
  const loginBgImgUrl = '';
  const authenticatedBgImgUrl = '';

  return (
    <div className="">
      <div className="subtitle-container">
        <h5
          id="subtitle"
          className=""
        >
          WellRead.
        </h5>
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
