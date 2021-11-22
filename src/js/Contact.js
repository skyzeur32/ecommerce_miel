import { Link } from "react-router-dom";
import '../css/Contact.css'
function Contact(){

 return(
 <section className="page_contact">
   

   <div class="formulaire">
  <h1 id="titre_contact">Formulaire de contact</h1>
  <form>
    <label>Nom</label><input type="text" placeholder="Votre nom"></input>

    <label>Prénom</label><input type="text" placeholder="Votre prénom"></input>

    <label>Adresse mail</label><input type="text" placeholder="Votre adresse mail"></input>

    <label>Message</label><textarea type="text" placeholder="Votre Message"></textarea>

    <button type="button" class="btn btn-outline-primary">Envoyer</button>
    
  </form>
</div>


     
 </section>);
}

export default Contact;