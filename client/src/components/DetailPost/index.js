import React from 'react'
import DeleteBtn from "../DeleteBtn";


function DetailPost({id, user, content, date, deleteComment}) {

    return (
        <div className="row justify-content-md-center">
        <div className="column">

        <div className="detailPost content-text">
        <div className="row">
        <div className="col">
        <div className="detailPostUsername detailText">{user}</div></div>
        <div className="col">
        <div className="detailPostDate detailText">{date}</div></div></div><hr className="postBreak"/>
        <DeleteBtn className="DetailPostDelete pull-right" 
        onClick={() => deleteComment(id)} 
        />
        <div className="detailPostContent detailText">{content}</div>
        <br />
        </div>
        </div>
        </div>
    )
}

export default DetailPost