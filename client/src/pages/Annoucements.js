import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import "../index.css"

function Annoucements() {
  // Setting our component's initial state
  const [annoucements, setAnnoucements] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all annoucements and store them with setAnnoucements
  useEffect(() => {
    loadAnnoucements()
  }, [])

  // Loads all annoucements and sets them to annoucements
  function loadAnnoucements() {
    API.getAnnoucements()
      .then(res => 
        setAnnoucements(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes an annoucement from the database with a given id, then reloads annoucements from the db
  function deleteAnnoucement(id) {
    API.deleteAnnoucement(id)
      .then(res => loadAnnoucements())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveAnnoucement method to save the annoucement data
  // Then reload annoucements from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.content) {
      API.saveAnnoucement({
        title: formObject.title,
        content: formObject.content,
        date: formObject.date
      })
        .then(res => loadAnnoucements())
        .catch(err => console.log(err));
    }

    
  };

    return (
        <div className="annoucementPage">
      <Container >
        <Row >
          <Col size="md-6">
            <Jumbotron>
              <h1 className="annoucementH1">Annoucements Page</h1>
              <h3 className="annoucementh3">Interact with other students and teachers</h3>
            </Jumbotron>
            <form className="annoucementForm">
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="Content"
                placeholder="Write Your Annoucement... (required)"
              />
              <Input
               name="date"
              placeholder={new Date ()}
              />
              <FormBtn
                disabled={!(formObject.content && formObject.title)}
                onClick={handleFormSubmit}
              >
                Add Annoucement
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Click Annoucement To View Details</h1>
            </Jumbotron>
            {annoucements.length ? (
              <List>
                {annoucements.map(annoucement => (
                  <ListItem key={annoucement._id}>
                    <Link to={"/annoucement/" + annoucement._id}>
                      <strong>
                        {annoucement.title} 
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteAnnoucement(annoucement._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
        </div>
    );
  }


export default Annoucements;
