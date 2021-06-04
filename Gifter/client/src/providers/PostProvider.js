import React, { useState, useContext } from "react";
import {UserProfileContext} from "./UserProfileProvider"

export const PostContext = React.createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [searchTerms, setSearch] = useState("")
  const { getToken } = useContext(UserProfileContext);


  const getAllPosts = () => {
    return getToken().then((token) =>
    fetch("/api/post", {
      headers: {
      Authorization: `Bearer ${token}`
    }})
      .then((res) => res.json())
      .then(setPosts));
  };

  const getAllPostsWithComments = () => {
    return getToken().then((token) =>
    fetch("/api/post/GetWithComments", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then(setPosts));
  };

  const addPost = (post) => {
    return getToken().then((token) =>
    fetch("/api/post", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }));
  };

  const searchPost = () => {
    return getToken().then((token) =>
    fetch(`/api/post/search?q=${searchTerms}&sortDesc=false`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => res.json())
    .then(setPosts));
  }

  return (
    <PostContext.Provider value={{ posts, getAllPosts, getAllPostsWithComments, addPost, searchPost, searchTerms, setSearch }}>
      {props.children}
    </PostContext.Provider>
  );
};
