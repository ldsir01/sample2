import React, { useEffect } from "react";
import Post from "./Post/Post";
import useStyles from "./styles.js";
import { useDispatch, useSelector } from "react-redux";

const Posts = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div>
      <h1>POSTS</h1>
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
