import React, {useRef, useState} from "react";
import openSocket from 'socket.io-client';

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
        setState([...state, {id:Math.floor(Math.random()*1000), author:msg.author, body:msg.body}]);
        bodyRef.current.value ="";
        authorRef.current.value ="";
        socket.emit('notification', "posted");
      });

    const bodyRef = useRef();
    const authorRef = useRef();
    const [state, setState] = useState([]);
    const handleSubmit = e =>{
        e.preventDefault();
        socket.emit('example_message', {body:bodyRef.current.value, author:authorRef.current.value});
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
        {state.map(data => (
            <Hello key={data.id} author={data.author} body={data.body}/>
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