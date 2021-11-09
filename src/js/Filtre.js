import '../css/Filtre.css';
import { mielList } from '../data/MielList';
import $ from 'jquery'
import Drapeau  from './Drapeau';
import { DrapeauList } from '../data/DrapeauList';
import { useState } from 'react';

function Filtre(props) {
    const [cart, updateCart] = useState("France")
const affichage = function(){
    $(".Filtre_pays").empty();
    $(".Filtre_pays").append("<a class='miel Acacia'></a>");
    $("#btn_back").show();
}
  if(props.filtre == "Pays"){
    return (
    <div class="Filtre_pays" key='uniqueKey'>
        
        {DrapeauList.map((infos) => (
				        <Drapeau infos = {infos} updateCart={updateCart}/>
				        ))}

        

    </div>
    

  );
    }
    else if(cart == "France"){
        return (
        <div class="Filtre_pays" key='uniqueKey'>
                <h3>TOZ</h3>

            

        </div>
        

        );
        }
    else if(props.filtre == "Aucun"){
        console.log("Aucun");
        $(".Filtre_pays").empty();
        return(
      <div class="Filtre_Saveur" key='uniqueKey2'>
          

          {mielList.map(({ id,name, country, bestSale }) => (
					<a class={"miel "+name} ></a>
				))}
  
  
  
      </div>
  );
    }
    else if(props.filtre == "Texture"){
        return(
      <div class="Filtre_Texture">
          
      <div class="Saveur r1">
          <h3>Liquide</h3>
      </div>
      <div class="Saveur r1">
        <h3>Cremeux</h3>
      </div>

  
  
      </div>
  );
    }
  else{
      return(
    <div class="Filtre_Saveur">
        
    <div class="Saveur r1">
        <a class="s s1"></a>
    </div>
    <div class="Saveur r1">
        <a class="s s2"></a>
    </div>
    <div class="Saveur r1">
        <a class="s s3"></a>
    </div>


    </div>
);
  }
}

export default Filtre;