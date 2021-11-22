import '../css/Shop.css';
import Filter from './Filter';
import  Card  from './Card';
import { DrapeauList } from '../data/DrapeauList';
import MielList from '../data/MielList'
import React, { useEffect, useState } from "react";
import $ from "jquery";
function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
Array.prototype.unique = function() {
  var a = this.concat();
  for(var i=0; i<a.length; ++i) {
      for(var j=i+1; j<a.length; ++j) {
          if(a[i] === a[j])
              a.splice(j--, 1);
      }
  }

  return a;
};

function Shop() {

    const [filtre, updateFiltre] = useState("Pays");
    const [sliderValue,setSliderValue]=useState(10);
    const [total,setTotal]=useState(10);
    const [ChoixMielList,setChoixMielList] = useState(MielList);
    const [tabCase, SetTabCase] = useState([]);
    const [filters,setFilters] = useState({
      drapeaux:[],
      price: []
    })


  const renitialise = () => {
    
    var etat = $("#checkdrapeau0").get(0).checked;
    SetTabCase([]);

    if(etat){
      setChoixMielList(MielList);
      var nbrCheck = MielList.length;
      for(var i=1;i<=nbrCheck;i++){
        $("#checkdrapeau"+i).get(0).checked =false;
      }
    }

  }

var test = [];
  const handleFilters = (filters,category) => {
    if(filters.etat)
      $("#checkdrapeau0").get(0).checked =false;

    test= test.concat(tabCase).unique();
    if(filters.etat===true && test.indexOf(filters.id)=== -1){
      test.push(filters.id);
    
    }
    if(filters.etat===false){
      console.log("avant decoche ==>");
      console.log(tabCase);
      test.splice(test.indexOf(filters.id),1);
      console.log("après decoché");
      console.log(test);

    }
   
    
    SetTabCase(test);
    setTotal(entierAleatoire(1,10));
    console.log(test);

    setChoixMielList(MielList.filter(miel => test.includes(miel.id_contry)));
    if(test.length===0){
      $("#checkdrapeau0").get(0).checked =true;
      setChoixMielList(MielList);
    }
  }

  


  

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
            <div className="filtre" id="filtre_p">
              <h3 className="titre_filtre">Pays</h3>
              <div><input id="checkdrapeau0" type="checkbox" onChange={renitialise} /><label>Tous les Pays</label></div>
              {DrapeauList.map((infos) => (
                    <Filter infos = {infos} handleFilters={filters => handleFilters(filters,"drapeaux")}/>
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
         
          {ChoixMielList.map((infos) => (
				        <Card infos = {infos}/>
				        ))}
   
          </div>
        </div>
  

    
    </div>
</section>
    

  );
}

export default Shop;