import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './slices/store.js';
import "./main.css";

// import styles from './styles.scss';

//import browser router elements
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';


//import pages/components.
import App from './App.jsx';
import Feed from './components/Feed.jsx';
import Authenticator from './components/Authenticator.jsx';
import Signup from './components/SignUp.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true}  path="/signin" className='bg-pink-200' element={<Authenticator />} />
      <Route path="/signup" element={<Signup />} />
      <Route index={true}  path="/" element={<Feed />} />
    </Route>
  )
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
