import React, { Component } from 'react';
import Navbar from './components/Layout/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard/dashboard';
import ProjectDetails from './components/Projects/ProjectDetails'
import Signin from './components/Auth/signin'
import SignUp from './components/Auth/signup'
import Create from './components/Projects/createProject';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path='/' component={Dashboard}></Route>
            <Route path='/posts/:postID' component={ProjectDetails}></Route>
            <Route path="/login" component={Signin}></Route>
            <Route path='/signup' component={SignUp}></Route>
            <Route path='/create' component={Create}></Route>
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
