import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";
import { useHistory } from 'react-router-dom';


const PostForm = () => {
  const { addPost } = useContext(PostContext)
  
  // Define the inital state of a new post
  const [postState, setPost] = useState(
    {
      "id": 0,
      "title": "",
      "imageUrl": "",
      "caption": "",
      "dateCreated": "2021-06-01T15:22:02.404Z",
      "userProfileId": 1,
      // "userProfile": {
      //   "id": 0,
      //   "name": "",
      //   "email": "",
      //   "imageUrl": "",
      //   "bio": "", 
      //   "dateCreated": "2021-06-01T15:22:02.404Z"
      // },
      "comments": null
      // "comments": [
      //   {
      //     "id": 0,
      //     "message": "",
      //     "userProfileId": 0,
      //     "userProfile": {
      //       "id": 0,
      //       "name": "",
      //       "email": "",
      //       "imageUrl": "",
      //       "bio": "",
      //       "dateCreated": "2021-06-01T15:22:02.404Z"
      //     },
      //     "postId": 0,
      //     "post": ""
      //   }
      // ]
    }
  )
  const history = useHistory();
  // useEffect(() => {
  //   getCustomers().then(getLocations)
  // }, [])

    //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (event) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newPost = { ...postState }
      /* Animal is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newPost[event.target.id] = event.target.value
      // update state
      setPost(newPost)
    }

    // Stop auto refreshing
    const handleClickSavePost = (event) => {
      event.preventDefault() //Prevents the browser from submitting the form
      const newPost = { ...postState }
      
      // const intlocationId = parseInt(animal.locationId)
      // const intcustomerId = parseInt(animal.customerId)

      // newAnimal.locationId = intlocationId
      // newAnimal.customerId = intcustomerId
      
      // if (intlocationId === 0 || intcustomerId === 0) {
      //   window.alert("Please select a location")
      // } else {
        //invoke addAnimal passing animal as an argument.
        //once complete, change the url and display the animal list
        addPost(newPost)
        //.then(() => history.push("/post"))
      }
    //}

    return (
      <form className="postForm">
          <h2 className="postForm__title">New Post</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="title">Post title:</label>
                  <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Post title" value={postState.title}/>
              </div>
          </fieldset>
          <fieldset>
          <div className="form-group">
                  <label htmlFor="imageUrl">Image Url:</label>
                  <input type="text" id="imageUrl" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Image Url" value={postState.imageUrl}/>
              </div>
          </fieldset>
          <fieldset>
          <div className="form-group">
                  <label htmlFor="caption">Post caption:</label>
                  <input type="text" id="caption" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Post caption" value={postState.caption}/>
              </div>
          </fieldset>
          <button className="btn btn-primary"
            onClick={handleClickSavePost}>
            Save Post
          </button>
      </form>
    )
  };
export default PostForm;
