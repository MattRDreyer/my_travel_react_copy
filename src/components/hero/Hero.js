import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {  //this is jsx and what is returned to browser
  render() {
    return (
<div id="myCarousel" className="carousel slide" data-ride="carousel">
 <ol className="carousel-indicators">
   <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
   <li data-target="#myCarousel" data-slide-to="1"></li>
   <li data-target="#myCarousel" data-slide-to="2"></li>
   <li data-target="#myCarousel" data-slide-to="3"></li>
 </ol>

 <div className="carousel-inner" role="listbox">
   <div className="item active">
     <img src="../carousel_images/travelOne.jpg" alt="Camel in water" />
   </div>
   <div className="item" role="listbox">
     <img src="../carousel_images/travelTwo.jpg" alt="Eifel Tower" />
   </div>
   <div className="item" role="listbox">
   <img src="../carousel_images/travelThree.jpg" alt="Airplane"/ >
 </div>
 <div className="item" role="listbox">
 <img src="../carousel_images/travelFour.jpg" alt="Hot Air Balloon" />
</div>
</div>
 <a className="left carousel-control" href="#myCarousel" data-slide="prev">
   <span className="glyphicon glyphicon-chevron-left"></span>
   <span className="sr-only">Previous</span>
 </a>
 <a className="right carousel-control" href="#myCarousel" data-slide="next">
   <span className="glyphicon glyphicon-chevron-right"></span>
   <span className="sr-only">Next</span>
 </a>
</div>

);
}
}

export default Hero;
