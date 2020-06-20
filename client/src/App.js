import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Login from "./pages/Login/index";
import Signup from "./pages/Signup/index";
import Welcome from "./pages/Welcome";
import Announcements from "./pages/Announcements";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import Performance from "./pages/Performance";
import Navbar from "./components/Navbar";
import Forum from "./pages/ForumDemo";
// import Alerts from "./components/Forms/Alerts";
import AuthState from "./context/auth/AuthState";
// import AlertState from "./context/alert/AlertState";
import setAuthToken from'./utils/setAuthToken';
import PrivateRoute from './components/Forms/PrivateRoute'


if(localStorage.token) {
    setAuthToken (localStorage.token);
}

function App() {
  return (
    <AuthState>
      {/* <AlertState> */}
        <Router>
          <div>
            <Navbar />
            {/* <Alerts /> */}
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/calendar" component={Calendar} />
              <Route exact path="/signup" component={Signup} />
              <PrivateRoute exact path="/forum" component={Forum} />
              <PrivateRoute exact path="/performance" component={Performance} />
              <PrivateRoute exact path="/announcements">
                <Announcements />
              </PrivateRoute>
              <PrivateRoute exact path="/announcements/:id">
                <Detail where="announcements" />
              </PrivateRoute>
              <PrivateRoute exact path="/calendar/:id">
                <Detail where="calendar" />
              </PrivateRoute>
              <NotFound />
            </Switch>
          </div>
        </Router>
      {/* </AlertState> */}
    </AuthState>
  );
}

export default App;
