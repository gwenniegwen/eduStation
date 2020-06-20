import React, { useState, useEffect, useContext} from "react";
import AuthContext from '../context/auth/authContext';
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import openSocket from 'socket.io-client';
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import "../index.css"

let listenTo = "";
if (process.env.NODE_ENV === "production") {
  listenTo = window.location.hostname;
}
else{
  listenTo = "http://localhost:3001/";
}

const socket = openSocket(listenTo);


function Announcements() {

  //authorize user for each page//
const authContext = useContext(AuthContext);
useEffect(()=> {
  authContext.loadUser();
//eslint-disable-next-line
}, []);

  // Setting our component's initial state
  const [announcements, setAnnouncements] = useState([])
  const [formObject, setFormObject] = useState({})

  socket.on('reload', function(msg){
    loadAnnouncements();
  });

  // Load all announcements and store them with setAnnouncements
  useEffect(() => {
    loadAnnouncements();
    socket.emit('join', 'announcements');
  }, [])

  // Loads all announcements and sets them to announcements
  function loadAnnouncements() {
    API.getAnnouncements()
      .then(res => setAnnouncements(res.data))
      .catch(err => console.log(err));
  };

  // Deletes an announcement from the database with a given id, then reloads announcements from the db
  function deleteAnnouncement(id) {
    API.deleteAnnouncement(id)
      .then(res => {loadAnnouncements();socket.emit('reload','announcements');})
      .catch(err => console.log(err));
    API.deleteAllComments(id)
    .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  // When the form is submitted, use the API.saveAnnouncement method to save the announcement data
  // Then reload announcements from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.content) {
      API.saveAnnouncement({
        title: formObject.title,
        content: formObject.content,
        date: formObject.date
      })
        .then(res => {
          loadAnnouncements();
          socket.emit('reload','announcements');
        })
        .catch(err => console.log(err));
    }


  };
 
  return (
    <div className="announcementPage">
      
      <Container >
        <Row >
          <Col size="md-6">
            <Jumbotron>
              <h1 className="announcementH1">Announcements Page</h1>
              <h3 className="announcementh3">Interact with other students and teachers</h3>
            </Jumbotron>
            <form className="announcementForm">
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="content"
                placeholder="Write Your Announcement... (required)"
              />
              <Input
              disabled
                name="date"
                placeholder={new Date()}
              />
              <FormBtn
                disabled={!(formObject.content && formObject.title)}
                onClick={handleFormSubmit}
              >
                Add Announcement
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Click Announcement To View Details</h1>
            </Jumbotron>
            {announcements.length > 0 ? (
              <List>
                {announcements.map(announcement => (
                  <ListItem key={announcement._id}>
                    <Link to={"/announcements/" + announcement._id}>
                      <strong>
                        {announcement.title}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteAnnouncement(announcement._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>Write The First Announcement</h3>
              )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default Announcements;
