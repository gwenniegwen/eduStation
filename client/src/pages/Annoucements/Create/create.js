import React, { useRef } from "react";
import { useStoreContext } from "../../../utils/GlobalState";
import { ADD_POST } from "../../../utils/actions";
import API from "../../../utils/API";

function Create() {
 
  const contentRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch({ type: LOADING });
    API.savePosts({
      posts: contentRef.current.value,
      
    })
      .then(result => {
        dispatch({
          type: ADD_POST,
          post: result.data
        });
        console.log(state)
      })
      .catch(err => console.log(err));

    contentRef.current.value = "";
 
  };

  return (
    
      <div>
        <form className="createForm" >
          <textarea required ref = {contentRef}
            placeholder="Write A Post..."
            
          />
          <button className="myButton" disabled={state.loading} onSubmit={handleSubmit} >
            Add Post
          </button>
        </form>
      </div>
    );
  
}

export default Create;
