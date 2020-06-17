import React, {useRef, useState, useEffect} from "react";
import openSocket from 'socket.io-client';
import API from "../utils/API";

let listenTo = "";
if (process.env.NODE_ENV === "production") {
  listenTo = window.location.hostname;
}
else{
  listenTo = "http://localhost:3001/";
}

const socket = openSocket(listenTo);

function Forum(){
    socket.on('example_message', function(msg){
        setState([...state, {_id:Math.floor(Math.random()*1000), title:msg.title, content:msg.content}]);
        bodyRef.current.value ="";
        authorRef.current.value ="";
        socket.emit('notification', "posted");
      });

    const bodyRef = useRef();
    const authorRef = useRef();

    const [state, setState] = useState([]);
    const handleSubmit = e =>{
        e.preventDefault();
        socket.emit('example_message', {content:bodyRef.current.value, title:authorRef.current.value});
    }

    const handleTest = e =>{
      e.preventDefault();
      API.saveAnnouncement({
        title: "test",
        content: "test",
      }).then(result => {
        socket.emit('notification', 'post test');
      })
    }

    const handleGetTest = e =>{
      e.preventDefault();
      API.getAnnouncements()
      .then(result =>{
        setState([...state,...result.data]);
      });
    }

    return (
        <div>
        <h1>Create a blog post</h1>
        <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
          <textarea className="form-control mb-5" required ref={bodyRef} placeholder="Body" />
          <input className="form-control mb-5" ref={authorRef} placeholder="Screen name" />
          <button className="btn btn-success mt-3 mb-5" type="submit">
            Save Post
          </button>
        </form>
        <button className="btn btn-success mt-3 mb-5" onClick={handleTest}>
            Testing
          </button>
          <button className="btn btn-success mt-3 mb-5" onClick={handleGetTest}>
            Testing
          </button>
        {state.map(data => (
            <Hello key={data._id} author={data.title} body={data.content}/>
        ))}
      </div>
    )
}

function Hello(props){
    return(
    <div style={{color:"black"}}>
        <p>{props.author}</p>
        <p>{props.body}</p>
    </div>
        );
}

export default Forum