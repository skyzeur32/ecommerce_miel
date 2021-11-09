import styled from 'styled-components'
import MielList from '../data/MielList'
import $ from "jquery";
import Card from './Card';
const CardImage = styled.img`
    height: 120px;
    width: 250px;
    margin-left:10px;
    margin-right:10px;
    margin-top:10px;
`
const infos = {
    id : 1,
    name:"Acacia",
    price_small : 12,
    price_medium : 15,
    price_big : 20,
    country:'France',
    isBestSale : true
} 


function Drapeau(props, { updateCart }){
    function affichage(nom){
        $(".Filtre_pays").empty();
        $(".Filtre_pays").append(<Card infos = {infos}/>);
        $("#btn_back").show();
     updateCart(nom);
    }
return ( <><div class="Pays r1">

<CardImage src={props.infos.img} onClick={() => affichage(props.infos.name)}  />

</div></>);
}

export default Drapeau;