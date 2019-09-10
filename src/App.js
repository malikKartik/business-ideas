import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Crisis from './components/verticalCrisis/Crisis'
import VerticalQ from './components/veritcals/VerticalQuestion'
import Companies from './components/companies/Companies'
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/Signin'
import SignUp from './components/auth/Signup'
import Navbar from './layout/Navbar'



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component = {Dashboard}/>
        <Route path='/companies' component={Companies}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        <Route path='/verticalquestions' component={VerticalQ}/>
        <Route path='/crisis' component={Crisis}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
