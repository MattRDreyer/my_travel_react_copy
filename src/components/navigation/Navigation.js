import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {  //this is jsx and what is returned to browser
  render() {
    return (
      <nav className="navbar navbar-inverse">
    <div className="container-fluid">
       <div className="navbar-header">
        <a className="navbar-brand" href="#">My Travel Site</a>
      </div>
      <ul className="nav navbar-nav navbar-right">
          <li>
              <a href="/home.html">Home</a>
          </li>

          <li>
              <a href="/about.html">About</a>
          </li>

          <li>
              <a href="/stuff.html">Stuff</a>
          </li>

          <li>
              <a href="/contact.html">Contact</a>
          </li>

      </ul>
    </div>
  </nav>
    );
}
}

export default Navigation;
