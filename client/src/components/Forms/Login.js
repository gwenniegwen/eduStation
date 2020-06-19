import React, {useState} from "react";

function Login() {

  const [user, setUser] = useState({
    // username: '',
    email: '',
    password: ''
    

  })

  const { email, password} = user;

  const onChange = e => setUser({ ...user, [e.target.username]: e.target.value })
  const onSubmit = e => {
    e.preventDefault();
    console.log('It Works Time too Yo')
  }
  return (
    <form onSubmit={onSubmit}>

    <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-md-4 col-md-offset-4">
        <h2 className="formName">Log In</h2>
        <form className="loginForm col-md-offset-4">
        <div className="form-text">
          <div className="form-group">
            <label htmlfor="exampleInputEmail1" className="authlabel">Email address</label>
            <input type="email" className="form-control authinput" id="email-inputLogin" value={email} onChange={onChange} placeholder="Email" />
          </div>
            <div className="form-group">
              <label htmlfor="exampleInputPassword1" className="authlabel">Password</label>
              <input type="password" className="form-control authinput" id="password-inputLogin" value={password} onChange={onChange}placeholder="Password" />
          </div>
          </div>
          <div className="button-row justify-content-md-center">
          <button type="submit" value="login" className="btn btn-outline-light login-submit authentication-button">Log In</button>
          </div>
        </form>
            <p className="switch-signin">Or sign up <a href="/Signup" className="signin-link">here</a></p>
          </div>
    </div>
    </div>
    </form>
  );
}

export default Login;
