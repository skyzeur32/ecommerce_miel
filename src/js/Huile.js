import '../css/Achat.css';
import Filtre from './Filtre';
import React, { useEffect, useState } from "react";
import Banner from './Banner'
import $ from "jquery";
import Miels from './Miels';

function Huile(props) {
    const nom = props.location.props.miel.name;
  return  (
    <>
      <section className="Achat">
      <Banner />
      <h1>Bienvenue dans l'espace Huile</h1>
      
      </section>

    </>
  );
}

export default Huile;