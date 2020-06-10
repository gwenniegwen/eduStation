import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Calendar from './pages/Calendar'
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Forum from './pages/ForumDemo';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Wrapper>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/Signup" component={Signup} />
                    <Route exact path="/Calendar" component={Calendar} />
<<<<<<< HEAD
=======
                    <Route exact path="/Forum" component={Forum}/>
                    {/* <Calendar /> */}
>>>>>>> cb0cdb621cb16ab32fb4a65d972770c40a85600b
                </Wrapper>
            </div>
        </Router>
    );
}

export default App;