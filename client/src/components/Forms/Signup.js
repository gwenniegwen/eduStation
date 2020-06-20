import React, { useState, useContext, useEffect } from "react";
import AuthContext from '../../context/auth/authContext'


function Signup(props) {
  const authContext = useContext(AuthContext);

  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {

    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'This User Already Exists') {
      console.log(error);
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

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    if (username === '' || email === '' || password === '') {
      console.log("all field required")
    } else if (password !== password2) {
     console.log("passwords do not match")
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
                  <label htmlFor="name" className="authlabel">Username</label>
                  
                  <input className="form-control"
                 id="name"
                 type="text"  
                 name="username" 
                 value={username} 
                 onChange={onChange} 
                 required 
                 placeholder="Username" />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="authlabel">Email address</label>
                  <input className="form-control"
                  id="email"
                  type="email" 
                  name="email" 
                  value={email} 
                  onChange={onChange} 
                  required 
                  placeholder="Email" />
                </div>
               
                <div className="form-group">
                 
                  <label htmlFor="password" className="authlabel">Password</label>
                  <input className="form-control" 
                  id="password" 
                  type="password" 
                  name="password"
                  value={password} 
                  onChange={onChange} 
                  required 
                  minLength="6" 
                  placeholder="Enter Password" />
                </div>
               
                <div className="form-group">
                  <label htmlFor="password2" className="authlabel">Confirm Password</label>
                  <input className="form-control"
                  id="password2"
                  type="password2" 
                  name="password2"  
                  value={password2} 
                  onChange={onChange} 
                  required 
                  minLength="6" 
                  placeholder="Confirm Password" />
                </div>
              </div>
              <div className="button-row justify-content-md-center">
                <button type="submit" value="Register" className="btn btn-outline-light signup-submit justify-content-md-center">Sign Up</button>
              </div>
            </form>
            <p className="switch-signin">Or log in <a href="/login" className="signin-link">here</a></p>
          </div>
        </div>
   
      </div>
  )
}

export default Signup