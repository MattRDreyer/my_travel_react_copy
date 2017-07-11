import React, { Component } from 'react';

class Footer extends Component {  //this is jsx and what is returned to browser
  render() {
    return (
      <nav className="navbar navbar-inverse">
      <div className="container-fluid">
       <div className="navbar-header">
        <a className="navbar-brand" href="#">&copy; Travel is fun</a>
      </div>
      <ul className="nav navbar-nav navbar-right">
          <li>
              <a href="#">Facebook</a>
          </li>

          <li>
              <a href="#">Twitter</a>
          </li>

      </ul>
      </div>
      </nav>
);
}
}

export default Footer;
