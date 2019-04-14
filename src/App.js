import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import { Route, Switch } from 'react-router-dom';

import {
  About, Password, Home, Login, Dropdown1, Landing
} from './screens'
class App extends Component {
  render() {
    return (
      <div className="container-fluid px-0">
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/landing" component={Landing}/>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/password" component={Password}/>
          <Route path="/about" component={About}/>
          <Route path="/dropdown1" component={Dropdown1}/>
          <Route 
            render={ props => {
              if(props.location.pathname === "/500") {
                return (
                  <h1>500 internal server error :(</h1>
                ); 
              }
            }}
          />
          <Route 
            render={() => <h1>default - 404 not found :(</h1> } 
          />
        </Switch>
      </div>
    );
  }
}

export default App;