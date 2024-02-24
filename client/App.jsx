import React, { Component } from 'react';
import { Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';

import Authenticator from './components/Authenticator.jsx';
import Feed from './components/Feed.jsx';

import styles from './styles.scss';


const App = () => {
  return (
    <div><h1 id= 'title'>
        BeRead : Expand Your Mind
    </h1>
      <Authenticator />
    </div>
  );
};

export default App;
