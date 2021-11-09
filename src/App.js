import logo from './logo.svg';
import './App.css';
import Banner from './js/Banner.js'
import BestVentes from './js/BestVentes'
import Shop from './js/Shop';
function App() {
  return (
    
    <div className="App">
      <section class="Top-page">
      <Banner/>
      <h1 id="titre_page">Miel By Nawfel</h1>
        <img id="logo" src="../images/bee.png" alt="Logo du Site"></img>
    
      </section>
    <BestVentes/>
      <Shop/>
      </div>
  );
}

export default App;
