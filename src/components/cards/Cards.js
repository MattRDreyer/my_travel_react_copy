import React, { Component } from 'react';
import './Cards.css';

class Cards extends Component {  //this is jsx and what is returned to browser
  render() {
    return (
      <div style={{textTransform: "capitalize"}} id={this.props.country} className="col-md-3 card"><h3>{this.props.country}</h3>
      <a href={this.props.tourismSite} target="_blank">{this.props.country} Tourism Site</a>
      </div>
);
}
}

export default Cards;
