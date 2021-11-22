
import React, { useState } from "react";
import $ from "jquery";
import '../css/Achat.css';
function Filter(props){
    const [Checked, SetChecked] = useState({id:props.infos.id,etat:true});
    const [ListChecked, SetListChecked] = useState([]);

    const handleToggle = (value) => {
      
        var etat = $("#checkdrapeau"+value).get(0).checked;
    
        SetChecked({id:value,etat:etat});

        props.handleFilters({id:value,etat:etat});
        const currentIndex = ListChecked.indexOf(value);
        const newChecked = [...ListChecked];
        if(currentIndex===-1){
            //on ajoute
            newChecked.push(value);
        }
        else{
            // on enleve
            newChecked.splice(currentIndex,1);
        }
     
        SetChecked(newChecked);
      
        //props.handleFilters(newChecked);
    }
 
    return (<div >
        <div class="libelle_check"><input id={"checkdrapeau" + props.infos.id} className="input" type="checkbox" onChange={()=>handleToggle(props.infos.id)} key="props.infos.id"/><label>{props.infos.name}</label></div>
    </div>
    );
      }
export default Filter;
