import React from 'react';
import Header from './components/header';
import Navbar from './components/navbar';
import Profile from './components/profile';

const ReactApp = () => {
    return (
      <div className="app-wrapper"> 
        <Header />
        <Navbar />
        <Profile />
      </div>
    );
}

export default ReactApp;