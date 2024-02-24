import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

//file imports
import { useLoginMutation } from '../slices/api/userApiSlice';
import { setCredentials } from '../slices/reducers/authSlice';

import React, { Component } from 'react';
// import { Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';

const Feed = () => {
  //This is where our times requests from front end will be.

<<<<<<< HEAD
  return(
=======
//This is where our times requests from front end will be.


    return( 
        <div>
            Sup fooo
        </div>
    );
    }
>>>>>>> development
    
  );
};

export default Feed;
