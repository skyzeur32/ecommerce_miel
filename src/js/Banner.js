import '../css/Banner.css';

function Banner() {
  return (
    <div >
        
        <header class="Banniere">
        <div id="recherche"><label id="text_recherche">Recherche <input type="text" class="recherche"></input></label></div>
        <nav class="Menu">
        
            <div class="btn-menu" >Presentation</div>
            <div  class="btn-menu" id="best_v" ><a href="http://localhost:3000/#best" class="lien_menu">Meilleurs ventes</a></div>
            
            <div href="#shop" class="btn-menu">Shop</div>
            <div class="btn-menu">Contact</div>
      
   
        </nav>
        
    </header>
    
    </div>
  );
}

export default Banner;