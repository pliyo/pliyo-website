import React from 'react';
import { Layout } from './components/Layout';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Poetry from './components/Poetry';
import Shorinji from './components/Shorinji';
import Articles from './components/Articles';

import './custom.css';

let routes = (
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/articles" component={Articles}></Route>
    <Route path="/poetry" component={Poetry}></Route>
    <Route path="/shorinji" component={Shorinji}></Route>
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
