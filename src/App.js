import logo from './logo.svg';
import './App.css';
import Banner from './js/Banner.js'
import ImageSlider from './js/ImageSlider.js'
import BestVentes from './js/BestVentes'
import Shop from './js/Huile';
import TypesDeProduits from './js/TypesDeProduits';
import Contact from './js/Contact';
import SliderData from './js/SliderData';

function App() {

  return (
    
    <div >
      <Banner/>

       
        <ImageSlider slides={SliderData}/>
        <div class="container bg-transparent " >
         {/* <div class="row py-4">
            <div class="col-lg-6 pt-5 text-center">
              <h1>Produits Bio sans cancérigène ! </h1>
              <button class="btn1 mt-2">En savoir plus</button>
            </div>
  </div>*/}
        </div>
    
 
    

   
<TypesDeProduits/>
<Contact/>
      </div>
  );
}

export default App;
