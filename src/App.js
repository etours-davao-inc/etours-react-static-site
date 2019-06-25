import React, { Component } from 'react';
import { Root, Routes } from 'react-static';

import './Templates/css/base.css';

import Footer from './Templates/Footer';
import Header from './Templates/Header';

class App extends Component {
  render() {
    return (
      <Root>
        <Header />
        <React.Suspense fallback={<em>Loading...</em>}>
          <Routes />
        </React.Suspense>
        <Footer />
      </Root>
    );
  }
}

export default App;
