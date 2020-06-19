import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router'
import DetailPost from "../components/DetailPost"
import CommentForm from "../components/Forms/CommentForm"
import API from "../utils/API";
import "../index.css";

function Detail(props) {
  const [content, setContent] = useState({});
  const [comments, setComments]=useState([]);

  // When this component mounts, grab the post with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const {id} = useParams();
  const nameRef = useRef();
  const commentRef = useRef();

  useEffect(() => {
    if(props.where === "announcements") {
      API.getAnnouncement(id)
      .then(res => setContent(res.data))
      .catch(err => console.log(err));
    }else if (props.where === "calendar"){
      API.getCalendar(id)
      .then(res => setContent(res.data))
      .catch(err => console.log(err));
    };
    loadComments();
  }, []);

  function loadComments(){
    API.getComments(id)
    .then(res => setComments(res.data))
    .catch(err=>console.log(err));
  }

  function handleFormSubmit(e){
    e.preventDefault();
    API.saveComment({
      user: nameRef.current.value,
      content: commentRef.current.value,
      postID: id
    }).then(res => {
      loadComments();
      nameRef.current.value="";
      commentRef.current.value="";
    });
  }

  const { push } = useHistory()

  return (
    <div className="detail-container">
        <div className="container detail-info">
        <div className="row justify-content-md-center">
        <div className="col-md-4 col-md-offset-4">
              <h1 className="content-title">
                {content.title} 
              </h1>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="column content-details">
              {props.where==="announcements" ? (
                <p className="content-text">{content.content}</p>
              ):(<div></div>)}
          </div>
        </div>
        {comments.map(data=>(
          <DetailPost key={data._id} user={data.user} content={data.content} date={data.date}/>
        ))}
        <CommentForm handleFormSubmit={handleFormSubmit} nameRef={nameRef} commentRef={commentRef}/>
        <div className="row">
          <div className="column" size="md-2">
            <button className="return-to-announcements btn btn-outline-light" type="button"
            onClick={() => push("/" + props.where)}> ← Back to {props.where}
            </button>
          </div>
        </div>
        </div>
        </div>
  
    );
  }


export default Detail;
