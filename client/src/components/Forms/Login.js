import React from "react";

function Login() {
  return (
    <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-md-4 col-md-offset-4">
        <h2 className="formName">Log In</h2>
        <form className="loginForm col-md-offset-4">
        <div className="form-text">
          <div className="form-group">
            <label for="exampleInputEmail1" className="authlabel">Email address</label>
            <input type="email" className="form-control authinput" id="email-inputLogin" placeholder="Email" />
          </div>
            <div className="form-group">
              <label for="exampleInputPassword1" className="authlabel">Password</label>
              <input type="password" className="form-control authinput" id="password-inputLogin" placeholder="Password" />
          </div>
          </div>
          <div className="button-row justify-content-md-center">
          <button type="button" className="btn btn-outline-light login-submit authentication-button">Log In</button>
          </div>
        </form>
            <p className="switch-signin">Or sign up <a href="/Signup" className="signin-link">here</a></p>
          </div>
    </div>
    </div>
  );
}

export default Login;
