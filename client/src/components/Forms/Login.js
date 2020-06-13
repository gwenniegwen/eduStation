import React from "react";
import "./styles.css"

function Login(prop) {
  return (
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <h2>Login</h2>
        <form className="login">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email-inputLogin" placeholder="Email" />
          </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="password-inputLogin" placeholder="Password" />
          </div>
              <button type="submit" className="btn btn-default">Login</button>
        </form>
            <br />
            <p>Or sign up here</p>
          </div>
    </div>
  );
}

export default Login;
