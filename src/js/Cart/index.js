
import React from 'react';
import {useSelector} from 'react-redux'
import CartFooter from './CartFooter'
import { Table } from '../components'
import Row from './Row';

function Cart() {
  const items = useSelector((state)=> state.items);
  var nbr_articles = 0;
  var prix_total = 0;
  items.map(item => {
    prix_total+=item.price*item.quantity;
    nbr_articles+=Number(item.quantity);
    console.log(item.price);
  });
  return (
    <section className="pt-5">
    <Table heading="Mon panier" subheading={"Vous avez " + nbr_articles + " articles dans votre panier"}>
      <tbody>
        {items.map(item => (
          <Row produit={item} />)
        )}

      </tbody>


    </Table>
    <div className="col-md-8 offset-2">
    <CartFooter prix_total = {prix_total} />
    </div>
    </section>
  );
}
export default Cart;
