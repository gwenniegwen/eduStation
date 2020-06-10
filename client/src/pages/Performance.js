import React from "react";
// import Todo from "../components/Todo/ContactForm";
import { Col, Row, Container } from "../components/Grid";
import CreatePostForm from "../components/CreatePostForm";
import PostsList from "../components/PostsList";

const Performance = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <CreatePostForm />
        </Col>
        <Col size="md-6 sm-12">
          <PostsList />
        </Col>
      </Row>
    </Container>
  );
};

export default Performance;

// class Performance extends React.Component {

//   render() {
    
//     return (
//       <div className='main-wrapper'>
//         <div className='main'>
//           <div className='copy-container'>
//             <h1>Performance.</h1>
//             <h2>From your teacher!</h2>
//           </div>
         
//           <div className='contact-container'>
//             <h3>Comment</h3>
//             <Comment />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }


// export default Performance;

