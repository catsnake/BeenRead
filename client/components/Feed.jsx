import {
  Link,
  useNavigate,
  useLocation,
  Route,
  Routes,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
//file imports
import { useLoginMutation } from '../slices/api/userApiSlice';
import { setCredentials } from '../slices/reducers/authSlice';
import { logout } from '../slices/reducers/authSlice';
import React, { Component } from 'react';
// import { Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import { useSaveArticleMutation } from '../slices/api/articleSlice';
import { useCheckIsReadMutation } from '../slices/api/articleSlice';
import { Navbar } from './Navbar';
import ArticleHistory from './ArticleHistory';

const Feed = () => {
  //This is where our times requests from front end will be.
  //handle click event that does does fetch request
  //should we employ use effect and use state?
  const [myFeed, setMyFeed] = useState(
    'Click the "Gimme Dat" button for a new article'
  );
  const [disValue, setdisValue] = useState(false);
  const [clickValue, setclickValue] = useState('GIMME DAT');
  const [articleId, setArticleId] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth);
  // console.log(userData.userData._id)

  const [savedArticle] = useSaveArticleMutation();
  const [checkIsRead] = useCheckIsReadMutation();

  const feedArticle = async () => {
    setMyFeed(
      'The Pink Fairy Armadillo is grabbing your article now! Pwease be patient uwu'
    );
    try {
      const res = await savedArticle({
        userId: userData.userData._id,
      }).unwrap();
      setArticleId(res._id);
      console.log(res._id);
      setMyFeed(res.content);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    feedArticle();

    setdisValue(true);
    setclickValue('disabled');
    console.log('button clicked');
    setTimeout(() => {
      console.log('done waiting!');
      setdisValue(false);
      setclickValue('GIMME DAT');
      setMyFeed('Click the "Gimme Dat" button for a new article');
    }, 20000);
  };

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
    console.log('click');
  };

  const readClickHandler = () => {
    checkIsRead({ articleId });
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto md:my-6">
      <div>
        <Navbar userData={userData} />
      </div>
      <div id="feedbox">{myFeed}</div>
      {disValue && <button onClick={readClickHandler}>Read</button>}
      <button
        id="gimme"
        disabled={disValue}
        onClick={handleClick}
        className="button"
      >
        {clickValue}{' '}
      </button>
    </div>
  );
};

export default Feed;
