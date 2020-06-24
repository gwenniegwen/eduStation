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
              to="/calendar"
              className={
                window.location.pathname === "/calendar"
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
              to="/performance"
              className={
                window.location.pathname === "/performance"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Performance
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
