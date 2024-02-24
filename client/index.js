import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

// uncomment so that webpack can bundle styles
import styles from './styles.scss';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById('root')
);
