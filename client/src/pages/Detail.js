import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "./Annoucements/Jumbotron";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_POST } from "../utils/actions";

const Detail = props => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getPost(props.match.params.id)
      .then(res => dispatch({ type: SET_CURRENT_POST, posts: res.data }))
      .catch(err => console.log(err));
  }, []);

 

  return (
    <>{state.currentPost ? (
      <div>
            <Jumbotron>
              <h1>
                {state.currentPosts.content}
              </h1>
            </Jumbotron>
         
            <Link to="/home">← Back to Posts</Link>
            </div>
    ) : (
      null
    )}</>
  );
};

export default Detail;
