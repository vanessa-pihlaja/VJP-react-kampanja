import { root } from 'postcss';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
if (document.getElementById('root')) {
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); } else {ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('start')
)
};


