import React, { Component } from 'react';
import TopNavbar from './top-navbar/top-navbar.js';

class App extends Component {
  render() {
    return (
      <div className="app-inner-wrapper">
        <TopNavbar />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
