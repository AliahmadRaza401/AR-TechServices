import React from 'react'
import web from "../src/images/h1.png";
import { NavLink } from 'react-router-dom';

const Common= (props) => {
 return(
  <>
    <section id="header" className="d-flex align-items-center">
    <div className="container-fluid ">
    <div className="row">
     <div className="col-10 mx-auto">
      <div className="row">
        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
          <h1> {props.name} <strong className="brand-name">  AR TechServices</strong></h1>
          <h2 className="my-3">
             <h2>we are the team of talented developer making website</h2>
          </h2>
          <div className="mt-3">
           <NavLink to= {props.visit} ><button class="btn-get-started"> {props.btname} </button> </NavLink >
          </div> 
        </div>
        
        <div className="col-lg-6 order-1 order-lg-2 header-img">
         <img src={props.imgsrc} id="home-img" className="img-fluid animated" alt="pic1"></img>
        </div>
        </div>
     </div>
    </div>
   </div>
    </section>
  </>
    
 );
}

export default Common;