import React, { useState } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'
import {addToCart,upadateCart} from '../lib/redux/reducers/index'
import {useDispatch,useSelector} from 'react-redux'
import '../App.css'
import $ from 'jquery';
const CardImage = styled.img`
height: 200px;
width: 200px;
margin-left:10px;
margin-right:10px;
margin-top:10px;
transition: transform .2s;
@media (max-width: 1250px) {
  height: 150px;
width: 150px;
}
&:hover{
    transform: scale(1.1);
}

`
function CardShop(props) {
  console.log(props);
  const dispatch = useDispatch();
  const [details,setDetails] = useState({quantity :1, size:'small'});
  const product = props.infos;
  const [show, setShow] = useState(false);
  const items = useSelector((state)=> state.items);
  var quantite_existante = 0;
  items.map(item => { if(item.id === product.id) quantite_existante = item.quantity;});

  const addCart = () => {
  const item = {id:product.id,name:product.name,price : product.price_small, img:product.img};


  if(quantite_existante === 0)  dispatch(addToCart({...item, ...details}));
  else dispatch(upadateCart(product.id,Number(details.quantity) + Number(quantite_existante)));
  };


    return(

            <div class="col-lg-3 col-md-4 col-sm-6" >
                <div class="card border-0 bg-light mb-2" id="card">
                <Link
              to={{
                pathname: "/product",
                props:  props.infos ,
              }}
              className=" font-weight-bold text-dark "
            >
              <h3>{props.infos.name}</h3>
            
                    
        
                    <CardImage  src={props.infos.img}/>
            </Link>
                    <h5 id="price">A partir de {props.infos.price_small}€</h5>
                    <button type="button" class="btn btn-outline-dark" onClick={addCart} >AJOUTER AU PANIER</button>
                </div>
            </div>
    )
}
export default CardShop