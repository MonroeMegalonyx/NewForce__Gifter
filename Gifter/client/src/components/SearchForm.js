import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../providers/PostProvider";



const PostSearch = () => {
  const { searchPost, searchTerms, setSearch } = useContext(PostContext)
  
  // Define the inital state of a new search
  // const [searchTerms, setSearch] = useState("")

  const handleClickSearchPost = (event) => {
    event.preventDefault()
    // const search = { ...searchTerms }
    searchPost()
  }

  return (
    <>
    <input type="text"
    className="input--wide"
    onKeyUp={(event) => setSearch(event.target.value)}
    placeholder="Search..." />
    <button className="btn btn-primary"
    onClick={(handleClickSearchPost)}>Search</button>
    </>
  )
}
export default PostSearch;
