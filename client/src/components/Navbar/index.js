import React from "react";
import { Link } from "react-router-dom";
// import ".../index.css"
// import "./style.css";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navmenu">
      <Link className="navbar-brand navTitle" to="/">
        EduStation
      </Link>
      <div className="pagelinks">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/Welcome"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Welcome
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Login"
              className={
                window.location.pathname === "/Login"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Log In
            </Link>
            
          </li>
          <li className="nav-item">
            <Link
              to="/Signup"
              className={
                window.location.pathname === "/Signup"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Sign Up
            </Link>
            
          </li>
          <li className="nav-item">
            <Link
              to="/Calendar"
              className={
                window.location.pathname === "/Calendar"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Calendar
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/announcements"
              className={
                window.location.pathname === "/announcements"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Announcements
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Performance"
              className={
                window.location.pathname === "/Performance"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Performance
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Forum"
              className={
                window.location.pathname === "/Forum"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Forum
            </Link>

          </li>
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Log Out
            </Link>
            
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
