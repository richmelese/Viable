import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Homeservice from './Homeservice';
import Newbg from "../../Asset/card1.png";
import cards2 from "../../Asset/card2.png";
import cards4 from "../../Asset/card3.png";

const Card = () => {
 return(
 <div class="card" >
 <img className="blog-imgs" src={Newbg} alt="" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
 );
  
};

export default Card;
