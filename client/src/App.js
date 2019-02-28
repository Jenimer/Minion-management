import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Tyler from './components/Tyler';
import Jordan from './components/Jordan';
import Judy from './components/Judy';
import Task from './components/Task';

const App = () => (
  <Fragment>
    <Route exact path="/" component={Home}/>
    <Route exact path="/tyler" component={Tyler} />
    <Route exact path="/jordan" component={Jordan} />
    <Route exact path="/judy" component={Judy} />
    <Route exact path="/task/:id" component={Task} />    
  </Fragment>
);

export default App;
