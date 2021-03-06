import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {addToCart, upadateCart} from '../lib/redux/reducers/index'
import {useDispatch, useSelector} from 'react-redux'
import Banner from './Banner';
import '../css/Product.css'
import $ from 'jquery';

function Product(props) {
  const product = props.location.props;
  const dispatch = useDispatch();
  const [details,setDetails] = useState({quantity :1, size:'small'});
  const [prix_pot, updatePrixPot] = useState(product.price_small);
  const [image,updateImage] = useState(product.img);
  const [image1,updateImage1] = useState("https://cdn.pixabay.com/photo/2013/09/18/18/24/chocolate-183543_1280.jpg");
  const [image2,updateImage2] = useState("https://cdn.pixabay.com/photo/2015/03/26/23/09/cake-pops-693645_1280.jpg");
  const [image3,updateImage3] = useState("https://cdn.pixabay.com/photo/2018/06/29/08/15/doodle-3505459_1280.png");
  
  const handleOnClick1 = function(e){ updateImage(e.target.src); updateImage1(image);};
  const handleOnClick2 = function(e){ updateImage(e.target.src); updateImage2(image);};
  const handleOnClick3 = function(e){ updateImage(e.target.src); updateImage3(image);};
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
  const items = useSelector((state)=> state.items);
  var quantite_existante = 0;
  items.map(item => { if(item.id === product.id) quantite_existante = item.quantity;});

  const addCart = () => {
  const item = {id:product.id,name:product.name,price : product.price_small, img:product.img};


  if(quantite_existante === 0)  dispatch(addToCart({...item, ...details}));
  else dispatch(upadateCart(product.id,Number(details.quantity) + Number(quantite_existante)));
  };
  const handleOnChange = e => setDetails((prevState) =>({
    ...prevState, [e.target.name]:e.target.value,}));
      return(
        <><Banner /><section className="pt-5 pb-5">
          <div className="container">
            
            <div className="row">
            <div className="col-md-1 xs-1 ">
                  <img className="img-fluid img-thumbnail autre"  src={image1} onClick={handleOnClick1} />
                  <img className="img-fluid img-thumbnail autre"  src={image2} onClick={handleOnClick2} />
                  <img className="img-fluid img-thumbnail autre"  src={image3} onClick={handleOnClick3}/>
              </div>

              <div className="col-md-4 xs-4">
                  <img className="img-fluid img-thumbnail principal"  src={`${image}`} />
              </div>
              <div className="col-md-6 xs-6"> 
              <a class="lien">Accueil / Miels / Sapin</a> 
                <h2 className="mb-0 mt-0">Miel de {product.name}</h2>
                <h3 class="prix_pot">Prix du pot <span class="prix_unite">{prix_pot}</span> ???</h3>
                <h5 className="mt-3">Description</h5>
                <p> Le miel de {product.name} est un Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis velit vestibulum massa sollicitudin auctor. Cras ac venenatis orci. Ut consequat, purus ut ultrices ultricies, nisi sem ornare quam, sed ultricies mi nisl sit amet
                  purus.
                </p>
                <h5 className="mt-4">Conseil d'utilisation</h5>
                <p>Nous conseillons de le prendre avec du lait ou ...Suspendisse cursus erat sed sem sagittis cursus. Etiam porta sem malesuada magna mollis euismod.</p>
                <div className="row mt-4">
                <h2 class="prix_pot">Prix Total : <span class="prix_unite">{prix_total_pot}</span> ???</h2>
                  <div className="col-6">
                    <label for="size">Taille :</label>
                    <select name="size" id="taille" className="custom-select form-control  mb-4" onChange={change_taille}>
                      <option value="small">Petit 100g</option>
                      <option value="medium">Moyen 250g</option>
                      <option value="large">Grand 500g</option>
                    </select>
                  </div>
                  
                  <div className="col-6">
                    <label for="quantity">Quantit?? :</label>
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