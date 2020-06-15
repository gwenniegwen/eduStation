import React from "react";

function Signup() {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-4 col-md-offset-4">
          <h2 className="formName">Sign Up</h2>
          <form className="signupForm col-md-offset-4">
            <div className="form-text">
              <div className="form-group">
                <label for="exampleInputUsername1" className="authlabel">Username</label>
                <input type="text" className="form-control" id="username-input" placeholder="Username" />
              </div>
                <div className="form-group">
                  <label for="exampleInputEmail1" className="authlabel">Email address</label>
                  <input type="email" className="form-control" id="email-inputSignup" placeholder="Email" />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1" className="authlabel">Password</label>
                  <input type="password" className="form-control" id="password-inputSignup" placeholder="Password" />
                </div>
            </div>
            <div className="button-row justify-content-md-center">
              <button type="button" className="btn btn-outline-light signup-submit justify-content-md-center">Sign Up</button>
            </div>
          </form>
          <p className="switch-signin">Or log in <a href="/Login" className="signin-link">here</a></p>
        </div>
      </div>
    </div>
  )
}

export default Signup