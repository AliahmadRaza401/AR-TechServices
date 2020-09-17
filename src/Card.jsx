import React from 'react'
import { NavLink } from 'react-router-dom';
import Sdata from "./Sdata";

const Card= (props) => {
 return(
  <>
     <div className="col-md-4 col-10 mx-auto">
          <div className="card">
               <img src={props.imgsrc} className="card-img-top" alt="img" /> 
                    <div className="card-body">
                          <h5 className="card-title font-weight-bold"> {props.title} </h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     </div>
            </div>
      </div>
  </>
    
 );
}

export default Card;