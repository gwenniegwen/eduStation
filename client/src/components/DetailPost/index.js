import React from 'react'


function DetailPost({user, content, date}) {

    return (
        <div className="row row justify-content-md-center">
        <div className="col-md-4 col-md-offset-8">

        <div className="detailPost">
        <div className="detailPostUsername">{user}</div><br />
        <div className="detailPostDate">{date}</div><br />
        <div className="detailPostContent">{content} </div>
        </div>
        </div>
        </div>
    )
}

export default DetailPost