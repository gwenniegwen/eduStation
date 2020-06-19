import React, { useState } from "react";

function Signup() {

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''

  })

  const { username, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.username]: e.target.value })
  const onSubmit = e => {
    e.preventDefault();
    console.log('It Works Yo')
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-4 col-md-offset-4">
            <h2 className="formName">Sign Up</h2>
            <form className="signupForm col-md-offset-4">
              <div className="form-text">
                <div className="form-group">
                  <label htmlfor="exampleInputUsername1" className="authlabel">Username</label>
                  <input type="text" className="form-control" id="username-input" value={username} onChange={onChange} placeholder="Username" />
                </div>
                <div className="form-group">
                  <label htmlfor="exampleInputEmail1" className="authlabel">Email address</label>
                  <input type="email" className="form-control" id="email-inputSignup" value={email} onChange={onChange} placeholder="Email" />
                </div>
                <div className="form-group">
                  <label htmlfor="exampleInputPassword1" className="authlabel">Password</label>
                  <input type="password" className="form-control" id="password-inputSignup" value={password} onChange={onChange} placeholder="Password" />
                </div>
                <div className="form-group">
                  <label htmlfor="exampleInputPassword1" className="authlabel">Confirm Password</label>
                  <input type="password2" className="form-control" id="password-inputSignup" value={password2} onChange={onChange} placeholder="Password" />
                </div>
              </div>
              <div className="button-row justify-content-md-center">
                <button type="submit" value="signup" className="btn btn-outline-light signup-submit justify-content-md-center">Sign Up</button>
              </div>
            </form>
            <p className="switch-signin">Or log in <a href="/Login" className="signin-link">here</a></p>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Signup