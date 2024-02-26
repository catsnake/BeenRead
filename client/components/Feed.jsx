import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

//file imports
import { useLoginMutation } from "../slices/api/userApiSlice";
import { setCredentials } from "../slices/reducers/authSlice";

import React, { Component } from "react";
// import { Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';





const Feed = () => {
  //This is where our times requests from front end will be.
  //handle click event that does does fetch request
//should we employ use effect and use state? 
  const [myFeed, setMyFeed] = useState('Article');
  

  const handleClick = () => {
    fetch('http://localhost:3000/')
      .then((data)=> data.json())
      .then((data) => {
        setMyFeed(data);
        console.log(data);
  })
}


  return ( <div className="flex flex-col items-center justify-center mx-auto md:my-6">
    <div>{myFeed}</div>
    <button id= "article" onclick={handleClick} className="text-white bg-black hover:bg-blue-800">Get Random Article</button>
  </div>)
};

export default Feed;
