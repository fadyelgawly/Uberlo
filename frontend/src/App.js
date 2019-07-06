import React /*, {Component } */from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { acceptRides } from './acceptRides';
import { RequestRide } from './RequestRide';
import { Drive } from './Drive';
import { ridesHistory } from './ridesHistory';
import { Login } from './Login';
import { Signup } from './Signup';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron'


function App() {


  return (
    <React.Fragment>
      <NavigationBar/>
      <Jumbotron/>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/acceptRides" component={ acceptRides } />
            <Route exact path="/history" component={ ridesHistory } />
            <Route exact path="/drive" component={ Drive } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/signup" component={ Signup } />
            <Route exact path="/rider" component={ RequestRide } />
            <Route exact  component = {NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
