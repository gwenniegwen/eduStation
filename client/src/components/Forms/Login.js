import React, {useState, useContext, useEffect} from "react";
import AuthContext from '../../context/auth/authContext';


function Login(props) {
  
  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {

    if (isAuthenticated) {
      props.history.push('/')
    }
    if (error === 'Invalid Login,Check Your Credentials') {
     console.log(error)
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);


  const [user, setUser] = useState({
    // username: '',
    email: '',
    password: ''
    

  });

  const { email, password} = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  
  const onSubmit = e => {
    e.preventDefault();
   if(email === '' || password === ''){
     console.log(error);
   } else {
     login({
       email,
       password
     });
    }
  };

  return (
    <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-md-4 col-md-offset-4">
        <h2 className="formName">Log In</h2>
        <form onSubmit={onSubmit} className="loginForm col-md-offset-4">
        <div className="form-text">
          <div className="form-group">
            <label htmlFor="email" className="authlabel">Email Address</label>
            <input className="form-control authinput" 
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
              <input className="form-control authinput" 
              id="password"
              type="password" 
              name="password" 
              value={password} 
              onChange={onChange}
              required
              placeholder="Password" />
          </div>
          </div>
          <div className="button-row justify-content-md-center">
          <button className="btn btn-outline-light login-submit authentication-button"
          type="submit" 
          value="Login" >Log In</button>
          </div>
        </form>
            <p className="switch-signin">Or sign up <a href="/signup" className="signin-link">here</a></p>
          </div>
    </div>
    </div>
 
  );
}

export default Login;
