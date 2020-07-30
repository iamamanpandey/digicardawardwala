import React from 'react';
  import {Link} from 'react-scroll';

const Nav=()=>{
return(
  <div class="footer">
  <ul class="footer-menu">
      <li>
          <Link to="home" smooth={true} duration={1000} class="footer-menu-link">
              <i class="footer-menu-icon fa fa-home"></i>
              <div class="footer-menu-text">HOME</div>
          </Link>
      </li>
      <li>
              <Link  to= "about"  smooth={true} duration={1000} class="footer-menu-link" >
                  <i class="footer-menu-icon fa fa-briefcase"></i>
              <div class="footer-menu-text">ABOUT US</div>
              </Link>
          </li>
      <li>
              <Link to="product"  smooth={true} duration={1000} class="footer-menu-link" >
                  <i class="footer-menu-icon fa fa-shopping-cart"></i>
              <div class="footer-menu-text">PRODUCTS</div>
              </Link>
          </li>
      
      <li>
              <Link to="gallery" smooth={true} duration={1000} class="footer-menu-link" >
                  <i class="footer-menu-icon fa fa-picture-o"></i>
                  <div class="footer-menu-text">GALLERY</div>
              </Link>
          </li>
          
    
      <li>
              <Link  to="contact" smooth={true} duration={1000} class="footer-menu-link" >
                  <i class="footer-menu-icon fa fa-comment"></i>
                  <div class="footer-menu-text">ENQUIRY</div>
              </Link>
          </li>
  </ul>
</div>
);
}
export default  Nav;
