import React from 'react';
import { Layout } from './components/Layout';
import Home from './components/Home';
import Bio from './components/Bio';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import './custom.css';

let routes = (
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route path="/bio" component={Bio}></Route>
  </Switch>
);

export default function App() {
  return (
    <Layout>
      <div id="App">
        <div>{routes}</div>
      </div>
    </Layout>
  );
}
