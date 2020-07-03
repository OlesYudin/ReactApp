import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import './styles/normalize.css';

import ReactApp from './reactApp';

import Header from './components/header';
import Navbar from './components/navbar';
import Profile from './components/profile';


ReactDOM.render(
  <ReactApp />,
  document.getElementById("root")
)