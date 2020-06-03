import React from "react";
import Login from "../components/Forms/Login"

function Signup(){

    let isLoggedIn = false
    
    return (
        <div className="container">
        {isLoggedIn === true ? (
          <div>
            <h1>Hello</h1>
            <button className="btn"> Login In Now </button>
          </div>
        ) : (
          <Login />
        )}
      </div>
    
    );
}

export default Signup