import '../css/Banner.css';
import '../css/Navbar.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect} from 'react'
import {upadateCart} from '../lib/redux/reducers'

function CartDropdown({ show, handleOnClick }) {
  const items = useSelector((state)=> state.items);


  var nbr_articles = 0;
  var prix_total = 0;
  items.map(item => {
    prix_total+=item.price*item.quantity;
    nbr_articles+=Number(item.quantity);
    console.log(item.price);
  });
  
	return(
	<div  className={`dropdown-menu dropdown-menu-right p-3 ${show && 'show'}`} aria-labelledby="dropdownCart" style={{minWidth:'300px'}}>
  <div className="d-flex justify-content-between"> 
    <h3>Votre Panier</h3>

    <CloseIcon id="croix" className="icon" onClick={handleOnClick}></CloseIcon>
  </div>
  <div className="dropdown-divider"></div>
  <div className="d-flex justify-content-between"> 
		<span>{nbr_articles} articles</span>
		<span className="emphasis">{prix_total} €</span>
	</div>
	<div className="dropdown-divider"></div>
  <ul className="shopping-cart-items pt-2 pl-0" aria-labelledby="dropdownCart">
  {items.map(item => {
    return(<Ligne_Panier item={item}/>);
  })}
    </ul>
  <br/>
	<Link to='/cart' class="btn btn-success" >Commander</Link>	
</div>)
}

function Ligne_Panier(props){
 const item = props.item;
 const dispatch = useDispatch();
 const handleOnChange = (e) => dispatch(upadateCart(item.id,e.target.value));
  return(

    
    <li className="row mt-3">
      <div className="col-md-4 col-2">
      <Link to={{
          pathname: "/product",
          props: { product: item },
        }}>
        <img src={item.img} alt="" id="img_panier" className="img-fluid rounded mb-2 shadow" />
        </Link>	
      </div>
      <div className="col-8">
      <h6>
        <Link style={{textDecoration:"none"}}to={{
          pathname: "/product",
          props: { product: item },
        }}><span id="name_panier">{item.name}</span></Link>	
      </h6>
    
      <input type="number" id="p_q" value={item.quantity} onChange={handleOnChange} /> x
      <span> {item.price} €</span> = {item.quantity*item.price} €
      </div>
    </li>
  );
}
function Banner(props) {
  const [show, setShow] = useState(false);
  const handleOnClick = () => setShow(!show);
  const items = useSelector((state)=> state.items);
  var nbr_articles = 0;
  items.map(item => {
    nbr_articles+=Number(item.quantity);

  });
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">Navbar</a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
  );
}
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [show, setShow] = useState(false);
  const handleOnClick = () => setShow(!show);

  const items = useSelector((state)=> state.items);
  var nbr_articles = 0;
  items.map(item => {
    nbr_articles+=Number(item.quantity);

  });

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <div className="test">
    <nav>
      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
      <li className="items">Accueil</li>
      <li className="items">Présentation</li>
      <li className="items">Shop</li>
      <li className="items">Contact</li>
      <button onClick={toggleNav} className="caca">BTN</button>
      <ShoppingCartIcon id="shop_cart" className="icon" fontSize="large" onClick={() => setShow(!show)}></ShoppingCartIcon>
        <h5 id="nbr_articles">{nbr_articles}</h5>
        
        
      <div className="nav-item dropdown"  >
    
          <CartDropdown show={show} id="panier" handleOnClick={handleOnClick}/>
		   </div>
    </ul>
      )}


    </nav>
    </div>
  )
}
