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
            
            <h2 class="titre_section">Meilleurs ventes</h2>
            
            <div class="best-miels">

                {BestMielList.map((infos) => (
				        <Card infos = {infos}/>
                
				        ))}
                
            </div>
           
        </section>
    
    </div>
  );
}

export default BestVentes;