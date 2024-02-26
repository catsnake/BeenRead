import React from 'react';
import { Router, Route, Routes, Link, BrowserRouter, Outlet } from 'react-router-dom';

import Authenticator from './components/Authenticator.jsx';
import Feed from './components/Feed.jsx';


const App = () => {

  return (
    <div >
        <div>
    <h5 id= 'subtitle' className="flex flex-col items-center justify-center mx-auto md:my-6 text-black font-size-68px  ">
        BeRead
    </h5>
    </div>
     <div className="mt-a6 p-8 mx-auto">
        <Outlet />
     </div>
    </div>
  );
};

export default App;
