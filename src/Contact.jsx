import React, {useState} from 'react';

const Contact= () => {
   const [data, setData] = useState({
     name:'',
     phone:'',
     email: '',
     message: '',
   });

 const InputEvent = (event) => {
     const {name, value} = event.target;
     setData( (preval) =>{
         return {
             ...preval,
             [name]:value
         };
     });
 };  
 const formSubmit = (e) => {
    //e.preventDefault();
    alert(
      'Your Message Submit Successfully '
    );
 };



 return(
  <>
     <div className="my-5">
       <h1 className="text-center" > Contact Us </h1>
     </div>
     <div className="container contact-div">
         <div className="row">
            <div className="col.md-6 col-8 mx-auto">
            <form  onSubmit={formSubmit} >
                <div className="form-group">
                  <label for="exampleInputEmail1"> <b>Full Name</b></label>
                  <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter Name"
                    name="name"
                    value={data.name}
                    onChange={InputEvent}  
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1"><b>Phone Number</b></label>
                  <input type="number" className="form-control" id="exampleInputEmail1"  placeholder="Enter Phone#" 
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent} 
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1"><b>EMail Address</b></label>
                  <input type="email" className="form-control" id="exampleInputPassword1" placeholder="name@gmail.com"
                     name="email"
                     value={data.email}
                     onChange={InputEvent} 
                  />
                </div>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1"><b>Message</b></label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                    name="message"
                    value={data.message}
                    onChange={InputEvent} 
                  ></textarea>
                </div>
                <div className="col-12 form-group">
                    <button type="submit" className="btn btn-outline-primary">Submit Form</button>
                </div>
              </form>
            </div>
         </div>
     </div>
  </>
    
 );
}

export default Contact;