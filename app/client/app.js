import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes.js';

Meteor.startup(() => {
  const app = document.querySelector('#app');
  ReactDOM.render(<Routes />, app);
});
