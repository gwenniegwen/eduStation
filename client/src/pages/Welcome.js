import React from "react";
import { useHistory } from 'react-router'
import BusGif from '../components/Welcome/BusCroppedGif.gif'
import '../index.css'



function Welcome(){
    const { push } = useHistory()

    return (
        <div className="welcome-container">
        <div className="container welcome-info">
            <div className="welcome-spacing-div" />
            <div className="row justify-content-md-center">
            <div className="col-md-4 col-md-offset-4">
            <h1 className="main-title">EduStation</h1>
            </div>
        </div>
        <div className="row justify-content-md-center">
            <div className="column">
            <img 
            src={BusGif} alt="pic" className="busGif" />
            </div>
            </div>
            <div className="row justify-content-md-center">
            <div className="column">
            <h4 className="sub-title">Let's Learn Together!</h4>
            </div>
            </div>
            <div className="button-row justify-content-md-center">
            <div className="column">
            <button type="button" 
            onClick={() => push("/Signup")}
            className="btn btn-outline-light sign-up-btn welcome-button">Sign Up</button>
            <button type="button" 
            onClick={() => push("/Login")}
            className="btn btn-outline-light login-btn welcome-button">Log In</button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Welcome