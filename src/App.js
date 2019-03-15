import React, { Component } from 'react';
import Navbar from './components/Layout/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard/dashboard';
import ProjectDetails from './components/Projects/ProjectDetails'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path='/' component={Dashboard}></Route>
            <Route path='/posts/:postID' component={ProjectDetails}></Route>
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
