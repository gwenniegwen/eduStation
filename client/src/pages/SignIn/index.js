import React from "react";
import Login from "../../components/Forms/Login"
import Signup from "../../components/Forms/Signup"
import './style.css'

function Signin(){
    
    return (
        <div className="signin-container">
          <Login />
          <Signup />
      </div>
    );
}

export default Signin