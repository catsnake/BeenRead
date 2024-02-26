import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
//file imports
import { useLoginMutation } from "../slices/api/userApiSlice";
import { setCredentials } from "../slices/reducers/authSlice";
import { logout } from "../slices/reducers/authSlice";
import React, { Component } from "react";
// import { Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import {useSaveArticleMutation} from '../slices/api/articleSlice';

const Feed = () => {
  //This is where our times requests from front end will be.
  //handle click event that does does fetch request
  //should we employ use effect and use state?
  const [myFeed, setMyFeed] = useState("Article");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth);
  // console.log(userData.userData._id)

  const [savedArticle] = useSaveArticleMutation();

  const feedArticle = async () => {
    setMyFeed('')
    try {
      const res = await savedArticle({userId: userData.userData._id}).unwrap()
      // console.log(res)
      setMyFeed(res.content)
    } catch (error) {
      console.log(error)
    }
  }

  // const handleClick = () => {
  //   fetch("http://localhost:3000/savedArticle")
  //     .then((data) => data.json())
  //     .then((data) => {
  //       setMyFeed(data);
  //       console.log(data);
  //     });
  // };
  const logoutHandler = () => {
    dispatch(logout());
    navigate('/')
    console.log("click");
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto md:my-6">
      <div>{myFeed}</div>
      <button
        // onclick={handleClick}
        onClick={feedArticle}
        className="text-white bg-blue-700 hover:bg-blue-800"
      >
        Get Random Article
      </button>

      <button onClick={() => navigate(`/articleHistory/${userData.userData._id}`)}>Go to Article History</button>

      <button onClick={logoutHandler}>logout</button>
    </div>
  );
};

export default Feed;
