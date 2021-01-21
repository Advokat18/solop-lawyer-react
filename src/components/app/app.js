import React, { Component } from 'react';

import Body from '../body/body';
import Header from '../header/header';
import Footer from '../footer/footer';
import About from '../about/about';
import Contacts from '../contacts/contacts';
import Services from '../services/services';

import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {

  render () {
    return (
      <div>
        <Router>
            <Header />
              <Route path="/body" component={Body} />
              <Route path="/about" component={About} />
              <Route path="/services" component={Services} />
              <Route path="/contacts" component={Contacts} />
            <Footer />
        </Router>
      </div>
    );
  };
};
