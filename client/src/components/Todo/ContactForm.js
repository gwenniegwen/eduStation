import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
    };
  }

  handleSubmit() {
    this.setState({isSubmitted: true});
  }

  render() {
    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = (
        <div className='contact-submit-message'>
          Sent!
        </div>
      );
    } else {
      contactForm = (
        <form onSubmit={() => {this.handleSubmit()}}>
          <p></p>
          <textarea />
          <input
            type='submit'
            value='Send'
          />
        </form>
      );
    }
    
    return (
      <div className='contact-form'>
        {contactForm}
      </div>
    );
  }
}

export default Comment;













// import React from 'react';

// class TodoItem extends React.Component {
//   render() {
//     return(
//       const TodoItems = (props) => (
//   <form className="siimple-form">
//     <div className="siimple-form-field">
//       <label className="siimple-label siimple--color-white">Your todo:</label>
//       <input name="title" type="text" className="siimple-input"/>　<input type="submit" value="Add" className="siimple-btn siimple-btn--teal"/>
//     </div>
//   </form>
// );
//     )
//   }

// }


// export default TodoItem;

