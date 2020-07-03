import React from 'react';
import classes from '../styles/navbar/navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
          <div className={classes.nav_item}>
            <a href="#">Home</a>
          </div>
          <div className={classes.nav_item}>
            <a href="#">Profile</a>
          </div>
          <div className={classes.nav_item}>
            <a href="#">About</a>
          </div>
          <div className={classes.nav_item}>
            <a href="#">Massages</a>
          </div>
          <div className={classes.nav_item}>
            <a href="#">News</a>
          </div>
          <div className={classes.nav_item}>
            <a href="#">Contacts</a>
          </div>
        </nav>
    );
}
export default Navbar;