import React from 'react'
import Feed from "./Feed"
import {Link, useNavigate} from "react-router-dom"
import { logout } from '../slices/reducers/authSlice';
import { useDispatch } from 'react-redux';

export const Navbar = ({userData}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout());
        navigate('/');
        console.log('click');
      };

  
    return (


<nav className="nav-container"> 
  <div className="sidenav">
    <div className="upper-nav-menu">
      <p className='menu-text'>MENU</p>
      <Link to={`/feed`} className="nav-item" aria-current="page">
        <span>
          <svg className='nav-icon article-icon' xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-width="2" d="M16 7h3v4h-3V7Zm-7 8h11M9 11h4M9 7h4M6 18.5a2.5 2.5 0 1 1-5 0V7h5.025M6 18.5V3h17v15.5a2.5 2.5 0 0 1-2.5 2.5h-17"/>
          </svg>
        </span>Feed</Link>
      <Link to={`/archive`} className='nav-item' aria-current='page'>
        <span>
        <svg className='nav-icon' xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
          <path fill="currentColor" d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-1.017 1.742c.011.084.017.17.017.258v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9c0-.087.006-.174.017-.258A2 2 0 0 1 2 7V5zm18 2V5H4v2h16zM5 9v10h14V9H5zm3 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1z"/>
        </svg>
        </span>Archive</Link>
        <Link to={`/social`} className="nav-item" aria-current="page">
        <span>
        <svg className='nav-icon' xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 15 15">
          <path fill="currentColor" fill-rule="evenodd" d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0ZM7.5 1.827a5.673 5.673 0 0 0-4.193 9.494A4.971 4.971 0 0 1 7.5 9.025a4.97 4.97 0 0 1 4.193 2.296A5.673 5.673 0 0 0 7.5 1.827Zm3.482 10.152A4.023 4.023 0 0 0 7.5 9.975a4.023 4.023 0 0 0-3.482 2.004A5.648 5.648 0 0 0 7.5 13.173c1.312 0 2.52-.446 3.482-1.194ZM5.15 6.505a2.35 2.35 0 1 1 4.7 0a2.35 2.35 0 0 1-4.7 0Zm2.35-1.4a1.4 1.4 0 1 0 0 2.8a1.4 1.4 0 0 0 0-2.8Z" clip-rule="evenodd"/>
        </svg> 
        </span>Social</Link>  
    </div>
    <div className="lower-nav-menu">
      <button onClick={logoutHandler} className="logout-btn" aria-current="page">LOGOUT</button> 
    </div>
  </div>
</nav>
)}

export default Navbar;

