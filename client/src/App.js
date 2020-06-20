import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Login from "./pages/Login/index";
import Register from "./components/Forms/Register";
import Welcome from "./pages/Welcome";
import Announcements from "./pages/Announcements";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import Performance from './pages/Performance';
import Navbar from './components/Navbar';
import AuthState from './context/auth/AuthState';
import PrivateRoute from './components/Forms/PrivateRoute';



function App() {
  return (
    <AuthState>
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/calendar" component={Calendar} />
                    <Route exact path="/register" component={Register} />
                    <PrivateRoute exact path="/performance" component={Performance} />
                    <PrivateRoute exact path="/announcements">
                        <Announcements />
                    </PrivateRoute>
                    <PrivateRoute exact path="/announcements/:id">
                        <Detail where="announcements"/>
                    </PrivateRoute>
                    <PrivateRoute exact path="/calendar/:id">
                        <Detail where="calendar"/>
                    </PrivateRoute>
                    <NotFound />
                </Switch>

            </div>
        </Router>
     
    </AuthState>
  );
}

export default App;
