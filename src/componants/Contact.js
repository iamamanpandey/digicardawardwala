import React from 'react';
import './Contact.css';

const Contact =()=>{
 
    return(
   <div className="container bot" id="contact" >
   <div className="row">
   <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
   <div class="card card-home my-1">
   <div class="card-body">
    <h1 className="gallery">Contact Us</h1>
    <div class="txtb">
      <label>Full Name :</label>
      <input type="text" name="" value="" placeholder="Enter Your Name" />
    </div>

    <div class="txtb">
      <label>Email :</label>
      <input type="email" name="" value="" placeholder="Enter Your Email" />
    </div>

    <div class="txtb">
      <label>Phone Number :</label>
      <input type="text" name="" value="" placeholder="Enter Your Phone Number"/>
    </div>

    <div class="txtb">
      <label>Message :</label>
      <textarea></textarea>
    </div>
    <a class="btn">Send</a>
  </div>
      </div>
      </div>
      </div>
</div>
    );

}
export default Contact;