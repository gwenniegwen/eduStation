import React, { useState } from "react";
import Posts from "../../components/Forms/Posts";
import Create from "../../components/Forms/Create";
// import Commentbox from "../../components/Commentbox"
import "./annoucements.css"

function Annoucements() {
    const [posts, setPosts] = useState([]);
  
    function addPosts(newPosts) {
      setPosts(prevPosts => {
        return [...prevPosts, newPosts];
      });
    }
  
    function deletePosts(id) {
      setPosts(prevPosts => {
        return prevPosts.filter((postsItem, index) => {
          return index !== id;
        });
      });
    }
  
    return (
      <div>
       
        <Create onAdd={addPosts} />
        {posts.map((postItem, index) => {
          return (
            <Posts
              key={index}
              id={index}
              // title={postItem.title}
              content={postItem.content}
              onDelete={deletePosts}
            />
            
            );
           
        })}
       
      </div>
    );
  }
  
  export default Annoucements;