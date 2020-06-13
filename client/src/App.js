import React from 'react';
import {StoreProvider} from "./utils/GlobalState"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Calendar from './pages/Calendar'
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';
import Home from "./pages/Home";
import Detail from "./pages/Detail";

import Navbar from './components/Navbar';
// import Annoucements from './pages/Annoucements/index';
// import Posts from './pages/Annoucements/Posts';
import Forum from './pages/ForumDemo';

function App() {
    return (
        <Router>
            <div>
            <StoreProvider>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/Signin" component={Signin} />
            
                    <Route exact path="/Calendar" component={Calendar} />
                   <Route exact path="/Signup" component={Signup}/>
                   <Route exact path="/Home" component={Home}/> 
                   <Route exact path="/posts/:id" component={Detail}/>
                   <Route exact path="/Forum" component={Forum}/>
                </Switch>
                </StoreProvider>
            </div>
        </Router>
    );
}

export default App;