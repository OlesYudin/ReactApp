import React from 'react';
import classes from '../content.module.css';
import classes1 from './profile.module.css';
import MyPosts from './myPosts/myPosts';

const Profile = () => {
    return (
        <div className={classes.content}>
          <div className={classes1.content_img}>
            <img src="https://m.1obl.ru/upload/resize_cache/iblock/21a/827_465_2/21a8fa0e096a917ec5ab2c097a9345a6.jpg"/>
          </div>
          <div className={classes1.avatar_name}>
            <div className={classes1.avatar}>
              <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yNTUuOTk5LDBjLTc0LjQ0MywwLTEzNSw2MC41NTctMTM1LDEzNXM2MC41NTcsMTM1LDEzNSwxMzVzMTM1LTYwLjU1NywxMzUtMTM1UzMzMC40NDIsMCwyNTUuOTk5LDB6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00NzguNDgsMzk4LjY4QzQzOC4xMjQsMzM4LjEzOCwzNzAuNTc5LDMwMiwyOTcuODM1LDMwMmgtODMuNjcyYy03Mi43NDQsMC0xNDAuMjg4LDM2LjEzOC0xODAuNjQ0LDk2LjY4bC0yLjUyLDMuNzc5VjUxMg0KCQkJaDQ1MGgwLjAwMVY0MDIuNDU5TDQ3OC40OCwzOTguNjh6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
            </div>
            <h3>Name</h3>
          </div>
          <MyPosts />
        </div>
    );
}
export default Profile;