import React from 'react'


function AddEvent({ addEventToCal , eventRef, startRef, endRef}) {

    return (
        <div className="container top-container">
            <div className="row justify-content-md-center">
                <div className="col-md-4 col-md-offset-4">
                    <h2 className="formName">Create an Event</h2>
                    <form className="addEventForm col-md-offset-4">
                        <div className="form-text">
                            <div className="form-group">
                                <label htmlFor="labelEventName" className="eventLabel">Event Name</label>
                                <input type="text" className="form-control eventForm" required ref={eventRef} placeholder="Enter Event" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="labelEventDate" className="eventLabel">Event Start</label>
                                <input type="text" className="form-control dateForm" required ref={startRef} placeholder="YYYY-MM-DD" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="labelEventDate" className="eventLabel">Event End (leave blank for single day)</label>
                                <input type="text" className="form-control dateForm" ref={endRef} placeholder="YYYY-MM-DD" />
                            </div>
                        </div>
                        <div className="button-row addeventrow justify-content-md-center">
                            <button type="button" className="btn btn-outline-light justify-content-md-center addEventButton"
                                onClick={e => addEventToCal(e)}
                            >Add Event</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddEvent