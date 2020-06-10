import React from "react";

function Posts(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="posts">
      {/* <h1>{props.title}</h1> */}
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Posts;
