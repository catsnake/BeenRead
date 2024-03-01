import React, { useState, useEffect } from 'react';
import {
  // Router,
  // Route,
  // Routes,
  Link,
  // BrowserRouter,
  Outlet,
} from 'react-router-dom';

import Social from './components/Social.jsx';

function App() {
  return (
    <div>
      <div className="subtitle-container">
        <h5 id="subtitle" className="">
          <Link to="/feed">WellRead.</Link>
        </h5>
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
