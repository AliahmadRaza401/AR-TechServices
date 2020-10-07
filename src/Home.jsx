import React from 'react'
import web from "../src/images/h1.png";
import { NavLink } from 'react-router-dom';
import Common from './Common';
import Services from "./Services";
import About from "./About";
import pic from '../src/images/about.png';
import Contact from './Contact'



const Home= () => {
 return(
  <>
    <Common 
       name="Grow your business with"
       imgsrc= {web}
       visit="/services"
       btname="Get Started"
    />

    <Services />
    <Common  
        name="We offer the Best affordable Responsive"
        imgsrc= {pic}
        visit="/contact"
        btname="Contact Now"
    />
    <Contact />
  </>
    
 );
}

export default Home;