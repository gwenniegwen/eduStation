import React, { useState, useContext, useEffect } from "react";
// import AlertContext from '../../context/alert/alertContext'
// import AlertReducer from '../../context/alert/alertReducer'
import AuthContext from '../../context/auth/authContext'


function Signup(props) {
  // const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  // const {setAlert } = alertContext;

  const { register, error, clearErrors, isAuthenticated } = authContext

  useEffect(() => {

    if (isAuthenticated) {
      props.history.push('/')
    }
    if (error === 'This User Already Exists') {
      // setAlert(error, 'danger')
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''

  })

  const { username, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.username]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    if (username === '' || email === '' || password === '') {
      console.log(error)
    } else if (password !== password2) {
     console.log(error)
    } else {
      register({
        username,
        email,
        password
      });
      console.log('User Has Been Successfully Registered.')
    }
  }

  return (
    <div className="container">
     
        <div className="row justify-content-md-center">
          <div className="col-md-4 col-md-offset-4">
            <h2 className="formName">Sign Up</h2>
            <form onSubmit={onSubmit} className="signupForm col-md-offset-4">
              <div className="form-text">
                <div className="form-group">
                  <label htmlFor="exampleInputUsername1" className="authlabel">Username</label>
                  <input type="text" className="form-control" id="username-input" value={username} onChange={onChange} required placeholder="Username" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" className="authlabel">Email address</label>
                  <input type="email" className="form-control" id="email-inputSignup" value={email} onChange={onChange} required placeholder="Email" />
                </div>
                <div className="form-group">
                 
                  <label htmlFor="exampleInputPassword1" className="authlabel">Password</label>
                  <input type="password" className="form-control" id="password-inputSignup" 
                  value={password} 
                  onChange={onChange} 
                  required 
                  minLength="6" 
                  placeholder="Password" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1" className="authlabel">Confirm Password</label>
                  <input type="password2" className="form-control" id="password-inputSignup" value={password2} onChange={onChange} required minLength="6" placeholder="Confirm Password" />
                </div>
              </div>
              <div className="button-row justify-content-md-center">
                <button type="submit" value="signup" className="btn btn-outline-light signup-submit justify-content-md-center">Sign Up</button>
              </div>
            </form>
            <p className="switch-signin">Or log in <a href="/login" className="signin-link">here</a></p>
          </div>
        </div>
   
      </div>
  )
}

export default Signup