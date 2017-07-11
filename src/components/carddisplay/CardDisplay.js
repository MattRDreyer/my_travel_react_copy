import React, { Component } from 'react';
import Cards from '../cards/Cards';


class CardDisplay extends Component {  //this is jsx and what is returned to browser
  render() {
    return (
      <div className="container-fluid">
        <div className="row text-center">
        <Cards country="spain" tourismSite="http://www.spain.info/en_US/"/>
        <Cards country="italy" tourismSite="http://www.italia.it/en/home.html"/>
        <Cards country="aruba" tourismSite="http://www.arubatourism.com/"/>
        <Cards country="chile" tourismSite="http://chile.travel/en/"/>
          </div>
        </div>

);
}
}

export default CardDisplay;
