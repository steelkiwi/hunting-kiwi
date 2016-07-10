import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';

const T = i18n.createComponent();

class NotFoundPage extends Component {
  render() {
    return (
      <h1>
        <T>Page not found!</T>
      </h1>
    );
  }
}

export default NotFoundPage;
