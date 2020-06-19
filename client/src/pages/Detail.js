import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import Jumbotron from "../components/Jumbotron";
import DetailPost from "../components/DetailPost"
import API from "../utils/API";
import "../index.css";

function Detail(props) {
  const [content, setContent] = useState({})
  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const {id} = useParams()
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
  }, [])
  function handleFormSubmit(e){
    e.preventDefault();
  }

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
              <p className="content-text">
                {content.content}
              </p>
          </div>
        </div>
        <DetailPost />
        <DetailPost />
        <Row>
          <Col size="md-2">
            <Link className="return-to-announcements" to={"/"+props.where}>← Back to {props.where}</Link>
          </Col>
        </Row>
        <Row>
          <Col size="2">
          <form className="commentForm">
              <Input
                name="username"
                placeholder="Name"
                />
              <TextArea
                name="content"
                placeholder="Write what you think!"
                />
              <FormBtn comment
                onClick={handleFormSubmit}
                >
                Comment
              </FormBtn>
            </form>
          </Col>
        </Row>
                </div>
                </div>
  
    );
  }


export default Detail;
