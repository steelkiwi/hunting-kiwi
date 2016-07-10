import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app/app.js';
import HomePage from './components/home-page/home-page.js';
import ProfilePage from './components/profile-page/profile-page.js';
import NotFoundPage from './components/not-found-page/not-found-page.js';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory} >
        <Route path="/" component={App}>
          <IndexRoute component={HomePage} />
          <Route path="profile" component={ProfilePage} />
          <Route path="*" component={NotFoundPage} />
        </Route>
      </Router>
    );
  }
};

export default Routes;
