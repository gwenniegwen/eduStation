import React, { useState } from "react";



function Create(props) {
  const [posts, setPosts] = useState({
    // title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setPosts(prevPosts => {
      return {
        ...prevPosts,
        [name]: value
      };
    });
  }

  function submitPosts(event) {
    props.onAdd(posts);
    setPosts({
      // title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        {/* <input
          name="title"
          onChange={handleChange}
          value={posts.title}
          placeholder="Title"
        /> */}
        <textarea
          name="content"
          onChange={handleChange}
          value={posts.content}
          placeholder="Write A Post..."
          rows="3"
        />
        <button onClick={submitPosts}>Add</button>
      </form>
    </div>
  );
}

export default Create;
