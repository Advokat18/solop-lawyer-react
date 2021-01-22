import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from "react";

import Indeks from "../body/indeks";
import Header from "../header/header";
import Footer from "../footer/footer";
import About from "../about/about";
import Contacts from "../contacts/contacts";
import Services from "../services/services";

import "./app.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Route exapt path="/" component={Indeks} />
          <Route exapt path="/about" component={About} />
          <Route exapt path="/services" component={Services} />
          <Route exapt path="/contacts" component={Contacts} />
          <Footer />
        </Router>
      </div>
    );
  }
}
