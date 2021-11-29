import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {addToCart} from '../lib/redux/reducers/index'
import {useDispatch} from 'react-redux'
import Banner from './Banner';
import '../css/Product.css'
import $ from 'jquery';
function Product(props) {
  const product = props.location.props;
  const dispatch = useDispatch();
  const [details,setDetails] = useState({quantity :1, size:'small'});
  const [prix_pot, updatePrixPot] = useState(product.price_small);
var prix_small = product.price_small;
var prix_medium = product.price_medium;
var prix_big = product.price_big;

const [prix_total_pot, updatePrixTotalPot] = useState(prix_small);
  const change_taille = function(){

    if($("#taille option:selected").text() == "Petit 100g"){
      updatePrixPot(prix_small);
     updatePrixTotalPot(prix_small*details.quantity);
     // updateTaillePot(100);
    }
   
    if($("#taille option:selected").text() == "Moyen 250g"){
      updatePrixPot(prix_medium);
     updatePrixTotalPot(prix_medium*$("#quantity").val());
     // updateTaillePot(250);
    }
  
    if($("#taille option:selected").text() == "Grand 500g"){
      updatePrixPot(prix_big);
    updatePrixTotalPot(prix_big*$("#quantity").val());
    //  updateTaillePot(500);
    }
  
  }
  const change_quantite = function(){
    details.quantity = $("#quantity").val();
    updatePrixTotalPot(prix_pot*$("#quantity").val());
  }
  const addCart = () => {
  const item = {id:product.id,name:product.name,price : product.price_small, img:product.img};
  dispatch(addToCart({...item, ...details}));
    console.log(item);
  };
  const handleOnChange = e => setDetails((prevState) =>({
    ...prevState, [e.target.name]:e.target.value,}));
      return(
        <><Banner /><section className="pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4 ">
                  <img className="img-fluid img-thumbnail"  src={`${product.img}`} />
              </div>
              <div className="col-md-6"> 
              <a class="lien">Accueil / Miels / Sapin</a> 
                <h2 className="mb-0 mt-0">Miel de {product.name}</h2>
                <h3 class="prix_pot">Prix du pot <span class="prix_unite">{prix_pot}</span> €</h3>
                <h5 className="mt-3">Description</h5>
                <p> Le miel de {product.name} est un Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis velit vestibulum massa sollicitudin auctor. Cras ac venenatis orci. Ut consequat, purus ut ultrices ultricies, nisi sem ornare quam, sed ultricies mi nisl sit amet
                  purus.
                </p>
                <h5 className="mt-4">Conseil d'utilisation</h5>
                <p>Nous conseillons de le prendre avec du lait ou ...Suspendisse cursus erat sed sem sagittis cursus. Etiam porta sem malesuada magna mollis euismod.</p>
                <div className="row mt-4">
                <h2 class="prix_pot">Prix Total : <span class="prix_unite">{prix_total_pot}</span> €</h2>
                  <div className="col-6">
                    <label for="size">Taille :</label>
                    <select name="size" id="taille" className="custom-select form-control  mb-4" onChange={change_taille}>
                      <option value="small">Petit 100g</option>
                      <option value="medium">Moyen 250g</option>
                      <option value="large">Grand 500g</option>
                    </select>
                  </div>
                  
                  <div className="col-6">
                    <label for="quantity">Quantité :</label>
                    <input value={details.quantity} id="quantity" name="quantity" type="number" className="form-control quantity  mb-4" onChange={change_quantite} />
                  </div>
                </div>
                <div className='row'>
                <div className="col-6">
                  <button  type="button" class="btn btn-outline-dark" onClick={addCart} >AJOUTER AU PANIER</button>
                  
                </div>
                <div className="col-6">
                  <button  type="button" class="btn btn-outline-success" onClick={addCart} >ACHETER DIRECTEMENT</button>
                  
                </div>
                </div>
              </div>
            </div>

          </div>
        </section></>
    )
}
export default Product