import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

const T = i18n.createComponent();

class TopNavbar extends Component {
  loggedIn() {
    return !!this.props.currentUser;
  }
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggle collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#top-navbar-collapse"
                    aria-expanded="false">
              <span className="sr-only">
                <T>Toggle navigation</T>
              </span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">
              Hunting Kiwi
            </Link>
          </div>
          <div className="top-navbar-collapse collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/profile">
                  <T>Profile</T>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default TopNavbar;
