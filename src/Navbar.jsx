import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar= () => {
 return(
  <>
   <div className="container-fluid nav-bg" id="mainheader">
    <div className="row">
     <div className="col-12 ">

   
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
 <NavLink className="navbar-brand" to="/">AR TechServices </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
       <NavLink  className="nav-link" to="/">Home <span class="sr-only">(current)</span> </NavLink>
      </li>
      <li className="nav-item">
       <NavLink activeClassName="menu_active" className="nav-link" to="/services">Services </NavLink>
      </li>
      <li className="nav-item">
       <NavLink activeClassName="menu_active" className="nav-link" to="/about">About  </NavLink>
      </li>
      <li className="nav-item">
       <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact Us </NavLink>
      </li>
   
    </ul>
  </div>
</nav>
</div>
    </div>
   </div>

  </>
    
 );
}

export default Navbar;