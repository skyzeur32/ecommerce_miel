import '../css/BestVentes.css';
import TypeProduits from '../data/TypeProduits'
import Card from './Card';
import { Link } from 'react-router-dom';
function TypesDeProduits() {

  return (
    <div >
        <section  className="types">
          <div class="container py-5">

          <div class="row py-5 m-auto">
              <div class="col-lg-5">
                <h1 id="titre_types">Nos types de Produits</h1>
                
              </div>
            </div>

            <div class="row">
              
              {TypeProduits.map((infos) => (
				        <Card infos = {infos}/>
                
				        ))}
    
            </div>

          </div>

            
           
        </section>
    
    </div>
  );
}

export default TypesDeProduits;