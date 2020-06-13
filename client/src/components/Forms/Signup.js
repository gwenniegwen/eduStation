import React from "react";

function Signup(prop) {
    return(
    <div className="row">
    <div className="col-md-6 col-md-offset-3">
      <h2>Sign Up</h2>
      <form className="signup">
          <div className="form-group">
              <label for="exampleInputUsername1">Username</label>
              <input type="text" className="form-control" id="username-input" placeholder="Username" />
            </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" clasName="form-control" id="email-inputSignup" placeholder="Email" />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="password-inputSignup" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-default">Sign Up</button>
      </form>
      <br />
      <p>Or log in here</p>
    </div>
  </div>
    )
  }

  export default Signup