import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from '../../context/auth/authContext';



function Navbar() {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const onLogout =() => {
    logout();
  };
  
  const authLinks = (
    <Fragment>
      <li> Welcome {user && user.username} </li>
      <li> <a onClick={onLogout} href="#!">
        <i className="fas fa-sign-out-alt"></i><span className="hide-sm">Logout</span>
      </a></li>
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
              to="/forum"
              className={
                window.location.pathname === "/forum"
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
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className="nav-item">
        <Link
          to="/"
          className={
            window.location.pathname === "/" ||
              window.location.pathname === "/welcome"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Welcome
            </Link>
      </li>

      <li className="nav-item">
            <Link
              to="/login"
              className={
                window.location.pathname === "/login"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/signup"
              className={
                window.location.pathname === "/signup"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
           Signup
            </Link>
          </li>
    </Fragment>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navmenu">
      <Link className="navbar-brand navTitle" to="/">
        EduStation
      </Link>
      <div className="pagelinks">
        <ul className="navbar-nav">
        {isAuthenticated ? authLinks : guestLinks}
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
