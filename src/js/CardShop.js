import React, { useState } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'
import {addToCart} from '../lib/redux/reducers/index'
import {useDispatch} from 'react-redux'
import '../App.css'
const CardImage = styled.img`
height: 200px;
width: 200px;
margin-left:10px;
margin-right:10px;
margin-top:10px;
transition: transform .2s;
&:hover{
    transform: scale(1.1);
}
`
function CardShop(props) {
  console.log(props);
  const dispatch = useDispatch();
  const [details,setDetails] = useState({quantity :1, size:'small'});
  const product = props.infos;
  const addCart = () => {
    const item = {id:product.id,name:product.name,price : product.price_small,img:product.img};
    dispatch(addToCart({...item, ...details}));
      console.log(item);
    };
    return(

            <div class="col-lg-3 " >
                <div class="card border-0 bg-light mb-2">
                <Link
              to={{
                pathname: "/product",
                props:  props.infos ,
              }}
              className=" font-weight-bold text-dark text-uppercase small"
            >
              <h3>{props.infos.name}</h3>
            </Link>
                    
        
                    <CardImage  src={props.infos.img}/>
                    <h5 id="price">A partir de {props.infos.price_small}€</h5>
                    <button type="button" class="btn btn-outline-dark" onClick={addCart} >AJOUTER AU PANIER</button>
                </div>
            </div>
    )
}
export default CardShop