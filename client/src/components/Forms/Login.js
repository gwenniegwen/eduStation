import React from "react";
import Input from "./Input";
import "./styles.css"

function Login(prop) {
  return (
    <div>
      <form className="loginForm">
        <Input type="text" placeholder="Username" />

        <Input type="password" placeholder="Password" />
        <button className="logBut" type="submit">Login</button>
        <div>
        <button type='submit'>Sign-Up Here</button>
        </div>

      </form>
    </div>
  );
}

export default Login;
