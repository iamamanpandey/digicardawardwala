import React from 'react';
import Footer from './Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './componants/About';
import Home from './componants/Home';
import Contact from './componants/Contact';
import Product from './componants/Product';
import Gallery from './componants/Gallery';
import Copyright from './componants/Copyright';
function App() {
  return (
    <div>
    <Home/>
    <About/>
    <Product/>
    <Gallery/>
    <Contact/>
    <Copyright/>
     <Footer/>
     
    </div>
  );
}

export default App;
