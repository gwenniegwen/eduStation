import React from 'react'


function CommentForm({ handleFormSubmit, nameRef, commentRef }) {

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="column">
                    <h2 className="formName commentFormName">Add a Comment</h2>
                    <form className="commentForm col-md-offset-4">
                        <div className="form-text">
                            <div className="form-group">
                                <label htmlFor="labelUsername" className="commentLabel">Username</label> <br />
                                <input type="text" className="form-control userName" ref={nameRef}  placeholder="Enter Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="labelEventDate" className="commentLabel">Comment</label>
                                <textarea className="textArea form-control comment" ref={commentRef} placeholder="Share your thoughts!" />
                            </div>
                        </div>
                        <div className="button-row addeventrow justify-content-md-center">
                            <button type="button" className="btn btn-outline-light justify-content-md-center comment commentButton"
                                onClick={handleFormSubmit}
                            >Add Comment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CommentForm