import React from "react";
import BusGif from '../components/Welcome/schoolbus.gif'



function Welcome(){


    return (
        <div className="welcome-container">
        <div className="container welcome-info">
            <div className="welcome-spacing-div" />
            <h1 className="main-title">EduStation</h1>
            <img 
            src={BusGif} alt="pic" className="busGif" />
            <h4 className="sub-title">Let's Learn Together!</h4>
            <div className="row justify-content-md-center">
            <div className="column welcome-button-column">
            <button type="button" class="btn btn-outline-light sign-up-btn welcome-button">Sign Up</button>
            <button type="button" class="btn btn-outline-light login-btn welcome-button">Log In</button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Welcome