import React from 'react'
import { NavLink } from 'react-router-dom';
import Card from './Card';
import Sdata from './Sdata';
const Services= () => {
 return(
  <>
    <div className=" services" >
       <h1 className="services" id="">
         Our Services
       </h1>

       <div className="container-fluid mb-5">
          <div className="row gy-4">
              <div className="col-10 mx-auto mb-50">
                  <div className="row">
                      {
                        Sdata.map( (val, ind) => {
                             return <Card  key={ind}
                                imgsrc= {val.imgsrc}
                                title = {val.title}
                              />
                        })
                      }
                  </div>
              </div>
          </div>
       </div>
    </div>
  </>
    
 );
}

export default Services;