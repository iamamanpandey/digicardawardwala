import  React from 'react';
import './Home.css';
import './Gallery.css';

const Gallery = () =>{

    return(
      <div class="container" id="gallery">
      <div class="col-sm-9  col-lg-5 mx-auto">
      <div class="card  my-1">
      <div class="card-body">
      
        <h5 class="card-title text-center  gallery" >Gallery</h5>
      <div class="container-fluid">
      <div class="row">
        <div class="column">
          <img src="corpgift.jpg" alt="gallery" />
          <img src="corporate.jpg" alt="gallery" />
          <img src="corpowooden.jpg" alt="gallery" />
          <img src="fibre-plastic.jpg" alt="gallery"  />
          <img src="fibretrophy.jpg" alt="gallery" />
        </div>
        <div class="column">
          <img src=" metalbig.jpg" alt="gallery" />
          <img src="premium.jpg" />
          <img src="promo.jpg"  alt="gallery"/>
          <img src="trophy.jpg"  alt="gallery"/>
        </div>
        <div class="column">
          <img src="corpowooden.jpg" alt="gallery" />
          <img src="download.jpg"  alt="gallery"/>
          <img src="fibre-plastic.jpg" alt="gallery" />
          <img src="premium.jpg" alt="gallery" />
          <img src="metalbig.jpg"  alt="gallery"/>
        </div>
      </div>
    </div>
    </div>
      </div>
      </div>
      </div>
      );
}
export default Gallery;
