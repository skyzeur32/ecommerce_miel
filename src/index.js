import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./lib/redux/reducers"
import reportWebVitals from './reportWebVitals';
import Shop from './js/Huile';
import Miels from './js/Miels';
import Huile from './js/Huile';
import Product from './js/Product'


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <Router>

      <Route exact path="/">
        <App />
      </Route>


      <Route path="/Shop" render={(props) => <Shop {...props} />} />
      <Route path="/Shop_Miels" render={(props) => <Miels {...props} />} />
      <Route path="/Shop_Huiles" render={(props) => <Huile {...props} />} />
      <Route path="/product" render={(props) => <Product {...props} />} />
      

    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
