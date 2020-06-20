import React from 'react'
import DeleteBtn from "../DeleteBtn";


function DetailPost({user, content, date}) {

    return (
        <div className="row justify-content-md-center">
        <div className="col-md-4 col-md-offset-4">

        <div className="detailPost content-text">
        <div className="row">
        <div className="col">
        <div className="detailPostUsername detailText">{user}</div></div>
        <div className="col">
        <div className="detailPostDate detailText">{date}</div></div></div><hr className="postBreak"/>
        <DeleteBtn className="DetailPostDelete pull-right" 
        // onClick={() => deleteAnnouncement(announcement._id)} 
        />
        <div className="detailPostContent detailText">{content}</div>
        <br />
        </div>
        </div>
        </div>
    )
}

export default DetailPost