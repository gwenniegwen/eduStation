import React from 'react'


function DetailPost({ addEventToCal }) {

    return (
        <div className="row row justify-content-md-center">
        <div className="col-md-4 col-md-offset-8">

        <div className="detailPost">
        <div className="detailPostUsername">UserName</div><br />
        <div className="detailPostDate">Date</div><br />
        <div className="detailPostContent">Content </div>
        </div>
        </div>
        </div>
    )
}

export default DetailPost