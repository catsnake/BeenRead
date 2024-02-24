import React, { Component } from 'react';
import { Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';

import Authenticator from './components/Authenticator.jsx';
import Feed from './components/Feed.jsx';



const App = () => {
  return (
    <div>
      <Authenticator />
    </div>
  );
};

export default App;
