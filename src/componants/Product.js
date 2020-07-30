import  React from 'react';
import './Home.css';

const Product = () =>{

    return(
      
      <div className="container" id="product">
      <div className="col-sm-9  col-lg-5 mx-auto">
      <div className="card ">
      <div className="card-body card-text-center">
      <h1 className="gallery">Services/Products</h1>
      <div class="card text-center my-2 " >
  <div class="card-body" style={{backgroundColor:'#34ebc9'}}>
    <h5 class="card-title">Corporate Gift</h5>
    <img class="card-img-top" src="corpgift.jpg" alt="Card  cap" />
    <a  class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card text-center my-2" >
  <div class="card-body" style={{backgroundColor:'#34ebc9'}}>
    <h5 class="card-title">Corporate trophy</h5>
    <img class="card-img-top" src="corporate.jpg" alt="Card  cap" />
    <a  class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card text-center my-2" >
  <div class="card-body " style={{backgroundColor:'#34ebc9'}}>
    <h5 class="card-title">Corporate wodden</h5>
    <img class="card-img-top" src="corpowooden.jpg" alt="Card  cap" />
    <a  class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <div class="card text-center my-2" >
  <div class="card-body " style={{backgroundColor:'#34ebc9'}}>
    <h5 class="card-title">Corporate Promotion trophy</h5>
    <img class="card-img-top" src="promo.jpg" alt="Card  cap" />
    <a  class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card text-center my-2" >
<div class="card-body " style={{backgroundColor:'#34ebc9'}}>
  <h5 class="card-title">Metal Big Sports Cup</h5>
  <img class="card-img-top" src="metalbig.jpg" alt="Card  cap" />
  <a  class="btn btn-primary">Go somewhere</a>
</div>  
</div>
<div class="card text-center my-2" >
<div class="card-body " style={{backgroundColor:'#34ebc9'}}>
  <h5 class="card-title">Premium tropphy</h5>
  <img class="card-img-top" src="premium.jpg" alt="Card  cap" />
  <a  class="btn btn-primary">Go somewhere</a>
</div>  
</div>
<div class="card text-center my-2">
<div class="card-body " style={{backgroundColor:'#34ebc9'}}>
  <h5 class="card-title">FibreTrophy</h5>
  <img class="card-img-top" src="fibretrophy.jpg" alt="Card  cap" />
  <a class="btn btn-primary">Go somewhere</a>
</div>  
</div>
</div>
</div>
    </div>
    </div>
       
    );
}
export default Product;