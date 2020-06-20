import React, {useState, useContext, useEffect} from "react";
import AuthContext from '../../context/auth/authContext';
// import AlertContext from '../../context/alert/alertContext';
import '../../context/types'


function Login(props) {
  // const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  // const {setAlert } = alertContext;

  const { login, error, clearErrors, isAuthenticated } = authContext

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
    

  })

  const { email, password} = user;

  const onChange = e => setUser({ ...user, [e.target.username]: e.target.value })
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
  }
  return (
    <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-md-4 col-md-offset-4">
        <h2 className="formName">Log In</h2>
        <form onSubmit={onSubmit} className="loginForm col-md-offset-4">
        <div className="form-text">
          <div className="form-group">
            <label htmlfor="exampleInputEmail1" className="authlabel">Email address</label>
            <input 
            type="email" className="form-control authinput" id="email-inputLogin" 
            value={email} 
            onChange={onChange} 
            required
            placeholder="Email" />
          </div>
            <div className="form-group">
              <label htmlfor="exampleInputPassword1" className="authlabel">Password</label>
              <input 
              type="password" className="form-control authinput" id="password-inputLogin" 
              value={password} 
              onChange={onChange}
              required
              placeholder="Password" />
          </div>
          </div>
          <div className="button-row justify-content-md-center">
          <button type="submit" value="login" className="btn btn-outline-light login-submit authentication-button">Log In</button>
          </div>
        </form>
            <p className="switch-signin">Or sign up <a href="/signup" className="signin-link">here</a></p>
          </div>
    </div>
    </div>
 
  );
}

export default Login;
