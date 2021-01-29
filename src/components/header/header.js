import React, { Component } from "react";
import { Link } from "react-router-dom";


import "./header.css";

export default class Header extends Component {
  
  constructor(props) {
    super(props)

    this.onToggleMenu = this.onToggleMenu.bind(this)

    
  }

  state = {
    className:"navbar-collapse collapse show"
  }
  
  
  
  onToggleMenu = (e) => {
    console.log(e.currentTarget)
    if (this.state.className==="navbar-collapse collapse show") {
      this.setState = {className:"collapse navbar-collapse"}
    }
  }

  render() {

      

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light solop-navbar p-3">
          <Link 
            to="/" 
            className="navbar-brand">
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

          <div 
            className="collapse navbar-collapse" 
            id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto w-100 nav-justified">
              <li className="nav-item dropdown">
                <Link 
                  to="/" 
                  className="solop-link-menu p-4"
                  data-toggle="collapse" 
                  data-target=".navbar-collapse.show"
                >
                  Головна
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link 
                  to="/about" 
                  className="solop-link-menu p-4"
                  data-toggle="collapse" 
                  data-target=".navbar-collapse.show"
                >
                  Про адвоката
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link 
                  to="/services" 
                  className="solop-link-menu p-4"
                  data-toggle="collapse" 
                  data-target=".navbar-collapse.show"
                >
                  Практики
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link 
                  to="/contacts" 
                  className="solop-link-menu p-4"
                  data-toggle="collapse" 
                  data-target=".navbar-collapse.show"
                >
                  Контакти
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
