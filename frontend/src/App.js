import React, {Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Ride } from './Ride';
import { Drive } from './Drive';
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
            <Route exact path="/ride" component={ Ride } />
            <Route exact path="/drive" component={ Drive } />
            <Route exact  component = {NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
