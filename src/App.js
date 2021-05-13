import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import {Switch,Route} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {Component} from 'react';
import Navbar from './Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Port from './Component/Port';
import Contact from './Component/Contact';


export default class App extends Component {
  render() {
    return (
     <div className="App">
      <div className="nav-1">
        <Navbar/>
      </div>
      <div className="main-content">
        <div className="container">
       <Switch>
         <Route path="/" exact>
           <Home/>
         </Route>
         <Route path="/about" exact>
           <About/>
         </Route>
         <Route path="/port" exact>
           <Port/>
         </Route>
         <Route path="/contact" exact>
          <Contact/>
         </Route>
       </Switch>
      </div>
      </div>
     </div>
  
      
    )
  }
}



