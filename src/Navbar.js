import React from 'react'
import logo from './Image/admin.jpeg';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
export default function Navbar() {
    return (
        <div  className="NavBar">
            <nav className="nav">
            <div className="Profile">
                <img src={logo} alt="logo"/>
            </div>

            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" exact activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" exact activeClassName="active">
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/Port" exact activeClassName="active">
                        Portfolios
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" exact activeClassName="active">
                        contact
                    </NavLink>
                </li>
            </ul>
            
       
            <footer className="footer">
            <p>
                    @2021 copyring 
                </p>
            </footer>
           
            </nav>
            </div>
       
    )
}
