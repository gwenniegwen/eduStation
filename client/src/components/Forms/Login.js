import React from "react";
import Input from "./Input";
// import "./styles.css"

function Login(prop) {
  return (
    <div>
      <form className="form">
        <Input type="text" placeholder="Username" />

        <Input type="password" placeholder="Password" />
        <button className="button" type="submit">Login</button>
        <div>
        <button type='submit'>Sign-Up Here</button>
        </div>

      </form>
    </div>
  );
}

export default Login;
