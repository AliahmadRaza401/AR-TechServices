import React from 'react'
import web from "../src/images/h1.png";
import { NavLink } from 'react-router-dom';
import Common from './Common';
import pic from '../src/images/about.png';

const About= () => {
 return(
  <>
    <Common  
        name="Welcome to About page"
        imgsrc= {pic}
        visit="/contact"
        btname="Contact Now"
    />
  </>
    
 );
}

export default About;