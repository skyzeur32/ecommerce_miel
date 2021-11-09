import '../css/Shop.css';
import Filter from './Filter';
import  Card  from './Card';
import { DrapeauList } from '../data/DrapeauList';
import MielList from '../data/MielList'
import React, { useEffect, useState } from "react";
import $ from "jquery";

function Shop() {

    const [filtre, updateFiltre] = useState("Pays");
    const [sliderValue,setSliderValue]=useState(10);
    const choix_filtre = function(){
    updateFiltre($("#select_filtre option:selected").text());
    
     console.log(filtre);
    }
    const BestMielList = MielList.filter(function (miel) {
      return miel.isBestSale === true
    });
    console.log(BestMielList)
  return (

        
        <section class="shop" id="shop">
    <h2 class="titre_section">Tous Nos miels</h2>
    <div className="page_shop">
  
        <div className="filtres">
          <div>
              Prix
              <input className="slider" step="1" min="0" max="100" value={sliderValue} type="range" 
           onChange={(e) => 
               {
                   let value = e.target.value
                   setSliderValue(value)
               } 
            } />
            </div>
            <div className="filtre">
              <h3 className="titre_filtre">Pays</h3>
              {DrapeauList.map((infos) => (
                    <Filter infos = {infos}/>
                    ))}
            </div>

            <div className="filtre">
            <h3 className="titre_filtre">Texture</h3>
            {DrapeauList.map((infos) => (
                    <Filter infos = {infos}/>
                    ))}
            </div>

            <div className="filtre">
              <h3 className="titre_filtre">Couleur</h3>
              {DrapeauList.map((infos) => (
              <Filter infos = {infos}/>
              ))}
            </div>

            
        </div>

        
        <div id="fonctionne">
          <div className="search_and_range">
            <div>
              
              <input id="search" type="text" placeholder="Recherche ton miel"/>
              <button id="btn_recherche">Rechercher</button>
            </div>

          </div>
          <div className="resultat">
         
          {MielList.map((infos) => (
				        <Card infos = {infos}/>
				        ))}
   
          </div>
        </div>
  

    
    </div>
</section>
    

  );
}

export default Shop;