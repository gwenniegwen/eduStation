import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Calendar from './pages/Calendar'
import Login from './pages/Login/index';
import Signup from './pages/Signup/index';
import Welcome from './pages/Welcome';
import Announcements from "./pages/Announcements";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import Performance from './pages/Performance';
import Navbar from './components/Navbar';
import Forum from './pages/ForumDemo';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/calendar" component={Calendar} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/forum" component={Forum} />
                    <Route exact path="/performance" component={Performance} />
                    <Route exact path="/announcements">
                        <Announcements />
                    </Route>
                    <Route exact path="/announcements/:id">
                        <Detail where="announcements"/>
                    </Route>
                    <Route exact path="/calendar/:id">
                        <Detail where="calendar"/>
                    </Route>
                    <NotFound />
                </Switch>

            </div>
        </Router>
    );
}

export default App;

