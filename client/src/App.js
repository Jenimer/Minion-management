import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Tyler from './components/Tyler';
import Jordan from './components/Jordan';
import Judy from './components/Judy';

const App = () => (
  <Fragment>
    <Route exact path="/" component={Home}/>
    <Route exact path="/tyler" component={Tyler} />
    <Route exact path="/jordan" component={Jordan} />
    <Route exact path="/judy" component={Judy} />
    
  </Fragment>
);

export default App;
