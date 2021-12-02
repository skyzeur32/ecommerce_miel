import '../css/Miels.css';
import '../App.css'
import Filtre from './Filtre';
import React, { useEffect, useState } from "react";
import Banner from './Banner'
import $ from "jquery";
import CardShop from './CardShop';
import MielList from '../data/MielList'
import Filter from './Filter';
import DrapeauList from '../data/DrapeauList';

function Miels(props) {
  const [filtre, updateFiltre] = useState("Pays");
  const [sliderValue,setSliderValue]=useState(10);
  const [total,setTotal]=useState(10);
  const [ChoixMielList,setChoixMielList] = useState(MielList);
  const [tabCase, SetTabCase] = useState([]);
  const [etat,setEtat] = useState(true);
  const [filters,setFilters] = useState({
    drapeaux:[],
    price: []
  })

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
const renitialise = () => {
  
  var etat = $("#checkdrapeau0").get(0).checked;
  SetTabCase([]);

  if(etat){
    console.log("oketat");  
    setChoixMielList(MielList);
    var nbrCheck = MielList.length;
    for(var i=1;i<=nbrCheck;i++){
      $("#checkdrapeau"+i).get(0).checked =false;
    }
  }

}

var test = [];
  const handleFilters = (filters,category) => {
console.log(category);
    if(filters.etat)
      setEtat(false);

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
    setTotal(4);
    console.log(test);
    console.log(ChoixMielList);
    setChoixMielList(MielList.filter(miel => test.includes(miel.id_contry)));
    if(test.length===0){
      setEtat(true);
      setChoixMielList(MielList);
    }
  }

  return  (
    <><Banner nombre = {0} /><div class="container py-2" id="container_miel">

      <h1>Bienvenue dans l'espace Miel</h1>

      <div class="row">
        <div class="col-md-2 " >
        <div id="filtre">
            <div id="Filtre_pays">
          
            <h4>Pays</h4>
            <div class="libelle_check"><input id="checkdrapeau0" enabled="disenabled" handleFilters={filters => handleFilters(filters, "pays0")} checked={etat} type="checkbox" className="input" /><label>Tous les Pays</label></div>

              {DrapeauList.map((infos) => (
                <Filter infos={infos} handleFilters={filters => handleFilters(filters, "drapeaux")} />
              ))}
            </div>
            <div id="Filtre_textures">
            <h4>Texture</h4>
              <div class="libelle_check"><input id="Texture0" type="checkbox" className="input" /><label>Toutes les textures</label></div>
              {DrapeauList.map((infos) => (
                <Filter infos={infos} handleFilters={filters => handleFilters(filters, "drapeaux")} />
              ))}
            </div>

            <div id="Filtre_couleurs">
            <h4>Couleur</h4>
              <div class="libelle_check"><input id="Texture0" type="checkbox" className="input" /><label>Toutes les couleurs</label></div>
              {DrapeauList.map((infos) => (
                <Filter infos={infos} handleFilters={filters => handleFilters(filters, "drapeaux")} />
              ))}
            </div>
          </div>
        </div>
        <div class="col-md-9" id="produit_miels">
          <div class="row">
            {ChoixMielList.map((infos) => (
              
              <CardShop infos = {infos}/>
            ))}
          </div>
        </div>
      </div>


    </div></>
  );
}

export default Miels;