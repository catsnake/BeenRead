import React from 'react';
import { Router, Route, Routes, Link, BrowserRouter, Outlet } from 'react-router-dom';

import Authenticator from './components/Authenticator.jsx';
import Feed from './components/Feed.jsx';

//import styles from './styles.scss';

const App = () => {

  return (
    <div>
        <div><h1 id= 'title'>
        BeRead
    </h1>
    <h5 id= 'subtitle'>
        Expand Your Mind
    </h5>
    </div>
     <div className="mt-a6 p-8 mx-auto">
        <Outlet />
     </div>
    </div>
  );
};

export default App;
