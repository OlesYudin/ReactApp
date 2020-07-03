import React from 'react';
import classes from './post.module.css';


const Post = (props) => {
    return (
        <div className={classes.post_item}>
          <img src="https://pickaface.net/gallery/avatar/vytux5796003c041c6.png" alt="Avatar"/>
          {props.massage}
        </div>
    );
}

export default Post;