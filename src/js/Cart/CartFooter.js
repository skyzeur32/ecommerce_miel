import React from 'react';
import { Link } from "react-router-dom";
import '../../App.css'

const styles = {
  disabled: {
    cursor: 'not-allowed', 
    opacity: 0.5
  }
}
  
function CartFooter(props) {

    return(
      <>
        <div id="champs_Total">
          <h3>Prix Total :</h3>
          <h1>{props.prix_total} €</h1>
          
   
        </div>
        <div className="btn_Cart">
        <Link  className="btn btn-primary btn-lg" to="/">
           Retour à la boutique
        </Link>
        <Link className="btn btn-success btn-lg" to="/checkout">
          Payer votre panier
        </Link>
        </div>
     
      </> 
    )
  }
  export default CartFooter