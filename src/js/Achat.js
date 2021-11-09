import '../css/Achat.css';
import Filtre from './Filtre';
import React, { useEffect, useState } from "react";
import Banner from './Banner'
import $ from "jquery";

function Achat(props) {

    const nom = props.location.props.miel.name;
    console.log()
    const prix_small = props.location.props.miel.price_small;
    const prix_medium = props.location.props.miel.price_medium;
    const prix_big = props.location.props.miel.price_big;


  const [taille_pot, updateTaillePot] = useState(100);
  const [prix_pot, updatePrixPot] = useState(prix_small);
  const [prix_total_pot, updatePrixTotalPot] = useState(prix_small);
const change_taille = function(){
  console.log($("#taille option:selected").text());
  if($("#taille option:selected").text() == "Petit 100g"){
    updatePrixPot(prix_small);
    updatePrixTotalPot(prix_small*$("#quantity option:selected").text());
    updateTaillePot(100);
  }
 
  if($("#taille option:selected").text() == "Moyen 250g"){
    updatePrixPot(prix_medium);
    updatePrixTotalPot(prix_medium*$("#quantity option:selected").text());
    updateTaillePot(250);
  }

  if($("#taille option:selected").text() == "Grand 500g"){
    updatePrixPot(prix_big);
    updatePrixTotalPot(prix_big*$("#quantity option:selected").text());
    updateTaillePot(500);
  }

}
const change_quantite = function(){
  updatePrixTotalPot(prix_pot*$("#quantity option:selected").text());
}
  return  (
    <>
      <section className="Achat">
      <Banner />
    
        <div className="container">
          <div className="other_images">
              <a id="img_1" className="o_img"></a>
              <a id="img_2" className="o_img"></a>
              <a id="img_3" className="o_img"></a>
          </div>
          <a class="miel-achat" ></a>
          <div className="right">
            <div className="description">
              <h2>Miel de {nom} - {taille_pot}g</h2>
              <h3>Prix du pot : {prix_pot}€</h3>
              <p>Le miel d'acacia est un miel Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                   eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident,
                 sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


            </div>
            <div className="prix_total"><h3>Prix total : {prix_total_pot}€</h3></div>
            <div className="interaction">
              <div className="size_and_quantity">
                <div className="Taille">
                  Taille :
                    <select id="taille" className="select_interaction" onChange={change_taille}>
                      <option>Petit 100g</option>
                      <option>Moyen 250g</option>
                      <option>Grand 500g</option>
                    </select>
                  </div>
                  <div className="Quantite">  Quantité : 
                    <select id="quantity" className="select_interaction" onChange={change_quantite}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                    </div>
              </div>
              <div className="add_and_achat">
                <button id="add_panier">Ajouter au panier <img width="25px" src="https://cdn.pixabay.com/photo/2021/09/13/22/02/add-6622547_1280.png"></img></button>
              
                <button id="buy_direct">Acheter directement</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer ></footer>
    </>
  );
}

export default Achat;