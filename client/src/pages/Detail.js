import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import "../index.css";

function Detail(props) {
  const [content, setContent] = useState({});
  const [comments, setComments]=useState([]);
  const [formObject, setFormObject] = useState({});

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const {id} = useParams();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

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
    console.log(comments);
  }

  function handleFormSubmit(e){
    e.preventDefault();
    console.log(comments);
    API.saveComment({
      user: formObject.user,
      content: formObject.content,
      postID: id
    }).then(res => console.log(res));
  }

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {content.title} 
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Content</h1>
              <p>
                {content.content}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to={"/"+props.where}>← Back to {props.where}</Link>
          </Col>
        </Row>
        <Row>
          <Col size="2">
          <form className="commentForm">
              <Input
                onChange={handleInputChange}
                name="user"
                placeholder="Name"
              />
              <TextArea
                onChange={handleInputChange}
                name="content"
                placeholder="Write what you think!"
              />
              <FormBtn comment="true"
                onClick={handleFormSubmit}
              >
                Comment
              </FormBtn>
            </form>
          </Col>
          <Col size="8">
            {comments.map(data=>(
              <Hello key={data._id} user={data.user} content={data.content} date={data.date}></Hello>
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
  function Hello(props){
    return(
    <div style={{color:"black"}}>
        <p>{props.user}</p>
        <p>{props.content}</p>
        <p>{props.date}</p>
    </div>
        );
}


export default Detail;
