// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Calendar from "./pages/Calendar";
// import Signup from "./pages/Signup";
// import Welcome from "./pages/Welcome";
// import Navbar from "./components/Navbar";
// import Wrapper from "./components/Wrapper";
// import Performance from "./pages/Performance";


// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Wrapper>
//           <Route exact path="/" component={Welcome} />
//           <Route exact path="/Signup" component={Signup} />
//           <Route exact path="/Calendar" component={Calendar} />
//           <Route exact path="/Performance" component={Performance} />
//           {/* <Calendar /> */}
//         </Wrapper>
//       </div>
//     </Router>
//   );
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Calendar from './pages/Calendar'
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';
import Performance from './pages/Performance';
import Navbar from './components/Navbar';
import Annoucements from './pages/Annoucements/index';
import Posts from './components/Forms/Posts';
import Forum from './pages/ForumDemo';

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
                   <Route exact path="/Forum" component={Forum}/>
                   <Route exact path="/Performance" component={Performance}/>
                </Switch>
               
            </div>
        </Router>
    );
}

export default App;

