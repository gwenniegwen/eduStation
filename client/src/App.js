import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Calendar from './pages/Calendar'
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';

import Navbar from './components/Navbar';
import Annoucements from './pages/Annoucements/Annoucements';
import Posts from './components/Forms/Posts';
// import Wrapper from './components/Wrapper';


function App() {
    return (
        <Router>
            <div>
            
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/Signin" component={Signin} />
            
                    <Route exact path="/Calendar" component={Calendar} />
                   <Route exact path="/Signup" component={Signup}/>
                   <Route exact path="/Posts" component={Posts}/>
                   <Route exact path="/Annoucements" component={Annoucements}/>
               
                </Switch>
               
            </div>
        </Router>
    );
}

export default App;