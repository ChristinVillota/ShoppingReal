import React, { Component } from 'react';
import galaxy from './images/galaxy.png';

export default class Home extends Component {
  render() {
        return (

        <div className="container mt-1">
        <div id="myCarousel" class="carousel slide">
        
        <center>
        <div className="carousel-inner">
            <div className="carousel-item active">
                 <img src={galaxy} alt="shoes" width="1100"  height="100%"></img>
            </div>
            </div>
           </center>
        </div>
      </div>
    )
  }
}
