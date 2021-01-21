import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
  
  return (
    <div>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light solop-navbar p-3">
          <Link to="/body" className="navbar-brand">
            <p className="logo-text">Solop Lawyer</p>
          </Link>
          <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto w-100 nav-justified">
              <li className="nav-item">
                <Link to="/body" className="solop-link-menu p-4" >Головна</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="solop-link-menu p-4" >Про адвоката</Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="/services" className="solop-link-menu p-4">
                  Практики
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contacts" className="solop-link-menu p-4" >Контакти</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
