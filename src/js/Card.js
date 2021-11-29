import { Link } from "react-router-dom";
import '../css/Card.css';

import styled from 'styled-components'
function Card(props){

    const CardImage = styled.img`
    height: 400px;
    width: 250px;
    margin-left:10px;
    margin-right:10px;
    margin-top:10px;
    transition: transform .2s;
    &:hover{
        transform: scale(1.08);
    }
    `
console.log("OK une carte de plus");
var nom=props.infos.name;
    return   (
    <div class="col-lg-3">
        <div class="card border-0 bg-light mb-2">
            <div class="card-body"> 
                <h3>{props.infos.name}</h3>
                <Link to={{      pathname: "/Shop_"+nom,
                    props: { miel: props.infos }
                }}> 
                <CardImage src={props.infos.img} />
                </Link>
            </div>
            </div>

    </div>);
}

export default Card;