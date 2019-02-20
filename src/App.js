import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ProjectDetails from './components/ProjectDetails';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Projects } from './components/Projects';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route exact path='/projects' component={Projects}/>
          {/* <ProjectDetails history={{}} match={{}} /> */}
          <Route exact path="/projects/:id" component={ProjectDetails} />
          {/* This route is executed when no previous route matched the url */}
          <Route render={()=> <h1>404</h1>}/>
          {/* <Route render={()=> <Redirect to='/' />}/> */}
        </Switch>
      </div>
    );
  }
}

export default App;
