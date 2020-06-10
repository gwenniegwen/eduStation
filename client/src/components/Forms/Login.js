import React, { Fragment } from "react";
import Input from "./Input";
import "./styles.css"

function Login(prop) {
  return (
    <Fragment>
      <form className="form">
        <Input type="text" placeholder="Username" />

        <Input type="password" placeholder="Password" />
        <button type="submit">Login</button>
        <div>
        <button type='submit'>Sign-Up Here</button>
        </div>

      </form>
    </Fragment>
  );
}

export default Login;
