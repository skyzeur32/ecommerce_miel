import '../css/BestVentes.css';
import MielList from '../data/MielList'
import Card from './Card';

function BestVentes() {
   const BestMielList = MielList.filter(function (miel) {
    return miel.isBestSale === true
  });
  return (
    <div >
        <section id="best" class="Meilleurs-ventes">
          <div class="container py-5">

          <div class="row py-5 m-auto">
              <div class="col-lg-5">
                <h1>Meilleures ventes</h1>
                
              </div>
            </div>

            <div class="row">
              
              {BestMielList.map((infos) => (
				        <Card infos = {infos}/>
                
				        ))}
     

         
            </div>

          </div>

            
           
        </section>
    
    </div>
  );
}

export default BestVentes;