import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Calendar from './pages/Calendar'
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';
import Annoucements from "./pages/Annoucements";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
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
                    <Route exact path="/Signin" component={Signin} />
                    <Route exact path={[ "/annoucements"]}>
                     <Annoucements />
                     </Route>
                     <Route exact path="/annoucements/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
                    <Route exact path="/Calendar" component={Calendar} />
                   <Route exact path="/Signup" component={Signup}/>
              
                   <Route exact path="/Forum" component={Forum}/>
                   <Route exact path="/Performance" component={Performance}/>
                </Switch>
                
            </div>
        </Router>
    );
}

export default App;

