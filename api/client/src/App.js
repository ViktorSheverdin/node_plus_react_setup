import './App.css';
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TestAPI from './components/TestAPI';
import Landing from './components/Landing';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/testAPI' component={TestAPI} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
