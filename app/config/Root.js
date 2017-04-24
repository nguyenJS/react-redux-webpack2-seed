import React, { Component } from 'react';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import shortid from 'shortid';

import App from '../components/App';
import Detail from '../components/detail/Detail';


const history = useRouterHistory(createHashHistory)({ queryKey: false });

export default class Root extends Component {
  render() {
    return (
      <Router history={history} key={shortid.generate()}>
        <Route path="/" component={App} />
        <Route path="/detail" component={ Detail }>
          <Route path="/detail/:id" component={ Detail } />
        </Route>
      </Router>
    );
  }
}

