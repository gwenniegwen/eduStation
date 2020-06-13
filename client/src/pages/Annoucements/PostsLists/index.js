import React, { useEffect } from "react";
import { ListItem, List } from "../List";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../../utils/GlobalState";
import { UPDATE_POSTS} from "../../../utils/actions";
import API from "../../../utils/API";

function PostsList() {
  const [state, dispatch] = useStoreContext();

  // const removePosts = id => {
  //   API.deletePosts(id)
  //     .then(() => {
  //       dispatch({
  //         type: REMOVE_POST,
  //         _id: id
  //       });
  //     })
  //     .catch(err => console.log(err));
  // };

  const getPosts = () => {
    
    API.getPosts()
      .then(results => {
        dispatch({
          type: UPDATE_POSTS,
          posts: results.data
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>All Annoucements</h1>
      <h3 >Click on an annoucement to view</h3>
      {state.posts.length ? (
        <List>
          {state.posts.map(posts => (
            <ListItem key={posts._id}>
              <Link to={"/posts/" + posts._id}>
                <strong>
                  {posts._id}
                </strong>
              </Link>
              
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any posts yet!</h3>
      )}
      <div >
        <Link to="detail">View annoucements</Link>
      </div>
    </div>
  );
}

export default PostsList;
