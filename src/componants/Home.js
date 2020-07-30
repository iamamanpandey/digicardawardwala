import  React from 'react';
import './Home.css';

const Home = () =>{

    return(
      <div>
      <div class="container" id="home">
      <div className="row">
           
      <div class="gradient-border" id="box"></div>
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
      <div class="card card-home my-1">
      <div class="card-body">

        <h5 class="card-title text-center logot ">Awardwala</h5>
        <img src="logo.jpeg" className="logo"></img>
      

        <div class="contact-info-container">
        <div class="contact-info-wrapper">
            <a class="contact-piller-button call" target="_blank" href="tel:8595359556">
                <i class="fa fa-phone "></i>
            </a>
            <div class="contact-info">
                <div style={{marginBottom:'5px'}}><p target="_blank" href="tel:8595359556">+918595359556, +919891805316</p></div>
        
            </div>
        </div>
        <div class="contact-info-wrapper">
            <a class="contact-piller-button address" target="_blank" href="https://maps.app.goo.gl/Xf2WFNSW5EUin9BA8">
                <i class="fa fa-map-marker"></i>
            </a>
            <div class="contact-info">
                <p target="_blank" href="https://maps.app.goo.gl/Xf2WFNSW5EUin9BA8">J-71, Milap Market Beriwala Bagh, Behind Sports Complex, Hari Nagar, New Delhi - 110064</p>
            </div>
        </div>
        <div class="contact-info-wrapper">
            <a class="contact-piller-button whatsapp" target="_blank" href="https://wa.me/918595359556?text=Got reference from your Digital vCard. Want to know more about your products and services.">
                <i class="fa fa-whatsapp"></i>
            </a>
            <div class="contact-info">
                <p target="_blank" href="https://wa.me/918595359556?text=Got reference from your Digital vCard. Want to know more about your products and services.">+918595359556</p>
            </div>
        </div>
        <div class="contact-info-wrapper">
            <a class="contact-piller-button mail" target="_blank" href="mailto:awardwala@gmail.com">
                <i class="fa fa-envelope"></i>
            </a>
            <div class="contact-info">
                <p target="_blank" href="mailto:awardwala@gmail.com">awardwala@gmail.com</p>
            </div>
        </div>
        <div class="contact-info-wrapper">
            <p class="contact-piller-button website" target="_blank" href="http://www.awardwala.com">
                <i class="fa fa-globe"></i>
            </p>
            <div class="contact-info">
                <p target="_blank" href="http://www.awardwala.com">http://www.awardwala.com</p>
            </div>
        </div>
    </div>      
    <div className="swats">
     <input type='text'  placeholder="+91"></input>
     <br/>
    <button className="btn">share  on whatsapp</button>
    <br/>
    <br/>
    <button className="btn fa fa-book">add to phonebook</button>
    <br/>
    <button className="btn fa fa-share">share</button>
  </div>
    </div>
  

        <div class="social-menu">
  <ul>
    <li><a href="/"><i class="fa fa-facebook"></i></a></li>
    <li><a href="/"><i class="fa fa-twitter"></i></a></li>
    <li><a href="/"><i class="fa fa-instagram"></i></a></li>
    <li><a href="/"><i class="fa fa-linkedin"></i></a></li>
   </ul>
  </div>
   
    </div>
    </div>
      </div>
</div>
</div>
      
    );
}
export default Home;