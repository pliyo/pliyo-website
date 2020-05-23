import React from 'react';
import { Layout } from './components/Layout';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Poetry from './components/Poetry';
import Shorinji from './components/Shorinji';
import Contact from './components/Contact';

import './custom.css';

let routes = (
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/poetry" component={Poetry}></Route>
    <Route path="/shorinji" component={Shorinji}></Route>
    <Route path="/contact" component={Contact}></Route>
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
