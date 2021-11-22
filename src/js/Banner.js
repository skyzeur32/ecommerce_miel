import '../css/Banner.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {useSelector} from 'react-redux'

function CartDropdown({ show, handleOnClick }) {
  const items = useSelector((state)=> state.items);

  var prix_total = 0;
  items.map(item => {
    prix_total+=item.price*item.quantity;
    console.log(item.price);
  });
	return(
	<div onClick={handleOnClick} className={`dropdown-menu dropdown-menu-right p-3 ${show && 'show'}`} aria-labelledby="dropdownCart" style={{minWidth:'300px'}}>
	<div className="d-flex justify-content-between"> 
		<span>0</span>
		<span className="emphasis">{prix_total}</span>
	</div>
	<div className="dropdown-divider"></div>
	<ul className="shopping-cart-items pt-2 pl-0" aria-labelledby="dropdownCart">
		{items.map(item => {
			return(
			<li className="row mt-3">
				<div className="col-md-4 col-2">
					<img src={item.img} alt="" className="img-fluid rounded mb-2 shadow" />
				</div>
				<div className="col-8">
				<h6>
					<Link to={{
						pathname: "/product",
						props: { product: item },
					}}>{item.name}</Link>	
				</h6>
				<span className="text-muted">Quantité: {item.quantity}</span><br />
				<span className="emphasis">{item.price_small}</span></div>
			</li>)
		})}
	</ul>
	<Link to='/cart'  className="btn btn-md btn-block btn-orange mt-3" style={{margin: 0}}>view cart</Link>	
</div>)
}
function Banner() {
  const [show, setShow] = useState(false);
  const handleOnClick = () => setShow(!show);
  return (
    <div >
        <nav class="navbar navbar-expand-lg">
  <div class="container">
    <Link to="/" style={{ textDecoration: 'none' }}><a class="navbar-brand" href="#">Produit BIO</a></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="menu-demo2">
        <li class="nav-item">
          <a class="nav-link"  href="#">Accueil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Présentation</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Shop
          </a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"id="sous_shop">
            <li class="nav-item"><a class="nav-link"  href="#">Miels</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Huiles</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Savons</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Parfums</a></li>
        </ul>

        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <button onClick={() => setShow(!show)}>Panier</button>
      <li className="nav-item dropdown"  >
    
          <CartDropdown show={show} handleOnClick={handleOnClick}/>
		   </li>
      </ul>
  
      <form class="d-flex">
        <input class="px-2 search" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn0" type="submit">Search</button>

 
      </form>
    </div>
  </div>
</nav>
    
    </div>
  );
}

export default Banner;