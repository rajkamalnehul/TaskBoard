import React from 'react';
import './App.css';
import SignUp from './pages/signup/signup.js';
import SignIn from './pages/signin/signin.js';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TaskBoard from './pages/task/task';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
     
     
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/task" component={TaskBoard} />
     </Switch>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
