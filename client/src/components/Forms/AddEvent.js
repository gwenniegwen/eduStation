import React from 'react'


function AddEvent({addEventToCal}) {

    return (
        <div className="row justify-content-md-center">
        <div className="col-md-4 col-md-offset-4">
            <form className="AddEventForm col-md-offset-4">
                <div className="form-group">
                    <label for="labelEventName">Event Name</label>
                    <input type="text" className="form-control eventForm" placeholder="Enter Event" />
                </div>
                <div className="form-group">
                    <label for="labelEventDate">Event Date</label>
                    <input type="text" className="form-control dateForm" placeholder="YYYY-MM-DD" />
                </div>
                <button type="submit" className="btn btn-primary"

                onClick={e => addEventToCal(e)}

                >Add Event</button>
            </form>
            </div>
            </div>
            )
            }

  export default AddEvent