import React from 'react';
import classes from './myPosts.module.css';
import Post from './post/post';


const MyPosts = () => {
    return (
        <div>
          my posts
          <div>
                NEW POST
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add new post</button>
          </div>
          <div className={classes.post}>
            <Post massage="Hello, World!"/>
            <Post massage="Ar u crazy??"/>
          </div>
        </div>
    );
}

export default MyPosts;