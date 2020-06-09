import React from "react";
import Comment from "../components/Todo/ContactForm";

class Performance extends React.Component {

  render() {
    
    return (
      <div className='main-wrapper'>
        <div className='main'>
          <div className='copy-container'>
            <h1>Performance.</h1>
            <h2>From your teacher!</h2>
          </div>
         
          <div className='contact-container'>
            <h3>Comment</h3>
            <Comment />
          </div>
        </div>
      </div>
    );
  }
}


export default Performance;
