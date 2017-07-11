import React, { Component } from 'react';

class Tablerow extends Component {  //this is jsx and what is returned to browser
  render() {
    return (
      <tr>
      <td>{this.props.destination}</td>
      <td>{this.props.capital}</td>
      <td>{this.props.officialLanguage}</td>
      <td>{this.props.population}</td>
      <td>{this.props.nationalBird}</td>
      </tr>
    );
  }
}

export default Tablerow;
