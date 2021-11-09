
import React from "react";


function Filter(props){
    console.log(props.infos.name);
    return (<div >
        <input type="checkbox"/><label>{props.infos.name}</label>
    </div>
    );
      }
export default Filter;
